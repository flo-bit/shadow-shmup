import { Filter, GlProgram, GpuProgram } from 'pixi.js';
import type { FilterSystem, RenderSurface, Texture } from 'pixi.js';

const vertex = `in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;
    
    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;

const wgslVertex = `
struct GlobalFilterUniforms {
  uInputSize:vec4<f32>,
  uInputPixel:vec4<f32>,
  uInputClamp:vec4<f32>,
  uOutputFrame:vec4<f32>,
  uGlobalFrame:vec4<f32>,
  uOutputTexture:vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;

struct VSOutput {
    @builtin(position) position: vec4<f32>,
    @location(0) uv : vec2<f32>
  };

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
  return gfu.uGlobalFrame.zw;
}
  
@vertex
fn mainVertex(
  @location(0) aPosition : vec2<f32>, 
) -> VSOutput {
  return VSOutput(
   filterVertexPosition(aPosition),
   filterTextureCoord(aPosition)
  );
}
`;

const fragment = `
precision highp float;
in vec2 vTextureCoord;
out vec4 finalColor;

uniform sampler2D uTexture;
uniform vec2 uDimensions;
uniform vec4 uVignetteColor;
uniform float uVignetteStrength;
uniform float uVignetteBlur;
uniform float uAspectRatio;

uniform vec4 uInputSize;

const float SQRT_2 = 1.414213;

void main()
{

    finalColor = texture(uTexture, vTextureCoord);
    vec3 color = finalColor.rgb;

    vec2 coord = vTextureCoord * uInputSize.xy / uDimensions.xy;

    float vignetteAlpha = uVignetteColor.a;

	float outter = SQRT_2 - uVignetteStrength * SQRT_2;
	vec2 dir = vec2(vec2(0.5, 0.5) - coord);
	dir.y *= uDimensions.y / uDimensions.x;
	float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + uVignetteBlur * SQRT_2), 0.0, 1.0);

    color.rgb = mix(uVignetteColor.rgb, color.rgb, darker + (1.0 - darker) * (1.0 - vignetteAlpha));
    
    finalColor.rgb = color;
}
`;

const wgslSource = `
struct VignetteUniforms {
    uDimensions: vec2<f32>,
    uVignetteColor: vec4<f32>,
    uVignetteRadius: f32,
    uVignetteStrength: f32,
    uAspectRatio: f32,
};

struct GlobalFilterUniforms {
    uInputSize: vec4<f32>,
    uInputPixel: vec4<f32>,
    uInputClamp: vec4<f32>,
    uOutputFrame: vec4<f32>,
    uGlobalFrame: vec4<f32>,
    uOutputTexture: vec4<f32>,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler: sampler;
@group(1) @binding(0) var<uniform> vignetteUniforms: VignetteUniforms;

@fragment
fn mainFragment(
    @builtin(position) position: vec4<f32>,
    @location(0) uv: vec2<f32>
) -> @location(0) vec4<f32> {
    var color = textureSample(uTexture, uSampler, uv);
    
    var coord = uv - 0.5;
    coord.x *= vignetteUniforms.uAspectRatio;
    
    let dist = length(coord);
    let maxDist = sqrt(0.5 * vignetteUniforms.uAspectRatio * vignetteUniforms.uAspectRatio + 0.5);
    let vignette = smoothstep(vignetteUniforms.uVignetteRadius, vignetteUniforms.uVignetteRadius - vignetteUniforms.uVignetteStrength, dist / maxDist);
    
    color = mix(vignetteUniforms.uVignetteColor, color, vignette);
    
    return color;
}
`;

export interface VignetteFilterOptions {
	color?: number;
	alpha?: number;
	blur?: number;
	strength?: number;
}

export class VignetteFilter extends Filter {
	public static readonly DEFAULT_OPTIONS: VignetteFilterOptions = {
		color: 0x000000,
		alpha: 1,
		strength: 0.5,
		blur: 0.2
	};

	constructor(options?: VignetteFilterOptions) {
		options = { ...VignetteFilter.DEFAULT_OPTIONS, ...options };

		const gpuProgram = GpuProgram.from({
			vertex: {
				source: wgslVertex,
				entryPoint: 'mainVertex'
			},
			fragment: {
				source: wgslSource,
				entryPoint: 'mainFragment'
			}
		});

		const glProgram = GlProgram.from({
			vertex,
			fragment,
			name: 'vignette-filter'
		});

		super({
			gpuProgram,
			glProgram,
			resources: {
				vignetteUniforms: {
					uDimensions: { value: new Float32Array(2), type: 'vec2<f32>' },
					uVignetteColor: { value: new Float32Array(4), type: 'vec4<f32>' },
					uVignetteStrength: { value: options.strength, type: 'f32' },
					uAspectRatio: { value: 1, type: 'f32' },
					uVignetteBlur: { value: options.blur, type: 'f32' }
				}
			}
		});

		this.color = options.color!;
		this.alpha = options.alpha!;
	}

	apply(
		filterManager: FilterSystem,
		input: Texture,
		output: RenderSurface,
		clearMode: boolean
	): void {
		const { uniforms } = this.resources.vignetteUniforms;
		uniforms.uDimensions[0] = input.frame.width;
		uniforms.uDimensions[1] = input.frame.height;
		uniforms.uAspectRatio = input.frame.width / input.frame.height;

		filterManager.applyFilter(this, input, output, clearMode);
	}

	get color(): number {
		return (
			((this.resources.vignetteUniforms.uniforms.uVignetteColor[0] * 255) << 16) |
			((this.resources.vignetteUniforms.uniforms.uVignetteColor[1] * 255) << 8) |
			(this.resources.vignetteUniforms.uniforms.uVignetteColor[2] * 255)
		);
	}
	set color(value: number) {
		const { uniforms } = this.resources.vignetteUniforms;
		uniforms.uVignetteColor[0] = ((value >> 16) & 0xff) / 255;
		uniforms.uVignetteColor[1] = ((value >> 8) & 0xff) / 255;
		uniforms.uVignetteColor[2] = (value & 0xff) / 255;
	}

	get alpha(): number {
		return this.resources.vignetteUniforms.uniforms.uVignetteColor[3];
	}
	set alpha(value: number) {
		this.resources.vignetteUniforms.uniforms.uVignetteColor[3] = value;
	}

	get strength(): number {
		return this.resources.vignetteUniforms.uniforms.uVignetteStrength;
	}
	set strength(value: number) {
		this.resources.vignetteUniforms.uniforms.uVignetteStrength = value;
	}

	get radius(): number {
		return this.resources.vignetteUniforms.uniforms.uVignetteRadius;
	}
	set radius(value: number) {
		this.resources.vignetteUniforms.uniforms.uVignetteRadius = value;
	}
}
