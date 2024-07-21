var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../node_modules/@dimforge/rapier2d/exports.js
var exports_exports = {};
__export(exports_exports, {
  ActiveCollisionTypes: () => ActiveCollisionTypes,
  ActiveEvents: () => ActiveEvents,
  ActiveHooks: () => ActiveHooks,
  Ball: () => Ball,
  BroadPhase: () => BroadPhase,
  CCDSolver: () => CCDSolver,
  Capsule: () => Capsule,
  CharacterCollision: () => CharacterCollision,
  CoefficientCombineRule: () => CoefficientCombineRule,
  Collider: () => Collider,
  ColliderDesc: () => ColliderDesc,
  ColliderSet: () => ColliderSet,
  ColliderShapeCastHit: () => ColliderShapeCastHit,
  ConvexPolygon: () => ConvexPolygon,
  Cuboid: () => Cuboid,
  DebugRenderBuffers: () => DebugRenderBuffers,
  DebugRenderPipeline: () => DebugRenderPipeline,
  EventQueue: () => EventQueue,
  FeatureType: () => FeatureType,
  FixedImpulseJoint: () => FixedImpulseJoint,
  FixedMultibodyJoint: () => FixedMultibodyJoint,
  HalfSpace: () => HalfSpace,
  Heightfield: () => Heightfield,
  ImpulseJoint: () => ImpulseJoint,
  ImpulseJointSet: () => ImpulseJointSet,
  IntegrationParameters: () => IntegrationParameters,
  IslandManager: () => IslandManager,
  JointAxesMask: () => JointAxesMask,
  JointData: () => JointData,
  JointType: () => JointType,
  KinematicCharacterController: () => KinematicCharacterController,
  MassPropsMode: () => MassPropsMode,
  MotorModel: () => MotorModel,
  MultibodyJoint: () => MultibodyJoint,
  MultibodyJointSet: () => MultibodyJointSet,
  NarrowPhase: () => NarrowPhase,
  PhysicsPipeline: () => PhysicsPipeline,
  PointColliderProjection: () => PointColliderProjection,
  PointProjection: () => PointProjection,
  Polyline: () => Polyline,
  PrismaticImpulseJoint: () => PrismaticImpulseJoint,
  PrismaticMultibodyJoint: () => PrismaticMultibodyJoint,
  QueryFilterFlags: () => QueryFilterFlags,
  QueryPipeline: () => QueryPipeline,
  Ray: () => Ray,
  RayColliderHit: () => RayColliderHit,
  RayColliderIntersection: () => RayColliderIntersection,
  RayIntersection: () => RayIntersection,
  RevoluteImpulseJoint: () => RevoluteImpulseJoint,
  RevoluteMultibodyJoint: () => RevoluteMultibodyJoint,
  RigidBody: () => RigidBody,
  RigidBodyDesc: () => RigidBodyDesc,
  RigidBodySet: () => RigidBodySet,
  RigidBodyType: () => RigidBodyType,
  RopeImpulseJoint: () => RopeImpulseJoint,
  RotationOps: () => RotationOps,
  RoundConvexPolygon: () => RoundConvexPolygon,
  RoundCuboid: () => RoundCuboid,
  RoundTriangle: () => RoundTriangle,
  Segment: () => Segment,
  SerializationPipeline: () => SerializationPipeline,
  Shape: () => Shape,
  ShapeCastHit: () => ShapeCastHit,
  ShapeContact: () => ShapeContact,
  ShapeType: () => ShapeType,
  SolverFlags: () => SolverFlags,
  SpringImpulseJoint: () => SpringImpulseJoint,
  TempContactForceEvent: () => TempContactForceEvent,
  TempContactManifold: () => TempContactManifold,
  TriMesh: () => TriMesh,
  TriMeshFlags: () => TriMeshFlags,
  Triangle: () => Triangle,
  UnitImpulseJoint: () => UnitImpulseJoint,
  UnitMultibodyJoint: () => UnitMultibodyJoint,
  Vector2: () => Vector2,
  VectorOps: () => VectorOps,
  World: () => World,
  version: () => version2
});

// ../node_modules/@dimforge/rapier2d/rapier_wasm2d.js
import * as wasm2 from "/Users/florian/Code/Square-Survivor/node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.wasm";

// ../node_modules/@dimforge/rapier2d/rapier_wasm2d_bg.js
var wasm;
function __wbg_set_wasm(val) {
  wasm = val;
}
var heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
var heap_next = heap.length;
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function getObject(idx) {
  return heap[idx];
}
function dropObject(idx) {
  if (idx < 132) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedFloat64Memory0 = null;
function getFloat64Memory0() {
  if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
    cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
  }
  return cachedFloat64Memory0;
}
var cachedInt32Memory0 = null;
function getInt32Memory0() {
  if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
var lTextDecoder = typeof TextDecoder === "undefined" ? (0, module.require)("util").TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder("utf-8", { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
var cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function version() {
  let deferred1_0;
  let deferred1_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.version(retptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    deferred1_0 = r0;
    deferred1_1 = r1;
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
  }
}
function _assertClass(instance, klass) {
  if (!(instance instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance.ptr;
}
var cachedFloat32Memory0 = null;
function getFloat32Memory0() {
  if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) {
    cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
  }
  return cachedFloat32Memory0;
}
var stack_pointer = 128;
function addBorrowedObject(obj) {
  if (stack_pointer == 1) throw new Error("out of js stack");
  heap[--stack_pointer] = obj;
  return stack_pointer;
}
function getArrayF32FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
var cachedUint32Memory0 = null;
function getUint32Memory0() {
  if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
    cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
  }
  return cachedUint32Memory0;
}
function getArrayU32FromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
var WASM_VECTOR_LEN = 0;
function passArrayF32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4, 4) >>> 0;
  getFloat32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function passArray32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4, 4) >>> 0;
  getUint32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
var RawShapeType = Object.freeze({ Ball: 0, "0": "Ball", Cuboid: 1, "1": "Cuboid", Capsule: 2, "2": "Capsule", Segment: 3, "3": "Segment", Polyline: 4, "4": "Polyline", Triangle: 5, "5": "Triangle", TriMesh: 6, "6": "TriMesh", HeightField: 7, "7": "HeightField", Compound: 8, "8": "Compound", ConvexPolygon: 9, "9": "ConvexPolygon", RoundCuboid: 10, "10": "RoundCuboid", RoundTriangle: 11, "11": "RoundTriangle", RoundConvexPolygon: 12, "12": "RoundConvexPolygon", HalfSpace: 13, "13": "HalfSpace" });
var RawFeatureType = Object.freeze({ Vertex: 0, "0": "Vertex", Face: 1, "1": "Face", Unknown: 2, "2": "Unknown" });
var RawRigidBodyType = Object.freeze({ Dynamic: 0, "0": "Dynamic", Fixed: 1, "1": "Fixed", KinematicPositionBased: 2, "2": "KinematicPositionBased", KinematicVelocityBased: 3, "3": "KinematicVelocityBased" });
var RawJointType = Object.freeze({ Revolute: 0, "0": "Revolute", Fixed: 1, "1": "Fixed", Prismatic: 2, "2": "Prismatic", Rope: 3, "3": "Rope", Spring: 4, "4": "Spring", Generic: 5, "5": "Generic" });
var RawJointAxis = Object.freeze({ X: 0, "0": "X", Y: 1, "1": "Y", AngX: 2, "2": "AngX" });
var RawMotorModel = Object.freeze({ AccelerationBased: 0, "0": "AccelerationBased", ForceBased: 1, "1": "ForceBased" });
var RawBroadPhase = class _RawBroadPhase {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawBroadPhase.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawbroadphase_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawbroadphase_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
};
var RawCCDSolver = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawccdsolver_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawccdsolver_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
};
var RawCharacterCollision = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcharactercollision_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawcharactercollision_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {number}
  */
  handle() {
    const ret = wasm.rawcharactercollision_handle(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  translationDeltaApplied() {
    const ret = wasm.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  translationDeltaRemaining() {
    const ret = wasm.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  toi() {
    const ret = wasm.rawcharactercollision_toi(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  worldWitness1() {
    const ret = wasm.rawcharactercollision_worldWitness1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldWitness2() {
    const ret = wasm.rawcharactercollision_worldWitness2(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldNormal1() {
    const ret = wasm.rawcharactercollision_worldNormal1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  worldNormal2() {
    const ret = wasm.rawcharactercollision_worldNormal2(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
};
var RawColliderSet = class _RawColliderSet {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawColliderSet.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcolliderset_free(ptr);
  }
  /**
  * The world-space translation of this collider.
  * @param {number} handle
  * @returns {RawVector}
  */
  coTranslation(handle) {
    const ret = wasm.rawcolliderset_coTranslation(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space orientation of this collider.
  * @param {number} handle
  * @returns {RawRotation}
  */
  coRotation(handle) {
    const ret = wasm.rawcolliderset_coRotation(this.__wbg_ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Sets the translation of this collider.
  *
  * # Parameters
  * - `x`: the world-space position of the collider along the `x` axis.
  * - `y`: the world-space position of the collider along the `y` axis.
  * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  */
  coSetTranslation(handle, x, y) {
    wasm.rawcolliderset_coSetTranslation(this.__wbg_ptr, handle, x, y);
  }
  /**
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  */
  coSetTranslationWrtParent(handle, x, y) {
    wasm.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, handle, x, y);
  }
  /**
  * Sets the rotation angle of this collider.
  *
  * # Parameters
  * - `angle`: the rotation angle, in radians.
  * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} angle
  */
  coSetRotation(handle, angle) {
    wasm.rawcolliderset_coSetRotation(this.__wbg_ptr, handle, angle);
  }
  /**
  * @param {number} handle
  * @param {number} angle
  */
  coSetRotationWrtParent(handle, angle) {
    wasm.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, handle, angle);
  }
  /**
  * Is this collider a sensor?
  * @param {number} handle
  * @returns {boolean}
  */
  coIsSensor(handle) {
    const ret = wasm.rawcolliderset_coIsSensor(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * The type of the shape of this collider.
  * @param {number} handle
  * @returns {RawShapeType}
  */
  coShapeType(handle) {
    const ret = wasm.rawcolliderset_coShapeType(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHalfspaceNormal(handle) {
    const ret = wasm.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * The half-extents of this collider if it is has a cuboid shape.
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHalfExtents(handle) {
    const ret = wasm.rawcolliderset_coHalfExtents(this.__wbg_ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * Set the half-extents of this collider if it has a cuboid shape.
  * @param {number} handle
  * @param {RawVector} newHalfExtents
  */
  coSetHalfExtents(handle, newHalfExtents) {
    _assertClass(newHalfExtents, RawVector);
    wasm.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, handle, newHalfExtents.__wbg_ptr);
  }
  /**
  * The radius of this collider if it is a ball, capsule, cylinder, or cone shape.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coRadius(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coRadius(retptr, this.__wbg_ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the radius of this collider if it is a ball, capsule, cylinder, or cone shape.
  * @param {number} handle
  * @param {number} newRadius
  */
  coSetRadius(handle, newRadius) {
    wasm.rawcolliderset_coSetRadius(this.__wbg_ptr, handle, newRadius);
  }
  /**
  * The half height of this collider if it is a capsule, cylinder, or cone shape.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coHalfHeight(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coHalfHeight(retptr, this.__wbg_ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the half height of this collider if it is a capsule, cylinder, or cone shape.
  * @param {number} handle
  * @param {number} newHalfheight
  */
  coSetHalfHeight(handle, newHalfheight) {
    wasm.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, handle, newHalfheight);
  }
  /**
  * The radius of the round edges of this collider.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coRoundRadius(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coRoundRadius(retptr, this.__wbg_ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Set the radius of the round edges of this collider.
  * @param {number} handle
  * @param {number} newBorderRadius
  */
  coSetRoundRadius(handle, newBorderRadius) {
    wasm.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, handle, newBorderRadius);
  }
  /**
  * The vertices of this triangle mesh, polyline, convex polyhedron, segment, triangle or convex polyhedron, if it is one.
  * @param {number} handle
  * @returns {Float32Array | undefined}
  */
  coVertices(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coVertices(retptr, this.__wbg_ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v1;
      if (r0 !== 0) {
        v1 = getArrayF32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The indices of this triangle mesh, polyline, or convex polyhedron, if it is one.
  * @param {number} handle
  * @returns {Uint32Array | undefined}
  */
  coIndices(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coIndices(retptr, this.__wbg_ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v1;
      if (r0 !== 0) {
        v1 = getArrayU32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} handle
  * @returns {number | undefined}
  */
  coTriMeshFlags(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coTriMeshFlags(retptr, this.__wbg_ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The height of this heightfield if it is one.
  * @param {number} handle
  * @returns {Float32Array | undefined}
  */
  coHeightfieldHeights(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coHeightfieldHeights(retptr, this.__wbg_ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      let v1;
      if (r0 !== 0) {
        v1 = getArrayF32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
      }
      return v1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * The scaling factor applied of this heightfield if it is one.
  * @param {number} handle
  * @returns {RawVector | undefined}
  */
  coHeightfieldScale(handle) {
    const ret = wasm.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, handle);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * The unique integer identifier of the collider this collider is attached to.
  * @param {number} handle
  * @returns {number | undefined}
  */
  coParent(handle) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawcolliderset_coParent(retptr, this.__wbg_ptr, handle);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  coSetEnabled(handle, enabled) {
    wasm.rawcolliderset_coSetEnabled(this.__wbg_ptr, handle, enabled);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  coIsEnabled(handle) {
    const ret = wasm.rawcolliderset_coIsEnabled(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {number} contact_skin
  */
  coSetContactSkin(handle, contact_skin) {
    wasm.rawcolliderset_coSetContactSkin(this.__wbg_ptr, handle, contact_skin);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  coContactSkin(handle) {
    const ret = wasm.rawcolliderset_coContactSkin(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The friction coefficient of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coFriction(handle) {
    const ret = wasm.rawcolliderset_coFriction(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The restitution coefficient of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coRestitution(handle) {
    const ret = wasm.rawcolliderset_coRestitution(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The density of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coDensity(handle) {
    const ret = wasm.rawcolliderset_coDensity(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The mass of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coMass(handle) {
    const ret = wasm.rawcolliderset_coMass(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The volume of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coVolume(handle) {
    const ret = wasm.rawcolliderset_coVolume(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The collision groups of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coCollisionGroups(handle) {
    const ret = wasm.rawcolliderset_coCollisionGroups(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * The solver groups of this collider.
  * @param {number} handle
  * @returns {number}
  */
  coSolverGroups(handle) {
    const ret = wasm.rawcolliderset_coSolverGroups(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * The physics hooks enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveHooks(handle) {
    const ret = wasm.rawcolliderset_coActiveHooks(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * The collision types enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveCollisionTypes(handle) {
    const ret = wasm.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The events enabled for this collider.
  * @param {number} handle
  * @returns {number}
  */
  coActiveEvents(handle) {
    const ret = wasm.rawcolliderset_coActiveEvents(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * The total force magnitude beyond which a contact force event can be emitted.
  * @param {number} handle
  * @returns {number}
  */
  coContactForceEventThreshold(handle) {
    const ret = wasm.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawVector} point
  * @returns {boolean}
  */
  coContainsPoint(handle, point) {
    _assertClass(point, RawVector);
    const ret = wasm.rawcolliderset_coContainsPoint(this.__wbg_ptr, handle, point.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawVector} colliderVel
  * @param {RawShape} shape2
  * @param {RawVector} shape2Pos
  * @param {RawRotation} shape2Rot
  * @param {RawVector} shape2Vel
  * @param {number} target_distance
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @returns {RawShapeCastHit | undefined}
  */
  coCastShape(handle, colliderVel, shape2, shape2Pos, shape2Rot, shape2Vel, target_distance, maxToi, stop_at_penetration) {
    _assertClass(colliderVel, RawVector);
    _assertClass(shape2, RawShape);
    _assertClass(shape2Pos, RawVector);
    _assertClass(shape2Rot, RawRotation);
    _assertClass(shape2Vel, RawVector);
    const ret = wasm.rawcolliderset_coCastShape(this.__wbg_ptr, handle, colliderVel.__wbg_ptr, shape2.__wbg_ptr, shape2Pos.__wbg_ptr, shape2Rot.__wbg_ptr, shape2Vel.__wbg_ptr, target_distance, maxToi, stop_at_penetration);
    return ret === 0 ? void 0 : RawShapeCastHit.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} collider1Vel
  * @param {number} collider2handle
  * @param {RawVector} collider2Vel
  * @param {number} target_distance
  * @param {number} max_toi
  * @param {boolean} stop_at_penetration
  * @returns {RawColliderShapeCastHit | undefined}
  */
  coCastCollider(handle, collider1Vel, collider2handle, collider2Vel, target_distance, max_toi, stop_at_penetration) {
    _assertClass(collider1Vel, RawVector);
    _assertClass(collider2Vel, RawVector);
    const ret = wasm.rawcolliderset_coCastCollider(this.__wbg_ptr, handle, collider1Vel.__wbg_ptr, collider2handle, collider2Vel.__wbg_ptr, target_distance, max_toi, stop_at_penetration);
    return ret === 0 ? void 0 : RawColliderShapeCastHit.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @returns {boolean}
  */
  coIntersectsShape(handle, shape2, shapePos2, shapeRot2) {
    _assertClass(shape2, RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = wasm.rawcolliderset_coIntersectsShape(this.__wbg_ptr, handle, shape2.__wbg_ptr, shapePos2.__wbg_ptr, shapeRot2.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  coContactShape(handle, shape2, shapePos2, shapeRot2, prediction) {
    _assertClass(shape2, RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = wasm.rawcolliderset_coContactShape(this.__wbg_ptr, handle, shape2.__wbg_ptr, shapePos2.__wbg_ptr, shapeRot2.__wbg_ptr, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {number} collider2handle
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  coContactCollider(handle, collider2handle, prediction) {
    const ret = wasm.rawcolliderset_coContactCollider(this.__wbg_ptr, handle, collider2handle, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} point
  * @param {boolean} solid
  * @returns {RawPointProjection}
  */
  coProjectPoint(handle, point, solid) {
    _assertClass(point, RawVector);
    const ret = wasm.rawcolliderset_coProjectPoint(this.__wbg_ptr, handle, point.__wbg_ptr, solid);
    return RawPointProjection.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @returns {boolean}
  */
  coIntersectsRay(handle, rayOrig, rayDir, maxToi) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawcolliderset_coIntersectsRay(this.__wbg_ptr, handle, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {number}
  */
  coCastRay(handle, rayOrig, rayDir, maxToi, solid) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawcolliderset_coCastRay(this.__wbg_ptr, handle, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi, solid);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {RawRayIntersection | undefined}
  */
  coCastRayAndGetNormal(handle, rayOrig, rayDir, maxToi, solid) {
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, handle, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi, solid);
    return ret === 0 ? void 0 : RawRayIntersection.__wrap(ret);
  }
  /**
  * @param {number} handle
  * @param {boolean} is_sensor
  */
  coSetSensor(handle, is_sensor) {
    wasm.rawcolliderset_coSetSensor(this.__wbg_ptr, handle, is_sensor);
  }
  /**
  * @param {number} handle
  * @param {number} restitution
  */
  coSetRestitution(handle, restitution) {
    wasm.rawcolliderset_coSetRestitution(this.__wbg_ptr, handle, restitution);
  }
  /**
  * @param {number} handle
  * @param {number} friction
  */
  coSetFriction(handle, friction) {
    wasm.rawcolliderset_coSetFriction(this.__wbg_ptr, handle, friction);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  coFrictionCombineRule(handle) {
    const ret = wasm.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @param {number} rule
  */
  coSetFrictionCombineRule(handle, rule) {
    wasm.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, handle, rule);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  coRestitutionCombineRule(handle) {
    const ret = wasm.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @param {number} rule
  */
  coSetRestitutionCombineRule(handle, rule) {
    wasm.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, handle, rule);
  }
  /**
  * @param {number} handle
  * @param {number} groups
  */
  coSetCollisionGroups(handle, groups) {
    wasm.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, handle, groups);
  }
  /**
  * @param {number} handle
  * @param {number} groups
  */
  coSetSolverGroups(handle, groups) {
    wasm.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, handle, groups);
  }
  /**
  * @param {number} handle
  * @param {number} hooks
  */
  coSetActiveHooks(handle, hooks) {
    wasm.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, handle, hooks);
  }
  /**
  * @param {number} handle
  * @param {number} events
  */
  coSetActiveEvents(handle, events) {
    wasm.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, handle, events);
  }
  /**
  * @param {number} handle
  * @param {number} types
  */
  coSetActiveCollisionTypes(handle, types) {
    wasm.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, handle, types);
  }
  /**
  * @param {number} handle
  * @param {RawShape} shape
  */
  coSetShape(handle, shape) {
    _assertClass(shape, RawShape);
    wasm.rawcolliderset_coSetShape(this.__wbg_ptr, handle, shape.__wbg_ptr);
  }
  /**
  * @param {number} handle
  * @param {number} threshold
  */
  coSetContactForceEventThreshold(handle, threshold) {
    wasm.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, handle, threshold);
  }
  /**
  * @param {number} handle
  * @param {number} density
  */
  coSetDensity(handle, density) {
    wasm.rawcolliderset_coSetDensity(this.__wbg_ptr, handle, density);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  */
  coSetMass(handle, mass) {
    wasm.rawcolliderset_coSetMass(this.__wbg_ptr, handle, mass);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {number} principalAngularInertia
  */
  coSetMassProperties(handle, mass, centerOfMass, principalAngularInertia) {
    _assertClass(centerOfMass, RawVector);
    wasm.rawcolliderset_coSetMassProperties(this.__wbg_ptr, handle, mass, centerOfMass.__wbg_ptr, principalAngularInertia);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawcolliderset_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {number}
  */
  len() {
    const ret = wasm.rawcolliderset_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = wasm.rawcolliderset_contains(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * @param {boolean} enabled
  * @param {RawShape} shape
  * @param {RawVector} translation
  * @param {RawRotation} rotation
  * @param {number} massPropsMode
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {number} principalAngularInertia
  * @param {number} density
  * @param {number} friction
  * @param {number} restitution
  * @param {number} frictionCombineRule
  * @param {number} restitutionCombineRule
  * @param {boolean} isSensor
  * @param {number} collisionGroups
  * @param {number} solverGroups
  * @param {number} activeCollisionTypes
  * @param {number} activeHooks
  * @param {number} activeEvents
  * @param {number} contactForceEventThreshold
  * @param {number} contactSkin
  * @param {boolean} hasParent
  * @param {number} parent
  * @param {RawRigidBodySet} bodies
  * @returns {number | undefined}
  */
  createCollider(enabled, shape, translation, rotation, massPropsMode, mass, centerOfMass, principalAngularInertia, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, contactForceEventThreshold, contactSkin, hasParent, parent, bodies) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(shape, RawShape);
      _assertClass(translation, RawVector);
      _assertClass(rotation, RawRotation);
      _assertClass(centerOfMass, RawVector);
      _assertClass(bodies, RawRigidBodySet);
      wasm.rawcolliderset_createCollider(retptr, this.__wbg_ptr, enabled, shape.__wbg_ptr, translation.__wbg_ptr, rotation.__wbg_ptr, massPropsMode, mass, centerOfMass.__wbg_ptr, principalAngularInertia, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, contactForceEventThreshold, contactSkin, hasParent, parent, bodies.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * Removes a collider from this set and wake-up the rigid-body it is attached to.
  * @param {number} handle
  * @param {RawIslandManager} islands
  * @param {RawRigidBodySet} bodies
  * @param {boolean} wakeUp
  */
  remove(handle, islands, bodies, wakeUp) {
    _assertClass(islands, RawIslandManager);
    _assertClass(bodies, RawRigidBodySet);
    wasm.rawcolliderset_remove(this.__wbg_ptr, handle, islands.__wbg_ptr, bodies.__wbg_ptr, wakeUp);
  }
  /**
  * Checks if a collider with the given integer handle exists.
  * @param {number} handle
  * @returns {boolean}
  */
  isHandleValid(handle) {
    const ret = wasm.rawcolliderset_contains(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each collider managed by this collider set.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each collider managed by this collider set. Called as `f(handle)`.
  * @param {Function} f
  */
  forEachColliderHandle(f) {
    try {
      wasm.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawColliderShapeCastHit = class _RawColliderShapeCastHit {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawColliderShapeCastHit.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcollidershapecasthit_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = wasm.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  time_of_impact() {
    const ret = wasm.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  witness1() {
    const ret = wasm.rawcollidershapecasthit_witness1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  witness2() {
    const ret = wasm.rawcollidershapecasthit_witness2(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = wasm.rawcollidershapecasthit_normal1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = wasm.rawcollidershapecasthit_normal2(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
};
var RawContactManifold = class _RawContactManifold {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawContactManifold.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcontactmanifold_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = wasm.rawcontactmanifold_normal(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  local_n1() {
    const ret = wasm.rawcontactmanifold_local_n1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  local_n2() {
    const ret = wasm.rawcontactmanifold_local_n2(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  subshape1() {
    const ret = wasm.rawcontactmanifold_subshape1(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  subshape2() {
    const ret = wasm.rawcontactmanifold_subshape2(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  num_contacts() {
    const ret = wasm.rawcontactmanifold_num_contacts(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  contact_local_p1(i) {
    const ret = wasm.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  contact_local_p2(i) {
    const ret = wasm.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_dist(i) {
    const ret = wasm.rawcontactmanifold_contact_dist(this.__wbg_ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_fid1(i) {
    const ret = wasm.rawcontactmanifold_contact_fid1(this.__wbg_ptr, i);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_fid2(i) {
    const ret = wasm.rawcontactmanifold_contact_fid2(this.__wbg_ptr, i);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_impulse(i) {
    const ret = wasm.rawcontactmanifold_contact_impulse(this.__wbg_ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  contact_tangent_impulse(i) {
    const ret = wasm.rawcontactmanifold_contact_tangent_impulse(this.__wbg_ptr, i);
    return ret;
  }
  /**
  * @returns {number}
  */
  num_solver_contacts() {
    const ret = wasm.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawVector | undefined}
  */
  solver_contact_point(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, i);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_dist(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_friction(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {number}
  */
  solver_contact_restitution(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, i);
    return ret;
  }
  /**
  * @param {number} i
  * @returns {RawVector}
  */
  solver_contact_tangent_velocity(i) {
    const ret = wasm.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, i);
    return RawVector.__wrap(ret);
  }
};
var RawContactPair = class _RawContactPair {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawContactPair.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawcontactpair_free(ptr);
  }
  /**
  * @returns {number}
  */
  collider1() {
    const ret = wasm.rawcontactpair_collider1(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  collider2() {
    const ret = wasm.rawcontactpair_collider2(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  numContactManifolds() {
    const ret = wasm.rawcontactpair_numContactManifolds(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @returns {RawContactManifold | undefined}
  */
  contactManifold(i) {
    const ret = wasm.rawcontactpair_contactManifold(this.__wbg_ptr, i);
    return ret === 0 ? void 0 : RawContactManifold.__wrap(ret);
  }
};
var RawDebugRenderPipeline = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawdebugrenderpipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawdebugrenderpipeline_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {Float32Array}
  */
  vertices() {
    const ret = wasm.rawdebugrenderpipeline_vertices(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @returns {Float32Array}
  */
  colors() {
    const ret = wasm.rawdebugrenderpipeline_colors(this.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} impulse_joints
  * @param {RawMultibodyJointSet} multibody_joints
  * @param {RawNarrowPhase} narrow_phase
  */
  render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(impulse_joints, RawImpulseJointSet);
    _assertClass(multibody_joints, RawMultibodyJointSet);
    _assertClass(narrow_phase, RawNarrowPhase);
    wasm.rawdebugrenderpipeline_render(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, impulse_joints.__wbg_ptr, multibody_joints.__wbg_ptr, narrow_phase.__wbg_ptr);
  }
};
var RawDeserializedWorld = class _RawDeserializedWorld {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawDeserializedWorld.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawdeserializedworld_free(ptr);
  }
  /**
  * @returns {RawVector | undefined}
  */
  takeGravity() {
    const ret = wasm.rawdeserializedworld_takeGravity(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawVector.__wrap(ret);
  }
  /**
  * @returns {RawIntegrationParameters | undefined}
  */
  takeIntegrationParameters() {
    const ret = wasm.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawIntegrationParameters.__wrap(ret);
  }
  /**
  * @returns {RawIslandManager | undefined}
  */
  takeIslandManager() {
    const ret = wasm.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawIslandManager.__wrap(ret);
  }
  /**
  * @returns {RawBroadPhase | undefined}
  */
  takeBroadPhase() {
    const ret = wasm.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawBroadPhase.__wrap(ret);
  }
  /**
  * @returns {RawNarrowPhase | undefined}
  */
  takeNarrowPhase() {
    const ret = wasm.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawNarrowPhase.__wrap(ret);
  }
  /**
  * @returns {RawRigidBodySet | undefined}
  */
  takeBodies() {
    const ret = wasm.rawdeserializedworld_takeBodies(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawRigidBodySet.__wrap(ret);
  }
  /**
  * @returns {RawColliderSet | undefined}
  */
  takeColliders() {
    const ret = wasm.rawdeserializedworld_takeColliders(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawColliderSet.__wrap(ret);
  }
  /**
  * @returns {RawImpulseJointSet | undefined}
  */
  takeImpulseJoints() {
    const ret = wasm.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawImpulseJointSet.__wrap(ret);
  }
  /**
  * @returns {RawMultibodyJointSet | undefined}
  */
  takeMultibodyJoints() {
    const ret = wasm.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
    return ret === 0 ? void 0 : RawMultibodyJointSet.__wrap(ret);
  }
};
var RawEventQueue = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_raweventqueue_free(ptr);
  }
  /**
  * Creates a new event collector.
  *
  * # Parameters
  * - `autoDrain`: setting this to `true` is strongly recommended. If true, the collector will
  * be automatically drained before each `world.step(collector)`. If false, the collector will
  * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
  * RAM if no drain is performed.
  * @param {boolean} autoDrain
  */
  constructor(autoDrain) {
    const ret = wasm.raweventqueue_new(autoDrain);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * Applies the given javascript closure on each collision event of this collector, then clear
  * the internal collision event buffer.
  *
  * # Parameters
  * - `f(handle1, handle2, started)`:  JavaScript closure applied to each collision event. The
  * closure should take three arguments: two integers representing the handles of the colliders
  * involved in the collision, and a boolean indicating if the collision started (true) or stopped
  * (false).
  * @param {Function} f
  */
  drainCollisionEvents(f) {
    try {
      wasm.raweventqueue_drainCollisionEvents(this.__wbg_ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {Function} f
  */
  drainContactForceEvents(f) {
    try {
      wasm.raweventqueue_drainContactForceEvents(this.__wbg_ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Removes all events contained by this collector.
  */
  clear() {
    wasm.raweventqueue_clear(this.__wbg_ptr);
  }
};
var RawGenericJoint = class _RawGenericJoint {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawGenericJoint.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawgenericjoint_free(ptr);
  }
  /**
  * @param {number} rest_length
  * @param {number} stiffness
  * @param {number} damping
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @returns {RawGenericJoint}
  */
  static spring(rest_length, stiffness, damping, anchor1, anchor2) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    const ret = wasm.rawgenericjoint_spring(rest_length, stiffness, damping, anchor1.__wbg_ptr, anchor2.__wbg_ptr);
    return _RawGenericJoint.__wrap(ret);
  }
  /**
  * @param {number} length
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @returns {RawGenericJoint}
  */
  static rope(length, anchor1, anchor2) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    const ret = wasm.rawgenericjoint_rope(length, anchor1.__wbg_ptr, anchor2.__wbg_ptr);
    return _RawGenericJoint.__wrap(ret);
  }
  /**
  * Creates a new joint descriptor that builds a Prismatic joint.
  *
  * A prismatic joint removes all the degrees of freedom between the
  * affected bodies, except for the translation along one axis.
  *
  * Returns `None` if any of the provided axes cannot be normalized.
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @param {RawVector} axis
  * @param {boolean} limitsEnabled
  * @param {number} limitsMin
  * @param {number} limitsMax
  * @returns {RawGenericJoint | undefined}
  */
  static prismatic(anchor1, anchor2, axis, limitsEnabled, limitsMin, limitsMax) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    _assertClass(axis, RawVector);
    const ret = wasm.rawgenericjoint_prismatic(anchor1.__wbg_ptr, anchor2.__wbg_ptr, axis.__wbg_ptr, limitsEnabled, limitsMin, limitsMax);
    return ret === 0 ? void 0 : _RawGenericJoint.__wrap(ret);
  }
  /**
  * Creates a new joint descriptor that builds a Fixed joint.
  *
  * A fixed joint removes all the degrees of freedom between the affected bodies.
  * @param {RawVector} anchor1
  * @param {RawRotation} axes1
  * @param {RawVector} anchor2
  * @param {RawRotation} axes2
  * @returns {RawGenericJoint}
  */
  static fixed(anchor1, axes1, anchor2, axes2) {
    _assertClass(anchor1, RawVector);
    _assertClass(axes1, RawRotation);
    _assertClass(anchor2, RawVector);
    _assertClass(axes2, RawRotation);
    const ret = wasm.rawgenericjoint_fixed(anchor1.__wbg_ptr, axes1.__wbg_ptr, anchor2.__wbg_ptr, axes2.__wbg_ptr);
    return _RawGenericJoint.__wrap(ret);
  }
  /**
  * Create a new joint descriptor that builds Revolute joints.
  *
  * A revolute joint removes all degrees of freedom between the affected
  * bodies except for the rotation.
  * @param {RawVector} anchor1
  * @param {RawVector} anchor2
  * @returns {RawGenericJoint | undefined}
  */
  static revolute(anchor1, anchor2) {
    _assertClass(anchor1, RawVector);
    _assertClass(anchor2, RawVector);
    const ret = wasm.rawgenericjoint_revolute(anchor1.__wbg_ptr, anchor2.__wbg_ptr);
    return ret === 0 ? void 0 : _RawGenericJoint.__wrap(ret);
  }
};
var RawImpulseJointSet = class _RawImpulseJointSet {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawImpulseJointSet.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawimpulsejointset_free(ptr);
  }
  /**
  * The type of this joint.
  * @param {number} handle
  * @returns {RawJointType}
  */
  jointType(handle) {
    const ret = wasm.rawimpulsejointset_jointType(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The unique integer identifier of the first rigid-body this joint it attached to.
  * @param {number} handle
  * @returns {number}
  */
  jointBodyHandle1(handle) {
    const ret = wasm.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The unique integer identifier of the second rigid-body this joint is attached to.
  * @param {number} handle
  * @returns {number}
  */
  jointBodyHandle2(handle) {
    const ret = wasm.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX1(handle) {
    const ret = wasm.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX2(handle) {
    const ret = wasm.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The position of the first anchor of this joint.
  *
  * The first anchor gives the position of the points application point on the
  * local frame of the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor1(handle) {
    const ret = wasm.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The position of the second anchor of this joint.
  *
  * The second anchor gives the position of the points application point on the
  * local frame of the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor2(handle) {
    const ret = wasm.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * Sets the position of the first local anchor
  * @param {number} handle
  * @param {RawVector} newPos
  */
  jointSetAnchor1(handle, newPos) {
    _assertClass(newPos, RawVector);
    wasm.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, handle, newPos.__wbg_ptr);
  }
  /**
  * Sets the position of the second local anchor
  * @param {number} handle
  * @param {RawVector} newPos
  */
  jointSetAnchor2(handle, newPos) {
    _assertClass(newPos, RawVector);
    wasm.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, handle, newPos.__wbg_ptr);
  }
  /**
  * Are contacts between the rigid-bodies attached by this joint enabled?
  * @param {number} handle
  * @returns {boolean}
  */
  jointContactsEnabled(handle) {
    const ret = wasm.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
  * @param {number} handle
  * @param {boolean} enabled
  */
  jointSetContactsEnabled(handle, enabled) {
    wasm.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, handle, enabled);
  }
  /**
  * Are the limits for this joint enabled?
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @returns {boolean}
  */
  jointLimitsEnabled(handle, axis) {
    const ret = wasm.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, handle, axis);
    return ret !== 0;
  }
  /**
  * Return the lower limit along the given joint axis.
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @returns {number}
  */
  jointLimitsMin(handle, axis) {
    const ret = wasm.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, handle, axis);
    return ret;
  }
  /**
  * If this is a prismatic joint, returns its upper limit.
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @returns {number}
  */
  jointLimitsMax(handle, axis) {
    const ret = wasm.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, handle, axis);
    return ret;
  }
  /**
  * Enables and sets the joint limits
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @param {number} min
  * @param {number} max
  */
  jointSetLimits(handle, axis, min, max) {
    wasm.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, handle, axis, min, max);
  }
  /**
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @param {RawMotorModel} model
  */
  jointConfigureMotorModel(handle, axis, model) {
    wasm.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, handle, axis, model);
  }
  /**
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @param {number} targetVel
  * @param {number} factor
  */
  jointConfigureMotorVelocity(handle, axis, targetVel, factor) {
    wasm.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, handle, axis, targetVel, factor);
  }
  /**
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @param {number} targetPos
  * @param {number} stiffness
  * @param {number} damping
  */
  jointConfigureMotorPosition(handle, axis, targetPos, stiffness, damping) {
    wasm.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, handle, axis, targetPos, stiffness, damping);
  }
  /**
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @param {number} targetPos
  * @param {number} targetVel
  * @param {number} stiffness
  * @param {number} damping
  */
  jointConfigureMotor(handle, axis, targetPos, targetVel, stiffness, damping) {
    wasm.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, handle, axis, targetPos, targetVel, stiffness, damping);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawimpulsejointset_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @param {RawGenericJoint} params
  * @param {number} parent1
  * @param {number} parent2
  * @param {boolean} wake_up
  * @returns {number}
  */
  createJoint(params, parent1, parent2, wake_up) {
    _assertClass(params, RawGenericJoint);
    const ret = wasm.rawimpulsejointset_createJoint(this.__wbg_ptr, params.__wbg_ptr, parent1, parent2, wake_up);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  remove(handle, wakeUp) {
    wasm.rawimpulsejointset_remove(this.__wbg_ptr, handle, wakeUp);
  }
  /**
  * @returns {number}
  */
  len() {
    const ret = wasm.rawimpulsejointset_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = wasm.rawimpulsejointset_contains(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachJointHandle(f) {
    try {
      wasm.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
  * @param {number} body
  * @param {Function} f
  */
  forEachJointAttachedToRigidBody(body, f) {
    try {
      wasm.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, body, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawIntegrationParameters = class _RawIntegrationParameters {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawIntegrationParameters.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawintegrationparameters_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawintegrationparameters_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {number}
  */
  get dt() {
    const ret = wasm.rawintegrationparameters_dt(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get erp() {
    const ret = wasm.rawintegrationparameters_erp(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get normalizedAllowedLinearError() {
    const ret = wasm.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get normalizedPredictionDistance() {
    const ret = wasm.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  get numSolverIterations() {
    const ret = wasm.rawintegrationparameters_numSolverIterations(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get numAdditionalFrictionIterations() {
    const ret = wasm.rawintegrationparameters_numAdditionalFrictionIterations(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get numInternalPgsIterations() {
    const ret = wasm.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get minIslandSize() {
    const ret = wasm.rawimpulsejointset_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get maxCcdSubsteps() {
    const ret = wasm.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @returns {number}
  */
  get lengthUnit() {
    const ret = wasm.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    return ret;
  }
  /**
  * @param {number} value
  */
  set dt(value) {
    wasm.rawintegrationparameters_set_dt(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set erp(value) {
    wasm.rawintegrationparameters_set_erp(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set normalizedAllowedLinearError(value) {
    wasm.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set normalizedPredictionDistance(value) {
    wasm.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set numSolverIterations(value) {
    wasm.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set numAdditionalFrictionIterations(value) {
    wasm.rawintegrationparameters_set_numAdditionalFrictionIterations(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set numInternalPgsIterations(value) {
    wasm.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set minIslandSize(value) {
    wasm.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set maxCcdSubsteps(value) {
    wasm.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, value);
  }
  /**
  * @param {number} value
  */
  set lengthUnit(value) {
    wasm.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, value);
  }
  /**
  */
  switchToStandardPgsSolver() {
    wasm.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
  }
  /**
  */
  switchToSmallStepsPgsSolver() {
    wasm.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
  }
  /**
  */
  switchToSmallStepsPgsSolverWithoutWarmstart() {
    wasm.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(this.__wbg_ptr);
  }
};
var RawIslandManager = class _RawIslandManager {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawIslandManager.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawislandmanager_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawislandmanager_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each active rigid-body
  * managed by this island manager.
  *
  * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
  * the physics engine in order to save computational power. A sleeping rigid-body never moves
  * unless it is moved manually by the user.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each active rigid-body managed by this
  *   set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachActiveRigidBodyHandle(f) {
    try {
      wasm.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawKinematicCharacterController = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawkinematiccharactercontroller_free(ptr);
  }
  /**
  * @param {number} offset
  */
  constructor(offset) {
    const ret = wasm.rawkinematiccharactercontroller_new(offset);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @returns {RawVector}
  */
  up() {
    const ret = wasm.rawcollidershapecasthit_normal2(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @param {RawVector} vector
  */
  setUp(vector) {
    _assertClass(vector, RawVector);
    wasm.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, vector.__wbg_ptr);
  }
  /**
  * @returns {number}
  */
  normalNudgeFactor() {
    const ret = wasm.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr);
    return ret;
  }
  /**
  * @param {number} value
  */
  setNormalNudgeFactor(value) {
    wasm.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr, value);
  }
  /**
  * @returns {number}
  */
  offset() {
    const ret = wasm.rawintegrationparameters_dt(this.__wbg_ptr);
    return ret;
  }
  /**
  * @param {number} value
  */
  setOffset(value) {
    wasm.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, value);
  }
  /**
  * @returns {boolean}
  */
  slideEnabled() {
    const ret = wasm.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {boolean} enabled
  */
  setSlideEnabled(enabled) {
    wasm.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, enabled);
  }
  /**
  * @returns {number | undefined}
  */
  autostepMaxHeight() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawkinematiccharactercontroller_autostepMaxHeight(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {number | undefined}
  */
  autostepMinWidth() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawkinematiccharactercontroller_autostepMinWidth(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @returns {boolean | undefined}
  */
  autostepIncludesDynamicBodies() {
    const ret = wasm.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
    return ret === 16777215 ? void 0 : ret !== 0;
  }
  /**
  * @returns {boolean}
  */
  autostepEnabled() {
    const ret = wasm.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {number} maxHeight
  * @param {number} minWidth
  * @param {boolean} includeDynamicBodies
  */
  enableAutostep(maxHeight, minWidth, includeDynamicBodies) {
    wasm.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, maxHeight, minWidth, includeDynamicBodies);
  }
  /**
  */
  disableAutostep() {
    wasm.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
  }
  /**
  * @returns {number}
  */
  maxSlopeClimbAngle() {
    const ret = wasm.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr);
    return ret;
  }
  /**
  * @param {number} angle
  */
  setMaxSlopeClimbAngle(angle) {
    wasm.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr, angle);
  }
  /**
  * @returns {number}
  */
  minSlopeSlideAngle() {
    const ret = wasm.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
    return ret;
  }
  /**
  * @param {number} angle
  */
  setMinSlopeSlideAngle(angle) {
    wasm.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, angle);
  }
  /**
  * @returns {number | undefined}
  */
  snapToGroundDistance() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawkinematiccharactercontroller_snapToGroundDistance(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getFloat32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  /**
  * @param {number} distance
  */
  enableSnapToGround(distance) {
    wasm.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, distance);
  }
  /**
  */
  disableSnapToGround() {
    wasm.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
  }
  /**
  * @returns {boolean}
  */
  snapToGroundEnabled() {
    const ret = wasm.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {number} dt
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawQueryPipeline} queries
  * @param {number} collider_handle
  * @param {RawVector} desired_translation_delta
  * @param {boolean} apply_impulses_to_dynamic_bodies
  * @param {number | undefined} character_mass
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {Function} filter_predicate
  */
  computeColliderMovement(dt, bodies, colliders, queries, collider_handle, desired_translation_delta, apply_impulses_to_dynamic_bodies, character_mass, filter_flags, filter_groups, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(queries, RawQueryPipeline);
      _assertClass(desired_translation_delta, RawVector);
      wasm.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, dt, bodies.__wbg_ptr, colliders.__wbg_ptr, queries.__wbg_ptr, collider_handle, desired_translation_delta.__wbg_ptr, apply_impulses_to_dynamic_bodies, !isLikeNone(character_mass), isLikeNone(character_mass) ? 0 : character_mass, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @returns {RawVector}
  */
  computedMovement() {
    const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  computedGrounded() {
    const ret = wasm.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @returns {number}
  */
  numComputedCollisions() {
    const ret = wasm.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * @param {number} i
  * @param {RawCharacterCollision} collision
  * @returns {boolean}
  */
  computedCollision(i, collision) {
    _assertClass(collision, RawCharacterCollision);
    const ret = wasm.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, i, collision.__wbg_ptr);
    return ret !== 0;
  }
};
var RawMultibodyJointSet = class _RawMultibodyJointSet {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawMultibodyJointSet.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawmultibodyjointset_free(ptr);
  }
  /**
  * The type of this joint.
  * @param {number} handle
  * @returns {RawJointType}
  */
  jointType(handle) {
    const ret = wasm.rawmultibodyjointset_jointType(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX1(handle) {
    const ret = wasm.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawRotation}
  */
  jointFrameX2(handle) {
    const ret = wasm.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * The position of the first anchor of this joint.
  *
  * The first anchor gives the position of the points application point on the
  * local frame of the first rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor1(handle) {
    const ret = wasm.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The position of the second anchor of this joint.
  *
  * The second anchor gives the position of the points application point on the
  * local frame of the second rigid-body it is attached to.
  * @param {number} handle
  * @returns {RawVector}
  */
  jointAnchor2(handle) {
    const ret = wasm.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * Are contacts between the rigid-bodies attached by this joint enabled?
  * @param {number} handle
  * @returns {boolean}
  */
  jointContactsEnabled(handle) {
    const ret = wasm.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
  * @param {number} handle
  * @param {boolean} enabled
  */
  jointSetContactsEnabled(handle, enabled) {
    wasm.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, handle, enabled);
  }
  /**
  * Are the limits for this joint enabled?
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @returns {boolean}
  */
  jointLimitsEnabled(handle, axis) {
    const ret = wasm.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, handle, axis);
    return ret !== 0;
  }
  /**
  * Return the lower limit along the given joint axis.
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @returns {number}
  */
  jointLimitsMin(handle, axis) {
    const ret = wasm.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, handle, axis);
    return ret;
  }
  /**
  * If this is a prismatic joint, returns its upper limit.
  * @param {number} handle
  * @param {RawJointAxis} axis
  * @returns {number}
  */
  jointLimitsMax(handle, axis) {
    const ret = wasm.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, handle, axis);
    return ret;
  }
  /**
  */
  constructor() {
    const ret = wasm.rawmultibodyjointset_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @param {RawGenericJoint} params
  * @param {number} parent1
  * @param {number} parent2
  * @param {boolean} wakeUp
  * @returns {number}
  */
  createJoint(params, parent1, parent2, wakeUp) {
    _assertClass(params, RawGenericJoint);
    const ret = wasm.rawmultibodyjointset_createJoint(this.__wbg_ptr, params.__wbg_ptr, parent1, parent2, wakeUp);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  remove(handle, wakeUp) {
    wasm.rawmultibodyjointset_remove(this.__wbg_ptr, handle, wakeUp);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = wasm.rawmultibodyjointset_contains(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachJointHandle(f) {
    try {
      wasm.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
  * @param {number} body
  * @param {Function} f
  */
  forEachJointAttachedToRigidBody(body, f) {
    try {
      wasm.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, body, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawNarrowPhase = class _RawNarrowPhase {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawNarrowPhase.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawnarrowphase_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawnarrowphase_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @param {number} handle1
  * @param {Function} f
  */
  contact_pairs_with(handle1, f) {
    wasm.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, handle1, addHeapObject(f));
  }
  /**
  * @param {number} handle1
  * @param {number} handle2
  * @returns {RawContactPair | undefined}
  */
  contact_pair(handle1, handle2) {
    const ret = wasm.rawnarrowphase_contact_pair(this.__wbg_ptr, handle1, handle2);
    return ret === 0 ? void 0 : RawContactPair.__wrap(ret);
  }
  /**
  * @param {number} handle1
  * @param {Function} f
  */
  intersection_pairs_with(handle1, f) {
    wasm.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, handle1, addHeapObject(f));
  }
  /**
  * @param {number} handle1
  * @param {number} handle2
  * @returns {boolean}
  */
  intersection_pair(handle1, handle2) {
    const ret = wasm.rawnarrowphase_intersection_pair(this.__wbg_ptr, handle1, handle2);
    return ret !== 0;
  }
};
var RawPhysicsPipeline = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawphysicspipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawphysicspipeline_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  * @param {RawCCDSolver} ccd_solver
  */
  step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    _assertClass(ccd_solver, RawCCDSolver);
    wasm.rawphysicspipeline_step(this.__wbg_ptr, gravity.__wbg_ptr, integrationParameters.__wbg_ptr, islands.__wbg_ptr, broadPhase.__wbg_ptr, narrowPhase.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, joints.__wbg_ptr, articulations.__wbg_ptr, ccd_solver.__wbg_ptr);
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  * @param {RawCCDSolver} ccd_solver
  * @param {RawEventQueue} eventQueue
  * @param {object} hookObject
  * @param {Function} hookFilterContactPair
  * @param {Function} hookFilterIntersectionPair
  */
  stepWithEvents(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver, eventQueue, hookObject, hookFilterContactPair, hookFilterIntersectionPair) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    _assertClass(ccd_solver, RawCCDSolver);
    _assertClass(eventQueue, RawEventQueue);
    wasm.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, gravity.__wbg_ptr, integrationParameters.__wbg_ptr, islands.__wbg_ptr, broadPhase.__wbg_ptr, narrowPhase.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, joints.__wbg_ptr, articulations.__wbg_ptr, ccd_solver.__wbg_ptr, eventQueue.__wbg_ptr, addHeapObject(hookObject), addHeapObject(hookFilterContactPair), addHeapObject(hookFilterIntersectionPair));
  }
};
var RawPointColliderProjection = class _RawPointColliderProjection {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawPointColliderProjection.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawpointcolliderprojection_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = wasm.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  point() {
    const ret = wasm.rawpointcolliderprojection_point(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  isInside() {
    const ret = wasm.rawpointcolliderprojection_isInside(this.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @returns {RawFeatureType}
  */
  featureType() {
    const ret = wasm.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawpointcolliderprojection_featureId(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawPointProjection = class _RawPointProjection {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawPointProjection.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawpointprojection_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  point() {
    const ret = wasm.rawpointprojection_point(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {boolean}
  */
  isInside() {
    const ret = wasm.rawpointprojection_isInside(this.__wbg_ptr);
    return ret !== 0;
  }
};
var RawQueryPipeline = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawquerypipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawquerypipeline_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  */
  update(bodies, colliders) {
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    wasm.rawquerypipeline_update(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr);
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawRayColliderHit | undefined}
  */
  castRay(bodies, colliders, rayOrig, rayDir, maxToi, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      const ret = wasm.rawquerypipeline_castRay(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawRayColliderHit.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawRayColliderIntersection | undefined}
  */
  castRayAndGetNormal(bodies, colliders, rayOrig, rayDir, maxToi, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      const ret = wasm.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawRayColliderIntersection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithRay(bodies, colliders, rayOrig, rayDir, maxToi, solid, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(rayOrig, RawVector);
      _assertClass(rayDir, RawVector);
      wasm.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi, solid, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawShape} shape
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {number | undefined}
  */
  intersectionWithShape(bodies, colliders, shapePos, shapeRot, shape, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shape, RawShape);
      wasm.rawquerypipeline_intersectionWithShape(retptr, this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, shapePos.__wbg_ptr, shapeRot.__wbg_ptr, shape.__wbg_ptr, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r2 = getFloat64Memory0()[retptr / 8 + 1];
      return r0 === 0 ? void 0 : r2;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {boolean} solid
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawPointColliderProjection | undefined}
  */
  projectPoint(bodies, colliders, point, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      const ret = wasm.rawquerypipeline_projectPoint(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, point.__wbg_ptr, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawPointColliderProjection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawPointColliderProjection | undefined}
  */
  projectPointAndGetFeature(bodies, colliders, point, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      const ret = wasm.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, point.__wbg_ptr, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawPointColliderProjection.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} point
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithPoint(bodies, colliders, point, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(point, RawVector);
      wasm.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, point.__wbg_ptr, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} shapeVel
  * @param {RawShape} shape
  * @param {number} target_distance
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  * @returns {RawColliderShapeCastHit | undefined}
  */
  castShape(bodies, colliders, shapePos, shapeRot, shapeVel, shape, target_distance, maxToi, stop_at_penetration, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shapeVel, RawVector);
      _assertClass(shape, RawShape);
      const ret = wasm.rawquerypipeline_castShape(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, shapePos.__wbg_ptr, shapeRot.__wbg_ptr, shapeVel.__wbg_ptr, shape.__wbg_ptr, target_distance, maxToi, stop_at_penetration, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
      return ret === 0 ? void 0 : RawColliderShapeCastHit.__wrap(ret);
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawShape} shape
  * @param {Function} callback
  * @param {number} filter_flags
  * @param {number | undefined} filter_groups
  * @param {number | undefined} filter_exclude_collider
  * @param {number | undefined} filter_exclude_rigid_body
  * @param {Function} filter_predicate
  */
  intersectionsWithShape(bodies, colliders, shapePos, shapeRot, shape, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
    try {
      _assertClass(bodies, RawRigidBodySet);
      _assertClass(colliders, RawColliderSet);
      _assertClass(shapePos, RawVector);
      _assertClass(shapeRot, RawRotation);
      _assertClass(shape, RawShape);
      wasm.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, shapePos.__wbg_ptr, shapeRot.__wbg_ptr, shape.__wbg_ptr, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
    } finally {
      heap[stack_pointer++] = void 0;
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawVector} aabbCenter
  * @param {RawVector} aabbHalfExtents
  * @param {Function} callback
  */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    try {
      _assertClass(aabbCenter, RawVector);
      _assertClass(aabbHalfExtents, RawVector);
      wasm.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr, aabbCenter.__wbg_ptr, aabbHalfExtents.__wbg_ptr, addBorrowedObject(callback));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
};
var RawRayColliderHit = class _RawRayColliderHit {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawRayColliderHit.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawraycolliderhit_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = wasm.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number}
  */
  timeOfImpact() {
    const ret = wasm.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    return ret;
  }
};
var RawRayColliderIntersection = class _RawRayColliderIntersection {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawRayColliderIntersection.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawraycolliderintersection_free(ptr);
  }
  /**
  * @returns {number}
  */
  colliderHandle() {
    const ret = wasm.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = wasm.rawcollidershapecasthit_witness1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  time_of_impact() {
    const ret = wasm.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawFeatureType}
  */
  featureType() {
    const ret = wasm.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawpointcolliderprojection_featureId(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawRayIntersection = class _RawRayIntersection {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawRayIntersection.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawrayintersection_free(ptr);
  }
  /**
  * @returns {RawVector}
  */
  normal() {
    const ret = wasm.rawcollidershapecasthit_witness1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {number}
  */
  time_of_impact() {
    const ret = wasm.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawFeatureType}
  */
  featureType() {
    const ret = wasm.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {number | undefined}
  */
  featureId() {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.rawpointcolliderprojection_featureId(retptr, this.__wbg_ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return r0 === 0 ? void 0 : r1 >>> 0;
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var RawRigidBodySet = class _RawRigidBodySet {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawRigidBodySet.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawrigidbodyset_free(ptr);
  }
  /**
  * The world-space translation of this rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbTranslation(handle) {
    const ret = wasm.rawrigidbodyset_rbTranslation(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space orientation of this rigid-body.
  * @param {number} handle
  * @returns {RawRotation}
  */
  rbRotation(handle) {
    const ret = wasm.rawrigidbodyset_rbRotation(this.__wbg_ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Put the given rigid-body to sleep.
  * @param {number} handle
  */
  rbSleep(handle) {
    wasm.rawrigidbodyset_rbSleep(this.__wbg_ptr, handle);
  }
  /**
  * Is this rigid-body sleeping?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsSleeping(handle) {
    const ret = wasm.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Is the velocity of this rigid-body not zero?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsMoving(handle) {
    const ret = wasm.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * The world-space predicted translation of this rigid-body.
  *
  * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
  * method and is used for estimating the kinematic body velocity at the next timestep.
  * For non-kinematic bodies, this value is currently unspecified.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbNextTranslation(handle) {
    const ret = wasm.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space predicted orientation of this rigid-body.
  *
  * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
  * method and is used for estimating the kinematic body velocity at the next timestep.
  * For non-kinematic bodies, this value is currently unspecified.
  * @param {number} handle
  * @returns {RawRotation}
  */
  rbNextRotation(handle) {
    const ret = wasm.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, handle);
    return RawRotation.__wrap(ret);
  }
  /**
  * Sets the translation of this rigid-body.
  *
  * # Parameters
  * - `x`: the world-space position of the rigid-body along the `x` axis.
  * - `y`: the world-space position of the rigid-body along the `y` axis.
  * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  * @param {boolean} wakeUp
  */
  rbSetTranslation(handle, x, y, wakeUp) {
    wasm.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, handle, x, y, wakeUp);
  }
  /**
  * Sets the rotation angle of this rigid-body.
  *
  * # Parameters
  * - `angle`: the rotation angle, in radians.
  * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
  * wasn't moving before modifying its position.
  * @param {number} handle
  * @param {number} angle
  * @param {boolean} wakeUp
  */
  rbSetRotation(handle, angle, wakeUp) {
    wasm.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, handle, angle, wakeUp);
  }
  /**
  * Sets the linear velocity of this rigid-body.
  * @param {number} handle
  * @param {RawVector} linvel
  * @param {boolean} wakeUp
  */
  rbSetLinvel(handle, linvel, wakeUp) {
    _assertClass(linvel, RawVector);
    wasm.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, handle, linvel.__wbg_ptr, wakeUp);
  }
  /**
  * Sets the angular velocity of this rigid-body.
  * @param {number} handle
  * @param {number} angvel
  * @param {boolean} wakeUp
  */
  rbSetAngvel(handle, angvel, wakeUp) {
    wasm.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, handle, angvel, wakeUp);
  }
  /**
  * If this rigid body is kinematic, sets its future translation after the next timestep integration.
  *
  * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
  * interacting with this kinematic body behave as expected. Internally, Rapier will compute
  * an artificial velocity for this rigid-body from its current position and its next kinematic
  * position. This velocity will be used to compute forces on dynamic bodies interacting with
  * this body.
  *
  * # Parameters
  * - `x`: the world-space position of the rigid-body along the `x` axis.
  * - `y`: the world-space position of the rigid-body along the `y` axis.
  * @param {number} handle
  * @param {number} x
  * @param {number} y
  */
  rbSetNextKinematicTranslation(handle, x, y) {
    wasm.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, handle, x, y);
  }
  /**
  * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
  *
  * This should be used instead of `rigidBody.setRotation` to make the dynamic object
  * interacting with this kinematic body behave as expected. Internally, Rapier will compute
  * an artificial velocity for this rigid-body from its current position and its next kinematic
  * position. This velocity will be used to compute forces on dynamic bodies interacting with
  * this body.
  *
  * # Parameters
  * - `angle`: the rotation angle, in radians.
  * @param {number} handle
  * @param {number} angle
  */
  rbSetNextKinematicRotation(handle, angle) {
    wasm.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, handle, angle);
  }
  /**
  * @param {number} handle
  * @param {RawColliderSet} colliders
  */
  rbRecomputeMassPropertiesFromColliders(handle, colliders) {
    _assertClass(colliders, RawColliderSet);
    wasm.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, handle, colliders.__wbg_ptr);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {boolean} wake_up
  */
  rbSetAdditionalMass(handle, mass, wake_up) {
    wasm.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, handle, mass, wake_up);
  }
  /**
  * @param {number} handle
  * @param {number} mass
  * @param {RawVector} centerOfMass
  * @param {number} principalAngularInertia
  * @param {boolean} wake_up
  */
  rbSetAdditionalMassProperties(handle, mass, centerOfMass, principalAngularInertia, wake_up) {
    _assertClass(centerOfMass, RawVector);
    wasm.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, handle, mass, centerOfMass.__wbg_ptr, principalAngularInertia, wake_up);
  }
  /**
  * The linear velocity of this rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbLinvel(handle) {
    const ret = wasm.rawrigidbodyset_rbLinvel(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The angular velocity of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbAngvel(handle) {
    const ret = wasm.rawrigidbodyset_rbAngvel(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {boolean} locked
  * @param {boolean} wake_up
  */
  rbLockTranslations(handle, locked, wake_up) {
    wasm.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, handle, locked, wake_up);
  }
  /**
  * @param {number} handle
  * @param {boolean} allow_x
  * @param {boolean} allow_y
  * @param {boolean} wake_up
  */
  rbSetEnabledTranslations(handle, allow_x, allow_y, wake_up) {
    wasm.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, handle, allow_x, allow_y, wake_up);
  }
  /**
  * @param {number} handle
  * @param {boolean} locked
  * @param {boolean} wake_up
  */
  rbLockRotations(handle, locked, wake_up) {
    wasm.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, handle, locked, wake_up);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  rbDominanceGroup(handle) {
    const ret = wasm.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} group
  */
  rbSetDominanceGroup(handle, group) {
    wasm.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, handle, group);
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  rbEnableCcd(handle, enabled) {
    wasm.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, handle, enabled);
  }
  /**
  * @param {number} handle
  * @param {number} prediction
  */
  rbSetSoftCcdPrediction(handle, prediction) {
    wasm.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, handle, prediction);
  }
  /**
  * The mass of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbMass(handle) {
    const ret = wasm.rawrigidbodyset_rbMass(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The inverse of the mass of a rigid-body.
  *
  * If this is zero, the rigid-body is assumed to have infinite mass.
  * @param {number} handle
  * @returns {number}
  */
  rbInvMass(handle) {
    const ret = wasm.rawrigidbodyset_rbInvMass(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The inverse mass taking into account translation locking.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbEffectiveInvMass(handle) {
    const ret = wasm.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The center of mass of a rigid-body expressed in its local-space.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbLocalCom(handle) {
    const ret = wasm.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The world-space center of mass of the rigid-body.
  * @param {number} handle
  * @returns {RawVector}
  */
  rbWorldCom(handle) {
    const ret = wasm.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, handle);
    return RawVector.__wrap(ret);
  }
  /**
  * The inverse of the principal angular inertia of the rigid-body.
  *
  * Components set to zero are assumed to be infinite along the corresponding principal axis.
  * @param {number} handle
  * @returns {number}
  */
  rbInvPrincipalInertiaSqrt(handle) {
    const ret = wasm.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The angular inertia along the principal inertia axes of the rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbPrincipalInertia(handle) {
    const ret = wasm.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
  * taking into account rotation locking.
  * @param {number} handle
  * @returns {number}
  */
  rbEffectiveWorldInvInertiaSqrt(handle) {
    const ret = wasm.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The effective world-space angular inertia (that takes the potential rotation locking into account) of
  * this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbEffectiveAngularInertia(handle) {
    const ret = wasm.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * Wakes this rigid-body up.
  *
  * A dynamic rigid-body that does not move during several consecutive frames will
  * be put to sleep by the physics engine, i.e., it will stop being simulated in order
  * to avoid useless computations.
  * This method forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
  * the position of a dynamic body so that it is properly simulated afterwards.
  * @param {number} handle
  */
  rbWakeUp(handle) {
    wasm.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, handle);
  }
  /**
  * Is Continuous Collision Detection enabled for this rigid-body?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsCcdEnabled(handle) {
    const ret = wasm.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  rbSoftCcdPrediction(handle) {
    const ret = wasm.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The number of colliders attached to this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbNumColliders(handle) {
    const ret = wasm.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * Retrieves the `i-th` collider attached to this rigid-body.
  *
  * # Parameters
  * - `at`: The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
  *         This index is **not** the same as the unique identifier of the collider.
  * @param {number} handle
  * @param {number} at
  * @returns {number}
  */
  rbCollider(handle, at) {
    const ret = wasm.rawrigidbodyset_rbCollider(this.__wbg_ptr, handle, at);
    return ret;
  }
  /**
  * The status of this rigid-body: fixed, dynamic, or kinematic.
  * @param {number} handle
  * @returns {RawRigidBodyType}
  */
  rbBodyType(handle) {
    const ret = wasm.rawrigidbodyset_rbBodyType(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * Set a new status for this rigid-body: fixed, dynamic, or kinematic.
  * @param {number} handle
  * @param {RawRigidBodyType} status
  * @param {boolean} wake_up
  */
  rbSetBodyType(handle, status, wake_up) {
    wasm.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, handle, status, wake_up);
  }
  /**
  * Is this rigid-body fixed?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsFixed(handle) {
    const ret = wasm.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Is this rigid-body kinematic?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsKinematic(handle) {
    const ret = wasm.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Is this rigid-body dynamic?
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsDynamic(handle) {
    const ret = wasm.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * The linear damping coefficient of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbLinearDamping(handle) {
    const ret = wasm.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * The angular damping coefficient of this rigid-body.
  * @param {number} handle
  * @returns {number}
  */
  rbAngularDamping(handle) {
    const ret = wasm.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} factor
  */
  rbSetLinearDamping(handle, factor) {
    wasm.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, handle, factor);
  }
  /**
  * @param {number} handle
  * @param {number} factor
  */
  rbSetAngularDamping(handle, factor) {
    wasm.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, handle, factor);
  }
  /**
  * @param {number} handle
  * @param {boolean} enabled
  */
  rbSetEnabled(handle, enabled) {
    wasm.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, handle, enabled);
  }
  /**
  * @param {number} handle
  * @returns {boolean}
  */
  rbIsEnabled(handle) {
    const ret = wasm.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  rbGravityScale(handle) {
    const ret = wasm.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, handle);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {number} factor
  * @param {boolean} wakeUp
  */
  rbSetGravityScale(handle, factor, wakeUp) {
    wasm.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, handle, factor, wakeUp);
  }
  /**
  * Resets to zero all user-added forces added to this rigid-body.
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  rbResetForces(handle, wakeUp) {
    wasm.rawrigidbodyset_rbResetForces(this.__wbg_ptr, handle, wakeUp);
  }
  /**
  * Resets to zero all user-added torques added to this rigid-body.
  * @param {number} handle
  * @param {boolean} wakeUp
  */
  rbResetTorques(handle, wakeUp) {
    wasm.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, handle, wakeUp);
  }
  /**
  * Adds a force at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `force`: the world-space force to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} force
  * @param {boolean} wakeUp
  */
  rbAddForce(handle, force, wakeUp) {
    _assertClass(force, RawVector);
    wasm.rawrigidbodyset_rbAddForce(this.__wbg_ptr, handle, force.__wbg_ptr, wakeUp);
  }
  /**
  * Applies an impulse at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `impulse`: the world-space impulse to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} impulse
  * @param {boolean} wakeUp
  */
  rbApplyImpulse(handle, impulse, wakeUp) {
    _assertClass(impulse, RawVector);
    wasm.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, handle, impulse.__wbg_ptr, wakeUp);
  }
  /**
  * Adds a torque at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `torque`: the torque to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {number} torque
  * @param {boolean} wakeUp
  */
  rbAddTorque(handle, torque, wakeUp) {
    wasm.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, handle, torque, wakeUp);
  }
  /**
  * Applies an impulsive torque at the center-of-mass of this rigid-body.
  *
  * # Parameters
  * - `torque impulse`: the torque impulse to apply on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {number} torque_impulse
  * @param {boolean} wakeUp
  */
  rbApplyTorqueImpulse(handle, torque_impulse, wakeUp) {
    wasm.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, handle, torque_impulse, wakeUp);
  }
  /**
  * Adds a force at the given world-space point of this rigid-body.
  *
  * # Parameters
  * - `force`: the world-space force to apply on the rigid-body.
  * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} force
  * @param {RawVector} point
  * @param {boolean} wakeUp
  */
  rbAddForceAtPoint(handle, force, point, wakeUp) {
    _assertClass(force, RawVector);
    _assertClass(point, RawVector);
    wasm.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, handle, force.__wbg_ptr, point.__wbg_ptr, wakeUp);
  }
  /**
  * Applies an impulse at the given world-space point of this rigid-body.
  *
  * # Parameters
  * - `impulse`: the world-space impulse to apply on the rigid-body.
  * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
  * - `wakeUp`: should the rigid-body be automatically woken-up?
  * @param {number} handle
  * @param {RawVector} impulse
  * @param {RawVector} point
  * @param {boolean} wakeUp
  */
  rbApplyImpulseAtPoint(handle, impulse, point, wakeUp) {
    _assertClass(impulse, RawVector);
    _assertClass(point, RawVector);
    wasm.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, handle, impulse.__wbg_ptr, point.__wbg_ptr, wakeUp);
  }
  /**
  * @param {number} handle
  * @returns {number}
  */
  rbAdditionalSolverIterations(handle) {
    const ret = wasm.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * @param {number} handle
  * @param {number} iters
  */
  rbSetAdditionalSolverIterations(handle, iters) {
    wasm.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, handle, iters);
  }
  /**
  * An arbitrary user-defined 32-bit integer
  * @param {number} handle
  * @returns {number}
  */
  rbUserData(handle) {
    const ret = wasm.rawrigidbodyset_rbUserData(this.__wbg_ptr, handle);
    return ret >>> 0;
  }
  /**
  * Sets the user-defined 32-bit integer of this rigid-body.
  *
  * # Parameters
  * - `data`: an arbitrary user-defined 32-bit integer.
  * @param {number} handle
  * @param {number} data
  */
  rbSetUserData(handle, data) {
    wasm.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, handle, data);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawrigidbodyset_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @param {boolean} enabled
  * @param {RawVector} translation
  * @param {RawRotation} rotation
  * @param {number} gravityScale
  * @param {number} mass
  * @param {boolean} massOnly
  * @param {RawVector} centerOfMass
  * @param {RawVector} linvel
  * @param {number} angvel
  * @param {number} principalAngularInertia
  * @param {boolean} translationEnabledX
  * @param {boolean} translationEnabledY
  * @param {boolean} rotationsEnabled
  * @param {number} linearDamping
  * @param {number} angularDamping
  * @param {RawRigidBodyType} rb_type
  * @param {boolean} canSleep
  * @param {boolean} sleeping
  * @param {number} softCcdPrediciton
  * @param {boolean} ccdEnabled
  * @param {number} dominanceGroup
  * @param {number} additional_solver_iterations
  * @returns {number}
  */
  createRigidBody(enabled, translation, rotation, gravityScale, mass, massOnly, centerOfMass, linvel, angvel, principalAngularInertia, translationEnabledX, translationEnabledY, rotationsEnabled, linearDamping, angularDamping, rb_type, canSleep, sleeping, softCcdPrediciton, ccdEnabled, dominanceGroup, additional_solver_iterations) {
    _assertClass(translation, RawVector);
    _assertClass(rotation, RawRotation);
    _assertClass(centerOfMass, RawVector);
    _assertClass(linvel, RawVector);
    const ret = wasm.rawrigidbodyset_createRigidBody(this.__wbg_ptr, enabled, translation.__wbg_ptr, rotation.__wbg_ptr, gravityScale, mass, massOnly, centerOfMass.__wbg_ptr, linvel.__wbg_ptr, angvel, principalAngularInertia, translationEnabledX, translationEnabledY, rotationsEnabled, linearDamping, angularDamping, rb_type, canSleep, sleeping, softCcdPrediciton, ccdEnabled, dominanceGroup, additional_solver_iterations);
    return ret;
  }
  /**
  * @param {number} handle
  * @param {RawIslandManager} islands
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} joints
  * @param {RawMultibodyJointSet} articulations
  */
  remove(handle, islands, colliders, joints, articulations) {
    _assertClass(islands, RawIslandManager);
    _assertClass(colliders, RawColliderSet);
    _assertClass(joints, RawImpulseJointSet);
    _assertClass(articulations, RawMultibodyJointSet);
    wasm.rawrigidbodyset_remove(this.__wbg_ptr, handle, islands.__wbg_ptr, colliders.__wbg_ptr, joints.__wbg_ptr, articulations.__wbg_ptr);
  }
  /**
  * The number of rigid-bodies on this set.
  * @returns {number}
  */
  len() {
    const ret = wasm.rawcolliderset_len(this.__wbg_ptr);
    return ret >>> 0;
  }
  /**
  * Checks if a rigid-body with the given integer handle exists.
  * @param {number} handle
  * @returns {boolean}
  */
  contains(handle) {
    const ret = wasm.rawrigidbodyset_contains(this.__wbg_ptr, handle);
    return ret !== 0;
  }
  /**
  * Applies the given JavaScript function to the integer handle of each rigid-body managed by this set.
  *
  * # Parameters
  * - `f(handle)`: the function to apply to the integer handle of each rigid-body managed by this set. Called as `f(collider)`.
  * @param {Function} f
  */
  forEachRigidBodyHandle(f) {
    try {
      wasm.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, addBorrowedObject(f));
    } finally {
      heap[stack_pointer++] = void 0;
    }
  }
  /**
  * @param {RawColliderSet} colliders
  */
  propagateModifiedBodyPositionsToColliders(colliders) {
    _assertClass(colliders, RawColliderSet);
    wasm.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, colliders.__wbg_ptr);
  }
};
var RawRotation = class _RawRotation {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawRotation.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawrotation_free(ptr);
  }
  /**
  * The identity rotation.
  * @returns {RawRotation}
  */
  static identity() {
    const ret = wasm.rawrotation_identity();
    return _RawRotation.__wrap(ret);
  }
  /**
  * The rotation with thegiven angle.
  * @param {number} angle
  * @returns {RawRotation}
  */
  static fromAngle(angle) {
    const ret = wasm.rawrotation_fromAngle(angle);
    return _RawRotation.__wrap(ret);
  }
  /**
  * The imaginary part of this complex number.
  * @returns {number}
  */
  get im() {
    const ret = wasm.rawintegrationparameters_dt(this.__wbg_ptr);
    return ret;
  }
  /**
  * The real part of this complex number.
  * @returns {number}
  */
  get re() {
    const ret = wasm.rawrotation_re(this.__wbg_ptr);
    return ret;
  }
  /**
  * The rotation angle in radians.
  * @returns {number}
  */
  get angle() {
    const ret = wasm.rawrotation_angle(this.__wbg_ptr);
    return ret;
  }
};
var RawSerializationPipeline = class {
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawserializationpipeline_free(ptr);
  }
  /**
  */
  constructor() {
    const ret = wasm.rawserializationpipeline_new();
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * @param {RawVector} gravity
  * @param {RawIntegrationParameters} integrationParameters
  * @param {RawIslandManager} islands
  * @param {RawBroadPhase} broadPhase
  * @param {RawNarrowPhase} narrowPhase
  * @param {RawRigidBodySet} bodies
  * @param {RawColliderSet} colliders
  * @param {RawImpulseJointSet} impulse_joints
  * @param {RawMultibodyJointSet} multibody_joints
  * @returns {Uint8Array | undefined}
  */
  serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulse_joints, multibody_joints) {
    _assertClass(gravity, RawVector);
    _assertClass(integrationParameters, RawIntegrationParameters);
    _assertClass(islands, RawIslandManager);
    _assertClass(broadPhase, RawBroadPhase);
    _assertClass(narrowPhase, RawNarrowPhase);
    _assertClass(bodies, RawRigidBodySet);
    _assertClass(colliders, RawColliderSet);
    _assertClass(impulse_joints, RawImpulseJointSet);
    _assertClass(multibody_joints, RawMultibodyJointSet);
    const ret = wasm.rawserializationpipeline_serializeAll(this.__wbg_ptr, gravity.__wbg_ptr, integrationParameters.__wbg_ptr, islands.__wbg_ptr, broadPhase.__wbg_ptr, narrowPhase.__wbg_ptr, bodies.__wbg_ptr, colliders.__wbg_ptr, impulse_joints.__wbg_ptr, multibody_joints.__wbg_ptr);
    return takeObject(ret);
  }
  /**
  * @param {Uint8Array} data
  * @returns {RawDeserializedWorld | undefined}
  */
  deserializeAll(data) {
    const ret = wasm.rawserializationpipeline_deserializeAll(this.__wbg_ptr, addHeapObject(data));
    return ret === 0 ? void 0 : RawDeserializedWorld.__wrap(ret);
  }
};
var RawShape = class _RawShape {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawShape.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawshape_free(ptr);
  }
  /**
  * @param {number} hx
  * @param {number} hy
  * @returns {RawShape}
  */
  static cuboid(hx, hy) {
    const ret = wasm.rawshape_cuboid(hx, hy);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} hx
  * @param {number} hy
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundCuboid(hx, hy, borderRadius) {
    const ret = wasm.rawshape_roundCuboid(hx, hy, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} radius
  * @returns {RawShape}
  */
  static ball(radius) {
    const ret = wasm.rawshape_ball(radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} normal
  * @returns {RawShape}
  */
  static halfspace(normal) {
    _assertClass(normal, RawVector);
    const ret = wasm.rawshape_halfspace(normal.__wbg_ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {number} halfHeight
  * @param {number} radius
  * @returns {RawShape}
  */
  static capsule(halfHeight, radius) {
    const ret = wasm.rawshape_capsule(halfHeight, radius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @returns {RawShape}
  */
  static polyline(vertices, indices) {
    const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_polyline(ptr0, len0, ptr1, len1);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {Uint32Array} indices
  * @param {number} flags
  * @returns {RawShape}
  */
  static trimesh(vertices, indices, flags) {
    const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_trimesh(ptr0, len0, ptr1, len1, flags);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} heights
  * @param {RawVector} scale
  * @returns {RawShape}
  */
  static heightfield(heights, scale) {
    const ptr0 = passArrayF32ToWasm0(heights, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(scale, RawVector);
    const ret = wasm.rawshape_heightfield(ptr0, len0, scale.__wbg_ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @returns {RawShape}
  */
  static segment(p1, p2) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    const ret = wasm.rawshape_segment(p1.__wbg_ptr, p2.__wbg_ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @param {RawVector} p3
  * @returns {RawShape}
  */
  static triangle(p1, p2, p3) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    _assertClass(p3, RawVector);
    const ret = wasm.rawshape_triangle(p1.__wbg_ptr, p2.__wbg_ptr, p3.__wbg_ptr);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} p1
  * @param {RawVector} p2
  * @param {RawVector} p3
  * @param {number} borderRadius
  * @returns {RawShape}
  */
  static roundTriangle(p1, p2, p3, borderRadius) {
    _assertClass(p1, RawVector);
    _assertClass(p2, RawVector);
    _assertClass(p3, RawVector);
    const ret = wasm.rawshape_roundTriangle(p1.__wbg_ptr, p2.__wbg_ptr, p3.__wbg_ptr, borderRadius);
    return _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} points
  * @returns {RawShape | undefined}
  */
  static convexHull(points) {
    const ptr0 = passArrayF32ToWasm0(points, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_convexHull(ptr0, len0);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} points
  * @param {number} borderRadius
  * @returns {RawShape | undefined}
  */
  static roundConvexHull(points, borderRadius) {
    const ptr0 = passArrayF32ToWasm0(points, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_roundConvexHull(ptr0, len0, borderRadius);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @returns {RawShape | undefined}
  */
  static convexPolyline(vertices) {
    const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_convexPolyline(ptr0, len0);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {Float32Array} vertices
  * @param {number} borderRadius
  * @returns {RawShape | undefined}
  */
  static roundConvexPolyline(vertices, borderRadius) {
    const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.rawshape_roundConvexPolyline(ptr0, len0, borderRadius);
    return ret === 0 ? void 0 : _RawShape.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawVector} shapeVel1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {RawVector} shapeVel2
  * @param {number} target_distance
  * @param {number} maxToi
  * @param {boolean} stop_at_penetration
  * @returns {RawShapeCastHit | undefined}
  */
  castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, target_distance, maxToi, stop_at_penetration) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shapeVel1, RawVector);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    _assertClass(shapeVel2, RawVector);
    const ret = wasm.rawshape_castShape(this.__wbg_ptr, shapePos1.__wbg_ptr, shapeRot1.__wbg_ptr, shapeVel1.__wbg_ptr, shape2.__wbg_ptr, shapePos2.__wbg_ptr, shapeRot2.__wbg_ptr, shapeVel2.__wbg_ptr, target_distance, maxToi, stop_at_penetration);
    return ret === 0 ? void 0 : RawShapeCastHit.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @returns {boolean}
  */
  intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = wasm.rawshape_intersectsShape(this.__wbg_ptr, shapePos1.__wbg_ptr, shapeRot1.__wbg_ptr, shape2.__wbg_ptr, shapePos2.__wbg_ptr, shapeRot2.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos1
  * @param {RawRotation} shapeRot1
  * @param {RawShape} shape2
  * @param {RawVector} shapePos2
  * @param {RawRotation} shapeRot2
  * @param {number} prediction
  * @returns {RawShapeContact | undefined}
  */
  contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
    _assertClass(shapePos1, RawVector);
    _assertClass(shapeRot1, RawRotation);
    _assertClass(shape2, _RawShape);
    _assertClass(shapePos2, RawVector);
    _assertClass(shapeRot2, RawRotation);
    const ret = wasm.rawshape_contactShape(this.__wbg_ptr, shapePos1.__wbg_ptr, shapeRot1.__wbg_ptr, shape2.__wbg_ptr, shapePos2.__wbg_ptr, shapeRot2.__wbg_ptr, prediction);
    return ret === 0 ? void 0 : RawShapeContact.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} point
  * @returns {boolean}
  */
  containsPoint(shapePos, shapeRot, point) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(point, RawVector);
    const ret = wasm.rawshape_containsPoint(this.__wbg_ptr, shapePos.__wbg_ptr, shapeRot.__wbg_ptr, point.__wbg_ptr);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} point
  * @param {boolean} solid
  * @returns {RawPointProjection}
  */
  projectPoint(shapePos, shapeRot, point, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(point, RawVector);
    const ret = wasm.rawshape_projectPoint(this.__wbg_ptr, shapePos.__wbg_ptr, shapeRot.__wbg_ptr, point.__wbg_ptr, solid);
    return RawPointProjection.__wrap(ret);
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @returns {boolean}
  */
  intersectsRay(shapePos, shapeRot, rayOrig, rayDir, maxToi) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawshape_intersectsRay(this.__wbg_ptr, shapePos.__wbg_ptr, shapeRot.__wbg_ptr, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi);
    return ret !== 0;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {number}
  */
  castRay(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawshape_castRay(this.__wbg_ptr, shapePos.__wbg_ptr, shapeRot.__wbg_ptr, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi, solid);
    return ret;
  }
  /**
  * @param {RawVector} shapePos
  * @param {RawRotation} shapeRot
  * @param {RawVector} rayOrig
  * @param {RawVector} rayDir
  * @param {number} maxToi
  * @param {boolean} solid
  * @returns {RawRayIntersection | undefined}
  */
  castRayAndGetNormal(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
    _assertClass(shapePos, RawVector);
    _assertClass(shapeRot, RawRotation);
    _assertClass(rayOrig, RawVector);
    _assertClass(rayDir, RawVector);
    const ret = wasm.rawshape_castRayAndGetNormal(this.__wbg_ptr, shapePos.__wbg_ptr, shapeRot.__wbg_ptr, rayOrig.__wbg_ptr, rayDir.__wbg_ptr, maxToi, solid);
    return ret === 0 ? void 0 : RawRayIntersection.__wrap(ret);
  }
};
var RawShapeCastHit = class _RawShapeCastHit {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawShapeCastHit.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawshapecasthit_free(ptr);
  }
  /**
  * @returns {number}
  */
  time_of_impact() {
    const ret = wasm.rawrotation_re(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  witness1() {
    const ret = wasm.rawshapecasthit_witness1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  witness2() {
    const ret = wasm.rawcollidershapecasthit_witness1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = wasm.rawcollidershapecasthit_witness2(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = wasm.rawcollidershapecasthit_normal1(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
};
var RawShapeContact = class _RawShapeContact {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawShapeContact.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawshapecontact_free(ptr);
  }
  /**
  * @returns {number}
  */
  distance() {
    const ret = wasm.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    return ret;
  }
  /**
  * @returns {RawVector}
  */
  point1() {
    const ret = wasm.rawpointprojection_point(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  point2() {
    const ret = wasm.rawpointcolliderprojection_point(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal1() {
    const ret = wasm.rawcontactforceevent_total_force(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
  /**
  * @returns {RawVector}
  */
  normal2() {
    const ret = wasm.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return RawVector.__wrap(ret);
  }
};
var RawVector = class _RawVector {
  static __wrap(ptr) {
    ptr = ptr >>> 0;
    const obj = Object.create(_RawVector.prototype);
    obj.__wbg_ptr = ptr;
    return obj;
  }
  __destroy_into_raw() {
    const ptr = this.__wbg_ptr;
    this.__wbg_ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm.__wbg_rawvector_free(ptr);
  }
  /**
  * Creates a new vector filled with zeros.
  * @returns {RawVector}
  */
  static zero() {
    const ret = wasm.rawvector_zero();
    return _RawVector.__wrap(ret);
  }
  /**
  * Creates a new 2D vector from its two components.
  *
  * # Parameters
  * - `x`: the `x` component of this 2D vector.
  * - `y`: the `y` component of this 2D vector.
  * @param {number} x
  * @param {number} y
  */
  constructor(x, y) {
    const ret = wasm.rawvector_new(x, y);
    this.__wbg_ptr = ret >>> 0;
    return this;
  }
  /**
  * The `x` component of this vector.
  * @returns {number}
  */
  get x() {
    const ret = wasm.rawrotation_re(this.__wbg_ptr);
    return ret;
  }
  /**
  * Sets the `x` component of this vector.
  * @param {number} x
  */
  set x(x) {
    wasm.rawvector_set_x(this.__wbg_ptr, x);
  }
  /**
  * The `y` component of this vector.
  * @returns {number}
  */
  get y() {
    const ret = wasm.rawintegrationparameters_dt(this.__wbg_ptr);
    return ret;
  }
  /**
  * Sets the `y` component of this vector.
  * @param {number} y
  */
  set y(y) {
    wasm.rawintegrationparameters_set_dt(this.__wbg_ptr, y);
  }
  /**
  * Create a new 2D vector from this vector with its components rearranged as `{x, y}`.
  * @returns {RawVector}
  */
  xy() {
    const ret = wasm.rawvector_xy(this.__wbg_ptr);
    return _RawVector.__wrap(ret);
  }
  /**
  * Create a new 2D vector from this vector with its components rearranged as `{y, x}`.
  * @returns {RawVector}
  */
  yx() {
    const ret = wasm.rawvector_yx(this.__wbg_ptr);
    return _RawVector.__wrap(ret);
  }
};

// ../node_modules/@dimforge/rapier2d/rapier_wasm2d.js
__wbg_set_wasm(wasm2);

// ../node_modules/@dimforge/rapier2d/math.js
var Vector2 = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};
var VectorOps = class _VectorOps {
  static new(x, y) {
    return new Vector2(x, y);
  }
  static zeros() {
    return _VectorOps.new(0, 0);
  }
  // FIXME: type ram: RawVector?
  static fromRaw(raw) {
    if (!raw)
      return null;
    let res = _VectorOps.new(raw.x, raw.y);
    raw.free();
    return res;
  }
  static intoRaw(v) {
    return new RawVector(v.x, v.y);
  }
  static copy(out, input) {
    out.x = input.x;
    out.y = input.y;
  }
};
var RotationOps = class {
  static identity() {
    return 0;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    let res = raw.angle;
    raw.free();
    return res;
  }
  static intoRaw(angle) {
    return RawRotation.fromAngle(angle);
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/rigid_body.js
var RigidBodyType;
(function(RigidBodyType2) {
  RigidBodyType2[RigidBodyType2["Dynamic"] = 0] = "Dynamic";
  RigidBodyType2[RigidBodyType2["Fixed"] = 1] = "Fixed";
  RigidBodyType2[RigidBodyType2["KinematicPositionBased"] = 2] = "KinematicPositionBased";
  RigidBodyType2[RigidBodyType2["KinematicVelocityBased"] = 3] = "KinematicVelocityBased";
})(RigidBodyType || (RigidBodyType = {}));
var RigidBody = class {
  constructor(rawSet, colliderSet, handle) {
    this.rawSet = rawSet;
    this.colliderSet = colliderSet;
    this.handle = handle;
  }
  /** @internal */
  finalizeDeserialization(colliderSet) {
    this.colliderSet = colliderSet;
  }
  /**
   * Checks if this rigid-body is still valid (i.e. that it has
   * not been deleted from the rigid-body set yet.
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to translate.
   *
   * @param locked - If `true`, this rigid-body will no longer translate due to forces and impulses.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  lockTranslations(locked, wakeUp) {
    return this.rawSet.rbLockTranslations(this.handle, locked, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to rotate.
   *
   * @param locked - If `true`, this rigid-body will no longer rotate due to torques and impulses.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  lockRotations(locked, wakeUp) {
    return this.rawSet.rbLockRotations(this.handle, locked, wakeUp);
  }
  // #if DIM2
  /**
   * Locks or unlocks the ability of this rigid-body to translation along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   */
  setEnabledTranslations(enableX, enableY, wakeUp) {
    return this.rawSet.rbSetEnabledTranslations(this.handle, enableX, enableY, wakeUp);
  }
  /**
   * Locks or unlocks the ability of this rigid-body to translation along individual coordinate axes.
   *
   * @param enableX - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the X coordinate axis.
   * @param enableY - If `false`, this rigid-body will no longer rotate due to torques and impulses, along the Y coordinate axis.
   * @param wakeUp - If `true`, this rigid-body will be automatically awaken if it is currently asleep.
   * @deprecated use `this.setEnabledTranslations` with the same arguments instead.
   */
  restrictTranslations(enableX, enableY, wakeUp) {
    this.setEnabledTranslations(enableX, enableX, wakeUp);
  }
  // #endif
  /**
   * The dominance group, in [-127, +127] this rigid-body is part of.
   */
  dominanceGroup() {
    return this.rawSet.rbDominanceGroup(this.handle);
  }
  /**
   * Sets the dominance group of this rigid-body.
   *
   * @param group - The dominance group of this rigid-body. Must be a signed integer in the range [-127, +127].
   */
  setDominanceGroup(group) {
    this.rawSet.rbSetDominanceGroup(this.handle, group);
  }
  /**
   * The number of additional solver iterations that will be run for this
   * rigid-body and everything that interacts with it directly or indirectly
   * through contacts or joints.
   */
  additionalSolverIterations() {
    return this.rawSet.rbAdditionalSolverIterations(this.handle);
  }
  /**
   * Sets the number of additional solver iterations that will be run for this
   * rigid-body and everything that interacts with it directly or indirectly
   * through contacts or joints.
   *
   * Compared to increasing the global `World.numSolverIteration`, setting this
   * value lets you increase accuracy on only a subset of the scene, resulting in reduced
   * performance loss.
   *
   * @param iters - The new number of additional solver iterations (default: 0).
   */
  setAdditionalSolverIterations(iters) {
    this.rawSet.rbSetAdditionalSolverIterations(this.handle, iters);
  }
  /**
   * Enable or disable CCD (Continuous Collision Detection) for this rigid-body.
   *
   * @param enabled - If `true`, CCD will be enabled for this rigid-body.
   */
  enableCcd(enabled) {
    this.rawSet.rbEnableCcd(this.handle, enabled);
  }
  /**
   * Sets the soft-CCD prediction distance for this rigid-body.
   *
   * See the documentation of `RigidBodyDesc.setSoftCcdPrediction` for
   * additional details.
   */
  setSoftCcdPrediction(distance) {
    this.rawSet.rbSetSoftCcdPrediction(this.handle, distance);
  }
  /**
   * Gets the soft-CCD prediction distance for this rigid-body.
   *
   * See the documentation of `RigidBodyDesc.setSoftCcdPrediction` for
   * additional details.
   */
  softCcdPrediction() {
    return this.rawSet.rbSoftCcdPrediction(this.handle);
  }
  /**
   * The world-space translation of this rigid-body.
   */
  translation() {
    let res = this.rawSet.rbTranslation(this.handle);
    return VectorOps.fromRaw(res);
  }
  /**
   * The world-space orientation of this rigid-body.
   */
  rotation() {
    let res = this.rawSet.rbRotation(this.handle);
    return RotationOps.fromRaw(res);
  }
  /**
   * The world-space next translation of this rigid-body.
   *
   * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
   * method and is used for estimating the kinematic body velocity at the next timestep.
   * For non-kinematic bodies, this value is currently unspecified.
   */
  nextTranslation() {
    let res = this.rawSet.rbNextTranslation(this.handle);
    return VectorOps.fromRaw(res);
  }
  /**
   * The world-space next orientation of this rigid-body.
   *
   * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
   * method and is used for estimating the kinematic body velocity at the next timestep.
   * For non-kinematic bodies, this value is currently unspecified.
   */
  nextRotation() {
    let res = this.rawSet.rbNextRotation(this.handle);
    return RotationOps.fromRaw(res);
  }
  /**
   * Sets the translation of this rigid-body.
   *
   * @param tra - The world-space position of the rigid-body.
   * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
   *                 wasn't moving before modifying its position.
   */
  setTranslation(tra, wakeUp) {
    this.rawSet.rbSetTranslation(this.handle, tra.x, tra.y, wakeUp);
  }
  /**
   * Sets the linear velocity of this rigid-body.
   *
   * @param vel - The linear velocity to set.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setLinvel(vel, wakeUp) {
    let rawVel = VectorOps.intoRaw(vel);
    this.rawSet.rbSetLinvel(this.handle, rawVel, wakeUp);
    rawVel.free();
  }
  /**
   * The scale factor applied to the gravity affecting
   * this rigid-body.
   */
  gravityScale() {
    return this.rawSet.rbGravityScale(this.handle);
  }
  /**
   * Sets the scale factor applied to the gravity affecting
   * this rigid-body.
   *
   * @param factor - The scale factor to set. A value of 0.0 means
   *   that this rigid-body will on longer be affected by gravity.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setGravityScale(factor, wakeUp) {
    this.rawSet.rbSetGravityScale(this.handle, factor, wakeUp);
  }
  // #if DIM2
  /**
   * Sets the rotation angle of this rigid-body.
   *
   * @param angle - The rotation angle, in radians.
   * @param wakeUp - Forces the rigid-body to wake-up so it is properly affected by forces if it
   * wasn't moving before modifying its position.
   */
  setRotation(angle, wakeUp) {
    this.rawSet.rbSetRotation(this.handle, angle, wakeUp);
  }
  /**
   * Sets the angular velocity fo this rigid-body.
   *
   * @param vel - The angular velocity to set.
   * @param wakeUp - Forces the rigid-body to wake-up if it was asleep.
   */
  setAngvel(vel, wakeUp) {
    this.rawSet.rbSetAngvel(this.handle, vel, wakeUp);
  }
  // #endif
  /**
   * If this rigid body is kinematic, sets its future translation after the next timestep integration.
   *
   * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
   * interacting with this kinematic body behave as expected. Internally, Rapier will compute
   * an artificial velocity for this rigid-body from its current position and its next kinematic
   * position. This velocity will be used to compute forces on dynamic bodies interacting with
   * this body.
   *
   * @param t - The kinematic translation to set.
   */
  setNextKinematicTranslation(t) {
    this.rawSet.rbSetNextKinematicTranslation(this.handle, t.x, t.y);
  }
  // #if DIM2
  /**
   * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
   *
   * This should be used instead of `rigidBody.setRotation` to make the dynamic object
   * interacting with this kinematic body behave as expected. Internally, Rapier will compute
   * an artificial velocity for this rigid-body from its current position and its next kinematic
   * position. This velocity will be used to compute forces on dynamic bodies interacting with
   * this body.
   *
   * @param angle - The kinematic rotation angle, in radians.
   */
  setNextKinematicRotation(angle) {
    this.rawSet.rbSetNextKinematicRotation(this.handle, angle);
  }
  // #endif
  /**
   * The linear velocity of this rigid-body.
   */
  linvel() {
    return VectorOps.fromRaw(this.rawSet.rbLinvel(this.handle));
  }
  // #if DIM2
  /**
   * The angular velocity of this rigid-body.
   */
  angvel() {
    return this.rawSet.rbAngvel(this.handle);
  }
  // #endif
  /**
   * The mass of this rigid-body.
   */
  mass() {
    return this.rawSet.rbMass(this.handle);
  }
  /**
   * The inverse mass taking into account translation locking.
   */
  effectiveInvMass() {
    return VectorOps.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
  }
  /**
   * The inverse of the mass of a rigid-body.
   *
   * If this is zero, the rigid-body is assumed to have infinite mass.
   */
  invMass() {
    return this.rawSet.rbInvMass(this.handle);
  }
  /**
   * The center of mass of a rigid-body expressed in its local-space.
   */
  localCom() {
    return VectorOps.fromRaw(this.rawSet.rbLocalCom(this.handle));
  }
  /**
   * The world-space center of mass of the rigid-body.
   */
  worldCom() {
    return VectorOps.fromRaw(this.rawSet.rbWorldCom(this.handle));
  }
  // #if DIM2
  /**
   * The inverse of the principal angular inertia of the rigid-body.
   *
   * Components set to zero are assumed to be infinite along the corresponding principal axis.
   */
  invPrincipalInertiaSqrt() {
    return this.rawSet.rbInvPrincipalInertiaSqrt(this.handle);
  }
  // #endif
  // #if DIM2
  /**
   * The angular inertia along the principal inertia axes of the rigid-body.
   */
  principalInertia() {
    return this.rawSet.rbPrincipalInertia(this.handle);
  }
  // #endif
  // #if DIM2
  /**
   * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
   * taking into account rotation locking.
   */
  effectiveWorldInvInertiaSqrt() {
    return this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle);
  }
  // #endif
  // #if DIM2
  /**
   * The effective world-space angular inertia (that takes the potential rotation locking into account) of
   * this rigid-body.
   */
  effectiveAngularInertia() {
    return this.rawSet.rbEffectiveAngularInertia(this.handle);
  }
  // #endif
  /**
   * Put this rigid body to sleep.
   *
   * A sleeping body no longer moves and is no longer simulated by the physics engine unless
   * it is waken up. It can be woken manually with `this.wakeUp()` or automatically due to
   * external forces like contacts.
   */
  sleep() {
    this.rawSet.rbSleep(this.handle);
  }
  /**
   * Wakes this rigid-body up.
   *
   * A dynamic rigid-body that does not move during several consecutive frames will
   * be put to sleep by the physics engine, i.e., it will stop being simulated in order
   * to avoid useless computations.
   * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
   * the position of a dynamic body so that it is properly simulated afterwards.
   */
  wakeUp() {
    this.rawSet.rbWakeUp(this.handle);
  }
  /**
   * Is CCD enabled for this rigid-body?
   */
  isCcdEnabled() {
    return this.rawSet.rbIsCcdEnabled(this.handle);
  }
  /**
   * The number of colliders attached to this rigid-body.
   */
  numColliders() {
    return this.rawSet.rbNumColliders(this.handle);
  }
  /**
   * Retrieves the `i-th` collider attached to this rigid-body.
   *
   * @param i - The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
   *         This index is **not** the same as the unique identifier of the collider.
   */
  collider(i) {
    return this.colliderSet.get(this.rawSet.rbCollider(this.handle, i));
  }
  /**
   * Sets whether this rigid-body is enabled or not.
   *
   * @param enabled - Set to `false` to disable this rigid-body and all its attached colliders.
   */
  setEnabled(enabled) {
    this.rawSet.rbSetEnabled(this.handle, enabled);
  }
  /**
   * Is this rigid-body enabled?
   */
  isEnabled() {
    return this.rawSet.rbIsEnabled(this.handle);
  }
  /**
   * The status of this rigid-body: static, dynamic, or kinematic.
   */
  bodyType() {
    return this.rawSet.rbBodyType(this.handle);
  }
  /**
   * Set a new status for this rigid-body: static, dynamic, or kinematic.
   */
  setBodyType(type, wakeUp) {
    return this.rawSet.rbSetBodyType(this.handle, type, wakeUp);
  }
  /**
   * Is this rigid-body sleeping?
   */
  isSleeping() {
    return this.rawSet.rbIsSleeping(this.handle);
  }
  /**
   * Is the velocity of this rigid-body not zero?
   */
  isMoving() {
    return this.rawSet.rbIsMoving(this.handle);
  }
  /**
   * Is this rigid-body static?
   */
  isFixed() {
    return this.rawSet.rbIsFixed(this.handle);
  }
  /**
   * Is this rigid-body kinematic?
   */
  isKinematic() {
    return this.rawSet.rbIsKinematic(this.handle);
  }
  /**
   * Is this rigid-body dynamic?
   */
  isDynamic() {
    return this.rawSet.rbIsDynamic(this.handle);
  }
  /**
   * The linear damping coefficient of this rigid-body.
   */
  linearDamping() {
    return this.rawSet.rbLinearDamping(this.handle);
  }
  /**
   * The angular damping coefficient of this rigid-body.
   */
  angularDamping() {
    return this.rawSet.rbAngularDamping(this.handle);
  }
  /**
   * Sets the linear damping factor applied to this rigid-body.
   *
   * @param factor - The damping factor to set.
   */
  setLinearDamping(factor) {
    this.rawSet.rbSetLinearDamping(this.handle, factor);
  }
  /**
   * Recompute the mass-properties of this rigid-bodies based on its currently attached colliders.
   */
  recomputeMassPropertiesFromColliders() {
    this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
  }
  /**
   * Sets the rigid-body's additional mass.
   *
   * The total angular inertia of the rigid-body will be scaled automatically based on this additional mass. If this
   * scaling effect isn’t desired, use Self::additional_mass_properties instead of this method.
   *
   * This is only the "additional" mass because the total mass of the rigid-body is equal to the sum of this
   * additional mass and the mass computed from the colliders (with non-zero densities) attached to this rigid-body.
   *
   * That total mass (which includes the attached colliders’ contributions) will be updated at the name physics step,
   * or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
   *
   * This will override any previous additional mass-properties set by `this.setAdditionalMass`,
   * `this.setAdditionalMassProperties`, `RigidBodyDesc::setAdditionalMass`, or
   * `RigidBodyDesc.setAdditionalMassfProperties` for this rigid-body.
   *
   * @param mass - The additional mass to set.
   * @param wakeUp - If `true` then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
   */
  setAdditionalMass(mass, wakeUp) {
    this.rawSet.rbSetAdditionalMass(this.handle, mass, wakeUp);
  }
  // #if DIM2
  /**
   * Sets the rigid-body's additional mass-properties.
   *
   * This is only the "additional" mass-properties because the total mass-properties of the rigid-body is equal to the
   * sum of this additional mass-properties and the mass computed from the colliders (with non-zero densities) attached
   * to this rigid-body.
   *
   * That total mass-properties (which include the attached colliders’ contributions) will be updated at the name
   * physics step, or can be updated manually with `this.recomputeMassPropertiesFromColliders`.
   *
   * This will override any previous mass-properties set by `this.setAdditionalMass`,
   * `this.setAdditionalMassProperties`, `RigidBodyDesc.setAdditionalMass`, or `RigidBodyDesc.setAdditionalMassProperties`
   * for this rigid-body.
   *
   * If `wake_up` is true then the rigid-body will be woken up if it was put to sleep because it did not move for a while.
   */
  setAdditionalMassProperties(mass, centerOfMass, principalAngularInertia, wakeUp) {
    let rawCom = VectorOps.intoRaw(centerOfMass);
    this.rawSet.rbSetAdditionalMassProperties(this.handle, mass, rawCom, principalAngularInertia, wakeUp);
    rawCom.free();
  }
  // #endif
  /**
   * Sets the linear damping factor applied to this rigid-body.
   *
   * @param factor - The damping factor to set.
   */
  setAngularDamping(factor) {
    this.rawSet.rbSetAngularDamping(this.handle, factor);
  }
  /**
   * Resets to zero the user forces (but not torques) applied to this rigid-body.
   *
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  resetForces(wakeUp) {
    this.rawSet.rbResetForces(this.handle, wakeUp);
  }
  /**
   * Resets to zero the user torques applied to this rigid-body.
   *
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  resetTorques(wakeUp) {
    this.rawSet.rbResetTorques(this.handle, wakeUp);
  }
  /**
   * Adds a force at the center-of-mass of this rigid-body.
   *
   * @param force - the world-space force to add to the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addForce(force, wakeUp) {
    const rawForce = VectorOps.intoRaw(force);
    this.rawSet.rbAddForce(this.handle, rawForce, wakeUp);
    rawForce.free();
  }
  /**
   * Applies an impulse at the center-of-mass of this rigid-body.
   *
   * @param impulse - the world-space impulse to apply on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyImpulse(impulse, wakeUp) {
    const rawImpulse = VectorOps.intoRaw(impulse);
    this.rawSet.rbApplyImpulse(this.handle, rawImpulse, wakeUp);
    rawImpulse.free();
  }
  // #if DIM2
  /**
   * Adds a torque at the center-of-mass of this rigid-body.
   *
   * @param torque - the torque to add to the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addTorque(torque, wakeUp) {
    this.rawSet.rbAddTorque(this.handle, torque, wakeUp);
  }
  // #endif
  // #if DIM2
  /**
   * Applies an impulsive torque at the center-of-mass of this rigid-body.
   *
   * @param torqueImpulse - the torque impulse to apply on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyTorqueImpulse(torqueImpulse, wakeUp) {
    this.rawSet.rbApplyTorqueImpulse(this.handle, torqueImpulse, wakeUp);
  }
  // #endif
  /**
   * Adds a force at the given world-space point of this rigid-body.
   *
   * @param force - the world-space force to add to the rigid-body.
   * @param point - the world-space point where the impulse is to be applied on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  addForceAtPoint(force, point, wakeUp) {
    const rawForce = VectorOps.intoRaw(force);
    const rawPoint = VectorOps.intoRaw(point);
    this.rawSet.rbAddForceAtPoint(this.handle, rawForce, rawPoint, wakeUp);
    rawForce.free();
    rawPoint.free();
  }
  /**
   * Applies an impulse at the given world-space point of this rigid-body.
   *
   * @param impulse - the world-space impulse to apply on the rigid-body.
   * @param point - the world-space point where the impulse is to be applied on the rigid-body.
   * @param wakeUp - should the rigid-body be automatically woken-up?
   */
  applyImpulseAtPoint(impulse, point, wakeUp) {
    const rawImpulse = VectorOps.intoRaw(impulse);
    const rawPoint = VectorOps.intoRaw(point);
    this.rawSet.rbApplyImpulseAtPoint(this.handle, rawImpulse, rawPoint, wakeUp);
    rawImpulse.free();
    rawPoint.free();
  }
};
var RigidBodyDesc = class _RigidBodyDesc {
  constructor(status) {
    this.enabled = true;
    this.status = status;
    this.translation = VectorOps.zeros();
    this.rotation = RotationOps.identity();
    this.gravityScale = 1;
    this.linvel = VectorOps.zeros();
    this.mass = 0;
    this.massOnly = false;
    this.centerOfMass = VectorOps.zeros();
    this.translationsEnabledX = true;
    this.translationsEnabledY = true;
    this.angvel = 0;
    this.principalAngularInertia = 0;
    this.rotationsEnabled = true;
    this.linearDamping = 0;
    this.angularDamping = 0;
    this.canSleep = true;
    this.sleeping = false;
    this.ccdEnabled = false;
    this.softCcdPrediction = 0;
    this.dominanceGroup = 0;
    this.additionalSolverIterations = 0;
  }
  /**
   * A rigid-body descriptor used to build a dynamic rigid-body.
   */
  static dynamic() {
    return new _RigidBodyDesc(RigidBodyType.Dynamic);
  }
  /**
   * A rigid-body descriptor used to build a position-based kinematic rigid-body.
   */
  static kinematicPositionBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicPositionBased);
  }
  /**
   * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
   */
  static kinematicVelocityBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
  }
  /**
   * A rigid-body descriptor used to build a fixed rigid-body.
   */
  static fixed() {
    return new _RigidBodyDesc(RigidBodyType.Fixed);
  }
  /**
   * A rigid-body descriptor used to build a dynamic rigid-body.
   *
   * @deprecated The method has been renamed to `.dynamic()`.
   */
  static newDynamic() {
    return new _RigidBodyDesc(RigidBodyType.Dynamic);
  }
  /**
   * A rigid-body descriptor used to build a position-based kinematic rigid-body.
   *
   * @deprecated The method has been renamed to `.kinematicPositionBased()`.
   */
  static newKinematicPositionBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicPositionBased);
  }
  /**
   * A rigid-body descriptor used to build a velocity-based kinematic rigid-body.
   *
   * @deprecated The method has been renamed to `.kinematicVelocityBased()`.
   */
  static newKinematicVelocityBased() {
    return new _RigidBodyDesc(RigidBodyType.KinematicVelocityBased);
  }
  /**
   * A rigid-body descriptor used to build a fixed rigid-body.
   *
   * @deprecated The method has been renamed to `.fixed()`.
   */
  static newStatic() {
    return new _RigidBodyDesc(RigidBodyType.Fixed);
  }
  setDominanceGroup(group) {
    this.dominanceGroup = group;
    return this;
  }
  /**
   * Sets the number of additional solver iterations that will be run for this
   * rigid-body and everything that interacts with it directly or indirectly
   * through contacts or joints.
   *
   * Compared to increasing the global `World.numSolverIteration`, setting this
   * value lets you increase accuracy on only a subset of the scene, resulting in reduced
   * performance loss.
   *
   * @param iters - The new number of additional solver iterations (default: 0).
   */
  setAdditionalSolverIterations(iters) {
    this.additionalSolverIterations = iters;
    return this;
  }
  /**
   * Sets whether the created rigid-body will be enabled or disabled.
   * @param enabled − If set to `false` the rigid-body will be disabled at creation.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }
  // #if DIM2
  /**
   * Sets the initial translation of the rigid-body to create.
   */
  setTranslation(x, y) {
    if (typeof x != "number" || typeof y != "number")
      throw TypeError("The translation components must be numbers.");
    this.translation = { x, y };
    return this;
  }
  // #endif
  /**
   * Sets the initial rotation of the rigid-body to create.
   *
   * @param rot - The rotation to set.
   */
  setRotation(rot) {
    this.rotation = rot;
    return this;
  }
  /**
   * Sets the scale factor applied to the gravity affecting
   * the rigid-body being built.
   *
   * @param scale - The scale factor. Set this to `0.0` if the rigid-body
   *   needs to ignore gravity.
   */
  setGravityScale(scale) {
    this.gravityScale = scale;
    return this;
  }
  /**
   * Sets the initial mass of the rigid-body being built, before adding colliders' contributions.
   *
   * @param mass − The initial mass of the rigid-body to create.
   */
  setAdditionalMass(mass) {
    this.mass = mass;
    this.massOnly = true;
    return this;
  }
  // #if DIM2
  /**
   * Sets the initial linear velocity of the rigid-body to create.
   *
   * @param x - The linear velocity to set along the `x` axis.
   * @param y - The linear velocity to set along the `y` axis.
   */
  setLinvel(x, y) {
    if (typeof x != "number" || typeof y != "number")
      throw TypeError("The linvel components must be numbers.");
    this.linvel = { x, y };
    return this;
  }
  /**
   * Sets the initial angular velocity of the rigid-body to create.
   *
   * @param vel - The angular velocity to set.
   */
  setAngvel(vel) {
    this.angvel = vel;
    return this;
  }
  /**
   * Sets the mass properties of the rigid-body being built.
   *
   * Note that the final mass properties of the rigid-bodies depends
   * on the initial mass-properties of the rigid-body (set by this method)
   * to which is added the contributions of all the colliders with non-zero density
   * attached to this rigid-body.
   *
   * Therefore, if you want your provided mass properties to be the final
   * mass properties of your rigid-body, don't attach colliders to it, or
   * only attach colliders with densities equal to zero.
   *
   * @param mass − The initial mass of the rigid-body to create.
   * @param centerOfMass − The initial center-of-mass of the rigid-body to create.
   * @param principalAngularInertia − The initial principal angular inertia of the rigid-body to create.
   */
  setAdditionalMassProperties(mass, centerOfMass, principalAngularInertia) {
    this.mass = mass;
    VectorOps.copy(this.centerOfMass, centerOfMass);
    this.principalAngularInertia = principalAngularInertia;
    this.massOnly = false;
    return this;
  }
  /**
   * Allow translation of this rigid-body only along specific axes.
   * @param translationsEnabledX - Are translations along the X axis enabled?
   * @param translationsEnabledY - Are translations along the y axis enabled?
   */
  enabledTranslations(translationsEnabledX, translationsEnabledY) {
    this.translationsEnabledX = translationsEnabledX;
    this.translationsEnabledY = translationsEnabledY;
    return this;
  }
  /**
   * Allow translation of this rigid-body only along specific axes.
   * @param translationsEnabledX - Are translations along the X axis enabled?
   * @param translationsEnabledY - Are translations along the y axis enabled?
   * @deprecated use `this.enabledTranslations` with the same arguments instead.
   */
  restrictTranslations(translationsEnabledX, translationsEnabledY) {
    return this.enabledTranslations(translationsEnabledX, translationsEnabledY);
  }
  /**
   * Locks all translations that would have resulted from forces on
   * the created rigid-body.
   */
  lockTranslations() {
    return this.restrictTranslations(false, false);
  }
  /**
   * Locks all rotations that would have resulted from forces on
   * the created rigid-body.
   */
  lockRotations() {
    this.rotationsEnabled = false;
    return this;
  }
  // #endif
  /**
   * Sets the linear damping of the rigid-body to create.
   *
   * This will progressively slowdown the translational movement of the rigid-body.
   *
   * @param damping - The angular damping coefficient. Should be >= 0. The higher this
   *                  value is, the stronger the translational slowdown will be.
   */
  setLinearDamping(damping) {
    this.linearDamping = damping;
    return this;
  }
  /**
   * Sets the angular damping of the rigid-body to create.
   *
   * This will progressively slowdown the rotational movement of the rigid-body.
   *
   * @param damping - The angular damping coefficient. Should be >= 0. The higher this
   *                  value is, the stronger the rotational slowdown will be.
   */
  setAngularDamping(damping) {
    this.angularDamping = damping;
    return this;
  }
  /**
   * Sets whether or not the rigid-body to create can sleep.
   *
   * @param can - true if the rigid-body can sleep, false if it can't.
   */
  setCanSleep(can) {
    this.canSleep = can;
    return this;
  }
  /**
   * Sets whether or not the rigid-body is to be created asleep.
   *
   * @param can - true if the rigid-body should be in sleep, default false.
   */
  setSleeping(sleeping) {
    this.sleeping = sleeping;
    return this;
  }
  /**
   * Sets whether Continuous Collision Detection (CCD) is enabled for this rigid-body.
   *
   * @param enabled - true if the rigid-body has CCD enabled.
   */
  setCcdEnabled(enabled) {
    this.ccdEnabled = enabled;
    return this;
  }
  /**
   * Sets the maximum prediction distance Soft Continuous Collision-Detection.
   *
   * When set to 0, soft-CCD is disabled. Soft-CCD helps prevent tunneling especially of
   * slow-but-thin to moderately fast objects. The soft CCD prediction distance indicates how
   * far in the object’s path the CCD algorithm is allowed to inspect. Large values can impact
   * performance badly by increasing the work needed from the broad-phase.
   *
   * It is a generally cheaper variant of regular CCD (that can be enabled with
   * `RigidBodyDesc::setCcdEnabled` since it relies on predictive constraints instead of
   * shape-cast and substeps.
   */
  setSoftCcdPrediction(distance) {
    this.softCcdPrediction = distance;
    return this;
  }
  /**
   * Sets the user-defined object of this rigid-body.
   *
   * @param userData - The user-defined object to set.
   */
  setUserData(data) {
    this.userData = data;
    return this;
  }
};

// ../node_modules/@dimforge/rapier2d/coarena.js
var Coarena = class {
  constructor() {
    this.fconv = new Float64Array(1);
    this.uconv = new Uint32Array(this.fconv.buffer);
    this.data = new Array();
    this.size = 0;
  }
  set(handle, data) {
    let i = this.index(handle);
    while (this.data.length <= i) {
      this.data.push(null);
    }
    if (this.data[i] == null)
      this.size += 1;
    this.data[i] = data;
  }
  len() {
    return this.size;
  }
  delete(handle) {
    let i = this.index(handle);
    if (i < this.data.length) {
      if (this.data[i] != null)
        this.size -= 1;
      this.data[i] = null;
    }
  }
  clear() {
    this.data = new Array();
  }
  get(handle) {
    let i = this.index(handle);
    if (i < this.data.length) {
      return this.data[i];
    } else {
      return null;
    }
  }
  forEach(f) {
    for (const elt of this.data) {
      if (elt != null)
        f(elt);
    }
  }
  getAll() {
    return this.data.filter((elt) => elt != null);
  }
  index(handle) {
    this.fconv[0] = handle;
    return this.uconv[0];
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/rigid_body_set.js
var RigidBodySet = class {
  constructor(raw) {
    this.raw = raw || new RawRigidBodySet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachRigidBodyHandle((handle) => {
        this.map.set(handle, new RigidBody(raw, null, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this rigid-body set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /**
   * Internal method, do not call this explicitly.
   */
  finalizeDeserialization(colliderSet) {
    this.map.forEach((rb) => rb.finalizeDeserialization(colliderSet));
  }
  /**
   * Creates a new rigid-body and return its integer handle.
   *
   * @param desc - The description of the rigid-body to create.
   */
  createRigidBody(colliderSet, desc) {
    let rawTra = VectorOps.intoRaw(desc.translation);
    let rawRot = RotationOps.intoRaw(desc.rotation);
    let rawLv = VectorOps.intoRaw(desc.linvel);
    let rawCom = VectorOps.intoRaw(desc.centerOfMass);
    let handle = this.raw.createRigidBody(
      desc.enabled,
      rawTra,
      rawRot,
      desc.gravityScale,
      desc.mass,
      desc.massOnly,
      rawCom,
      rawLv,
      // #if DIM2
      desc.angvel,
      desc.principalAngularInertia,
      desc.translationsEnabledX,
      desc.translationsEnabledY,
      desc.rotationsEnabled,
      // #endif
      desc.linearDamping,
      desc.angularDamping,
      desc.status,
      desc.canSleep,
      desc.sleeping,
      desc.softCcdPrediction,
      desc.ccdEnabled,
      desc.dominanceGroup,
      desc.additionalSolverIterations
    );
    rawTra.free();
    rawRot.free();
    rawLv.free();
    rawCom.free();
    const body = new RigidBody(this.raw, colliderSet, handle);
    body.userData = desc.userData;
    this.map.set(handle, body);
    return body;
  }
  /**
   * Removes a rigid-body from this set.
   *
   * This will also remove all the colliders and joints attached to the rigid-body.
   *
   * @param handle - The integer handle of the rigid-body to remove.
   * @param colliders - The set of colliders that may contain colliders attached to the removed rigid-body.
   * @param impulseJoints - The set of impulse joints that may contain joints attached to the removed rigid-body.
   * @param multibodyJoints - The set of multibody joints that may contain joints attached to the removed rigid-body.
   */
  remove(handle, islands, colliders, impulseJoints, multibodyJoints) {
    for (let i = 0; i < this.raw.rbNumColliders(handle); i += 1) {
      colliders.unmap(this.raw.rbCollider(handle, i));
    }
    impulseJoints.forEachJointHandleAttachedToRigidBody(handle, (handle2) => impulseJoints.unmap(handle2));
    multibodyJoints.forEachJointHandleAttachedToRigidBody(handle, (handle2) => multibodyJoints.unmap(handle2));
    this.raw.remove(handle, islands.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw);
    this.map.delete(handle);
  }
  /**
   * The number of rigid-bodies on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a rigid-body with the given handle?
   *
   * @param handle - The rigid-body handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the rigid-body with the given handle.
   *
   * @param handle - The handle of the rigid-body to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each rigid-body contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Applies the given closure to each active rigid-bodies contained by this set.
   *
   * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
   *
   * @param f - The closure to apply.
   */
  forEachActiveRigidBody(islands, f) {
    islands.forEachActiveRigidBodyHandle((handle) => {
      f(this.get(handle));
    });
  }
  /**
   * Gets all rigid-bodies in the list.
   *
   * @returns rigid-bodies list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/integration_parameters.js
var IntegrationParameters = class {
  constructor(raw) {
    this.raw = raw || new RawIntegrationParameters();
  }
  /**
   * Free the WASM memory used by these integration parameters.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * The timestep length (default: `1.0 / 60.0`)
   */
  get dt() {
    return this.raw.dt;
  }
  /**
   * The Error Reduction Parameter in `[0, 1]` is the proportion of
   * the positional error to be corrected at each time step (default: `0.2`).
   */
  get erp() {
    return this.raw.erp;
  }
  get lengthUnit() {
    return this.raw.lengthUnit;
  }
  /**
   * Normalized amount of penetration the engine won’t attempt to correct (default: `0.001m`).
   *
   * This threshold considered by the physics engine is this value multiplied by the `lengthUnit`.
   */
  get normalizedAllowedLinearError() {
    return this.raw.normalizedAllowedLinearError;
  }
  /**
   * The maximal normalized distance separating two objects that will generate predictive contacts (default: `0.002`).
   *
   * This threshold considered by the physics engine is this value multiplied by the `lengthUnit`.
   */
  get normalizedPredictionDistance() {
    return this.raw.normalizedPredictionDistance;
  }
  /**
   * The number of solver iterations run by the constraints solver for calculating forces (default: `4`).
   */
  get numSolverIterations() {
    return this.raw.numSolverIterations;
  }
  /**
   * Number of addition friction resolution iteration run during the last solver sub-step (default: `4`).
   */
  get numAdditionalFrictionIterations() {
    return this.raw.numAdditionalFrictionIterations;
  }
  /**
   * Number of internal Project Gauss Seidel (PGS) iterations run at each solver iteration (default: `1`).
   */
  get numInternalPgsIterations() {
    return this.raw.numInternalPgsIterations;
  }
  /**
   * Minimum number of dynamic bodies in each active island (default: `128`).
   */
  get minIslandSize() {
    return this.raw.minIslandSize;
  }
  /**
   * Maximum number of substeps performed by the  solver (default: `1`).
   */
  get maxCcdSubsteps() {
    return this.raw.maxCcdSubsteps;
  }
  set dt(value) {
    this.raw.dt = value;
  }
  set erp(value) {
    this.raw.erp = value;
  }
  set lengthUnit(value) {
    this.raw.lengthUnit = value;
  }
  set normalizedAllowedLinearError(value) {
    this.raw.normalizedAllowedLinearError = value;
  }
  set normalizedPredictionDistance(value) {
    this.raw.normalizedPredictionDistance = value;
  }
  /**
   * Sets the number of solver iterations run by the constraints solver for calculating forces (default: `4`).
   */
  set numSolverIterations(value) {
    this.raw.numSolverIterations = value;
  }
  /**
   * Sets the number of addition friction resolution iteration run during the last solver sub-step (default: `4`).
   */
  set numAdditionalFrictionIterations(value) {
    this.raw.numAdditionalFrictionIterations = value;
  }
  /**
   * Sets the number of internal Project Gauss Seidel (PGS) iterations run at each solver iteration (default: `1`).
   */
  set numInternalPgsIterations(value) {
    this.raw.numInternalPgsIterations = value;
  }
  set minIslandSize(value) {
    this.raw.minIslandSize = value;
  }
  set maxCcdSubsteps(value) {
    this.raw.maxCcdSubsteps = value;
  }
  switchToStandardPgsSolver() {
    this.raw.switchToStandardPgsSolver();
  }
  switchToSmallStepsPgsSolver() {
    this.raw.switchToSmallStepsPgsSolver();
  }
  switchToSmallStepsPgsSolverWithoutWarmstart() {
    this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/impulse_joint.js
var JointType;
(function(JointType2) {
  JointType2[JointType2["Revolute"] = 0] = "Revolute";
  JointType2[JointType2["Fixed"] = 1] = "Fixed";
  JointType2[JointType2["Prismatic"] = 2] = "Prismatic";
  JointType2[JointType2["Rope"] = 3] = "Rope";
  JointType2[JointType2["Spring"] = 4] = "Spring";
})(JointType || (JointType = {}));
var MotorModel;
(function(MotorModel2) {
  MotorModel2[MotorModel2["AccelerationBased"] = 0] = "AccelerationBased";
  MotorModel2[MotorModel2["ForceBased"] = 1] = "ForceBased";
})(MotorModel || (MotorModel = {}));
var JointAxesMask;
(function(JointAxesMask2) {
  JointAxesMask2[JointAxesMask2["X"] = 1] = "X";
  JointAxesMask2[JointAxesMask2["Y"] = 2] = "Y";
  JointAxesMask2[JointAxesMask2["Z"] = 4] = "Z";
  JointAxesMask2[JointAxesMask2["AngX"] = 8] = "AngX";
  JointAxesMask2[JointAxesMask2["AngY"] = 16] = "AngY";
  JointAxesMask2[JointAxesMask2["AngZ"] = 32] = "AngZ";
})(JointAxesMask || (JointAxesMask = {}));
var ImpulseJoint = class _ImpulseJoint {
  constructor(rawSet, bodySet, handle) {
    this.rawSet = rawSet;
    this.bodySet = bodySet;
    this.handle = handle;
  }
  static newTyped(rawSet, bodySet, handle) {
    switch (rawSet.jointType(handle)) {
      case RawJointType.Revolute:
        return new RevoluteImpulseJoint(rawSet, bodySet, handle);
      case RawJointType.Prismatic:
        return new PrismaticImpulseJoint(rawSet, bodySet, handle);
      case RawJointType.Fixed:
        return new FixedImpulseJoint(rawSet, bodySet, handle);
      case RawJointType.Spring:
        return new SpringImpulseJoint(rawSet, bodySet, handle);
      case RawJointType.Rope:
        return new RopeImpulseJoint(rawSet, bodySet, handle);
      default:
        return new _ImpulseJoint(rawSet, bodySet, handle);
    }
  }
  /** @internal */
  finalizeDeserialization(bodySet) {
    this.bodySet = bodySet;
  }
  /**
   * Checks if this joint is still valid (i.e. that it has
   * not been deleted from the joint set yet).
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  /**
   * The first rigid-body this joint it attached to.
   */
  body1() {
    return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
  }
  /**
   * The second rigid-body this joint is attached to.
   */
  body2() {
    return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
  }
  /**
   * The type of this joint given as a string.
   */
  type() {
    return this.rawSet.jointType(this.handle);
  }
  /**
   * The position of the first anchor of this joint.
   *
   * The first anchor gives the position of the application point on the
   * local frame of the first rigid-body it is attached to.
   */
  anchor1() {
    return VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
  }
  /**
   * The position of the second anchor of this joint.
   *
   * The second anchor gives the position of the application point on the
   * local frame of the second rigid-body it is attached to.
   */
  anchor2() {
    return VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
  }
  /**
   * Sets the position of the first anchor of this joint.
   *
   * The first anchor gives the position of the application point on the
   * local frame of the first rigid-body it is attached to.
   */
  setAnchor1(newPos) {
    const rawPoint = VectorOps.intoRaw(newPos);
    this.rawSet.jointSetAnchor1(this.handle, rawPoint);
    rawPoint.free();
  }
  /**
   * Sets the position of the second anchor of this joint.
   *
   * The second anchor gives the position of the application point on the
   * local frame of the second rigid-body it is attached to.
   */
  setAnchor2(newPos) {
    const rawPoint = VectorOps.intoRaw(newPos);
    this.rawSet.jointSetAnchor2(this.handle, rawPoint);
    rawPoint.free();
  }
  /**
   * Controls whether contacts are computed between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  setContactsEnabled(enabled) {
    this.rawSet.jointSetContactsEnabled(this.handle, enabled);
  }
  /**
   * Indicates if contacts are enabled between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
};
var UnitImpulseJoint = class extends ImpulseJoint {
  /**
   * Are the limits enabled for this joint?
   */
  limitsEnabled() {
    return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
  }
  /**
   * The min limit of this joint.
   */
  limitsMin() {
    return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
  }
  /**
   * The max limit of this joint.
   */
  limitsMax() {
    return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
  }
  /**
   * Sets the limits of this joint.
   *
   * @param min - The minimum bound of this joint’s free coordinate.
   * @param max - The maximum bound of this joint’s free coordinate.
   */
  setLimits(min, max) {
    this.rawSet.jointSetLimits(this.handle, this.rawAxis(), min, max);
  }
  configureMotorModel(model) {
    this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), model);
  }
  configureMotorVelocity(targetVel, factor) {
    this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), targetVel, factor);
  }
  configureMotorPosition(targetPos, stiffness, damping) {
    this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), targetPos, stiffness, damping);
  }
  configureMotor(targetPos, targetVel, stiffness, damping) {
    this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), targetPos, targetVel, stiffness, damping);
  }
};
var FixedImpulseJoint = class extends ImpulseJoint {
};
var RopeImpulseJoint = class extends ImpulseJoint {
};
var SpringImpulseJoint = class extends ImpulseJoint {
};
var PrismaticImpulseJoint = class extends UnitImpulseJoint {
  rawAxis() {
    return RawJointAxis.X;
  }
};
var RevoluteImpulseJoint = class extends UnitImpulseJoint {
  rawAxis() {
    return RawJointAxis.AngX;
  }
};
var JointData = class _JointData {
  constructor() {
  }
  /**
   * Creates a new joint descriptor that builds a Fixed joint.
   *
   * A fixed joint removes all the degrees of freedom between the affected bodies, ensuring their
   * anchor and local frames coincide in world-space.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param frame1 - The reference orientation of the joint wrt. the first rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param frame2 - The reference orientation of the joint wrt. the second rigid-body.
   */
  static fixed(anchor1, frame1, anchor2, frame2) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.frame1 = frame1;
    res.frame2 = frame2;
    res.jointType = JointType.Fixed;
    return res;
  }
  static spring(rest_length, stiffness, damping, anchor1, anchor2) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.length = rest_length;
    res.stiffness = stiffness;
    res.damping = damping;
    res.jointType = JointType.Spring;
    return res;
  }
  static rope(length, anchor1, anchor2) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.length = length;
    res.jointType = JointType.Rope;
    return res;
  }
  // #if DIM2
  /**
   * Create a new joint descriptor that builds revolute joints.
   *
   * A revolute joint allows three relative rotational degrees of freedom
   * by preventing any relative translation between the anchors of the
   * two attached rigid-bodies.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   */
  static revolute(anchor1, anchor2) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.jointType = JointType.Revolute;
    return res;
  }
  /**
   * Creates a new joint descriptor that builds a Prismatic joint.
   *
   * A prismatic joint removes all the degrees of freedom between the
   * affected bodies, except for the translation along one axis.
   *
   * @param anchor1 - Point where the joint is attached on the first rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param anchor2 - Point where the joint is attached on the second rigid-body affected by this joint. Expressed in the
   *                  local-space of the rigid-body.
   * @param axis - Axis of the joint, expressed in the local-space of the rigid-bodies it is attached to.
   */
  static prismatic(anchor1, anchor2, axis) {
    let res = new _JointData();
    res.anchor1 = anchor1;
    res.anchor2 = anchor2;
    res.axis = axis;
    res.jointType = JointType.Prismatic;
    return res;
  }
  // #endif
  intoRaw() {
    let rawA1 = VectorOps.intoRaw(this.anchor1);
    let rawA2 = VectorOps.intoRaw(this.anchor2);
    let rawAx;
    let result;
    let limitsEnabled = false;
    let limitsMin = 0;
    let limitsMax = 0;
    switch (this.jointType) {
      case JointType.Fixed:
        let rawFra1 = RotationOps.intoRaw(this.frame1);
        let rawFra2 = RotationOps.intoRaw(this.frame2);
        result = RawGenericJoint.fixed(rawA1, rawFra1, rawA2, rawFra2);
        rawFra1.free();
        rawFra2.free();
        break;
      case JointType.Spring:
        result = RawGenericJoint.spring(this.length, this.stiffness, this.damping, rawA1, rawA2);
        break;
      case JointType.Rope:
        result = RawGenericJoint.rope(this.length, rawA1, rawA2);
        break;
      case JointType.Prismatic:
        rawAx = VectorOps.intoRaw(this.axis);
        if (!!this.limitsEnabled) {
          limitsEnabled = true;
          limitsMin = this.limits[0];
          limitsMax = this.limits[1];
        }
        result = RawGenericJoint.prismatic(rawA1, rawA2, rawAx, limitsEnabled, limitsMin, limitsMax);
        rawAx.free();
        break;
      case JointType.Revolute:
        result = RawGenericJoint.revolute(rawA1, rawA2);
        break;
    }
    rawA1.free();
    rawA2.free();
    return result;
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/impulse_joint_set.js
var ImpulseJointSet = class {
  constructor(raw) {
    this.raw = raw || new RawImpulseJointSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachJointHandle((handle) => {
        this.map.set(handle, ImpulseJoint.newTyped(raw, null, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this joint set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    this.map.forEach((joint) => joint.finalizeDeserialization(bodies));
  }
  /**
   * Creates a new joint and return its integer handle.
   *
   * @param bodies - The set of rigid-bodies containing the bodies the joint is attached to.
   * @param desc - The joint's parameters.
   * @param parent1 - The handle of the first rigid-body this joint is attached to.
   * @param parent2 - The handle of the second rigid-body this joint is attached to.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createJoint(bodies, desc, parent1, parent2, wakeUp) {
    const rawParams = desc.intoRaw();
    const handle = this.raw.createJoint(rawParams, parent1, parent2, wakeUp);
    rawParams.free();
    let joint = ImpulseJoint.newTyped(this.raw, bodies, handle);
    this.map.set(handle, joint);
    return joint;
  }
  /**
   * Remove a joint from this set.
   *
   * @param handle - The integer handle of the joint.
   * @param wakeUp - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
   */
  remove(handle, wakeUp) {
    this.raw.remove(handle, wakeUp);
    this.unmap(handle);
  }
  /**
   * Calls the given closure with the integer handle of each impulse joint attached to this rigid-body.
   *
   * @param f - The closure called with the integer handle of each impulse joint attached to the rigid-body.
   */
  forEachJointHandleAttachedToRigidBody(handle, f) {
    this.raw.forEachJointAttachedToRigidBody(handle, f);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * The number of joints on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a joint with the given handle?
   *
   * @param handle - The joint handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the joint with the given handle.
   *
   * Returns `null` if no joint with the specified handle exists.
   *
   * @param handle - The integer handle of the joint to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each joint contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Gets all joints in the list.
   *
   * @returns joint list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/multibody_joint.js
var MultibodyJoint = class _MultibodyJoint {
  constructor(rawSet, handle) {
    this.rawSet = rawSet;
    this.handle = handle;
  }
  static newTyped(rawSet, handle) {
    switch (rawSet.jointType(handle)) {
      case RawJointType.Revolute:
        return new RevoluteMultibodyJoint(rawSet, handle);
      case RawJointType.Prismatic:
        return new PrismaticMultibodyJoint(rawSet, handle);
      case RawJointType.Fixed:
        return new FixedMultibodyJoint(rawSet, handle);
      default:
        return new _MultibodyJoint(rawSet, handle);
    }
  }
  /**
   * Checks if this joint is still valid (i.e. that it has
   * not been deleted from the joint set yet).
   */
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  // /**
  //  * The unique integer identifier of the first rigid-body this joint it attached to.
  //  */
  // public bodyHandle1(): RigidBodyHandle {
  //     return this.rawSet.jointBodyHandle1(this.handle);
  // }
  //
  // /**
  //  * The unique integer identifier of the second rigid-body this joint is attached to.
  //  */
  // public bodyHandle2(): RigidBodyHandle {
  //     return this.rawSet.jointBodyHandle2(this.handle);
  // }
  //
  // /**
  //  * The type of this joint given as a string.
  //  */
  // public type(): JointType {
  //     return this.rawSet.jointType(this.handle);
  // }
  //
  //
  //
  // /**
  //  * The position of the first anchor of this joint.
  //  *
  //  * The first anchor gives the position of the points application point on the
  //  * local frame of the first rigid-body it is attached to.
  //  */
  // public anchor1(): Vector {
  //     return VectorOps.fromRaw(this.rawSet.jointAnchor1(this.handle));
  // }
  //
  // /**
  //  * The position of the second anchor of this joint.
  //  *
  //  * The second anchor gives the position of the points application point on the
  //  * local frame of the second rigid-body it is attached to.
  //  */
  // public anchor2(): Vector {
  //     return VectorOps.fromRaw(this.rawSet.jointAnchor2(this.handle));
  // }
  /**
   * Controls whether contacts are computed between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  setContactsEnabled(enabled) {
    this.rawSet.jointSetContactsEnabled(this.handle, enabled);
  }
  /**
   * Indicates if contacts are enabled between colliders attached
   * to the rigid-bodies linked by this joint.
   */
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
};
var UnitMultibodyJoint = class extends MultibodyJoint {
};
var FixedMultibodyJoint = class extends MultibodyJoint {
};
var PrismaticMultibodyJoint = class extends UnitMultibodyJoint {
  rawAxis() {
    return RawJointAxis.X;
  }
};
var RevoluteMultibodyJoint = class extends UnitMultibodyJoint {
  rawAxis() {
    return RawJointAxis.AngX;
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/multibody_joint_set.js
var MultibodyJointSet = class {
  constructor(raw) {
    this.raw = raw || new RawMultibodyJointSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachJointHandle((handle) => {
        this.map.set(handle, MultibodyJoint.newTyped(this.raw, handle));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this joint set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /**
   * Creates a new joint and return its integer handle.
   *
   * @param desc - The joint's parameters.
   * @param parent1 - The handle of the first rigid-body this joint is attached to.
   * @param parent2 - The handle of the second rigid-body this joint is attached to.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createJoint(desc, parent1, parent2, wakeUp) {
    const rawParams = desc.intoRaw();
    const handle = this.raw.createJoint(rawParams, parent1, parent2, wakeUp);
    rawParams.free();
    let joint = MultibodyJoint.newTyped(this.raw, handle);
    this.map.set(handle, joint);
    return joint;
  }
  /**
   * Remove a joint from this set.
   *
   * @param handle - The integer handle of the joint.
   * @param wake_up - If `true`, the rigid-bodies attached by the removed joint will be woken-up automatically.
   */
  remove(handle, wake_up) {
    this.raw.remove(handle, wake_up);
    this.map.delete(handle);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * The number of joints on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a joint with the given handle?
   *
   * @param handle - The joint handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Gets the joint with the given handle.
   *
   * Returns `null` if no joint with the specified handle exists.
   *
   * @param handle - The integer handle of the joint to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * Applies the given closure to each joint contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Calls the given closure with the integer handle of each multibody joint attached to this rigid-body.
   *
   * @param f - The closure called with the integer handle of each multibody joint attached to the rigid-body.
   */
  forEachJointHandleAttachedToRigidBody(handle, f) {
    this.raw.forEachJointAttachedToRigidBody(handle, f);
  }
  /**
   * Gets all joints in the list.
   *
   * @returns joint list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/coefficient_combine_rule.js
var CoefficientCombineRule;
(function(CoefficientCombineRule2) {
  CoefficientCombineRule2[CoefficientCombineRule2["Average"] = 0] = "Average";
  CoefficientCombineRule2[CoefficientCombineRule2["Min"] = 1] = "Min";
  CoefficientCombineRule2[CoefficientCombineRule2["Multiply"] = 2] = "Multiply";
  CoefficientCombineRule2[CoefficientCombineRule2["Max"] = 3] = "Max";
})(CoefficientCombineRule || (CoefficientCombineRule = {}));

// ../node_modules/@dimforge/rapier2d/dynamics/ccd_solver.js
var CCDSolver = class {
  constructor(raw) {
    this.raw = raw || new RawCCDSolver();
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
};

// ../node_modules/@dimforge/rapier2d/dynamics/island_manager.js
var IslandManager = class {
  constructor(raw) {
    this.raw = raw || new RawIslandManager();
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Applies the given closure to the handle of each active rigid-bodies contained by this set.
   *
   * A rigid-body is active if it is not sleeping, i.e., if it moved recently.
   *
   * @param f - The closure to apply.
   */
  forEachActiveRigidBodyHandle(f) {
    this.raw.forEachActiveRigidBodyHandle(f);
  }
};

// ../node_modules/@dimforge/rapier2d/geometry/broad_phase.js
var BroadPhase = class {
  constructor(raw) {
    this.raw = raw || new RawBroadPhase();
  }
  /**
   * Release the WASM memory occupied by this broad-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
};

// ../node_modules/@dimforge/rapier2d/geometry/narrow_phase.js
var NarrowPhase = class {
  constructor(raw) {
    this.raw = raw || new RawNarrowPhase();
    this.tempManifold = new TempContactManifold(null);
  }
  /**
   * Release the WASM memory occupied by this narrow-phase.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Enumerates all the colliders potentially in contact with the given collider.
   *
   * @param collider1 - The second collider involved in the contact.
   * @param f - Closure that will be called on each collider that is in contact with `collider1`.
   */
  contactPairsWith(collider1, f) {
    this.raw.contact_pairs_with(collider1, f);
  }
  /**
   * Enumerates all the colliders intersecting the given colliders, assuming one of them
   * is a sensor.
   */
  intersectionPairsWith(collider1, f) {
    this.raw.intersection_pairs_with(collider1, f);
  }
  /**
   * Iterates through all the contact manifolds between the given pair of colliders.
   *
   * @param collider1 - The first collider involved in the contact.
   * @param collider2 - The second collider involved in the contact.
   * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
   *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
   *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
   */
  contactPair(collider1, collider2, f) {
    const rawPair = this.raw.contact_pair(collider1, collider2);
    if (!!rawPair) {
      const flipped = rawPair.collider1() != collider1;
      let i;
      for (i = 0; i < rawPair.numContactManifolds(); ++i) {
        this.tempManifold.raw = rawPair.contactManifold(i);
        if (!!this.tempManifold.raw) {
          f(this.tempManifold, flipped);
        }
        this.tempManifold.free();
      }
      rawPair.free();
    }
  }
  /**
   * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
   * @param collider1 − The first collider involved in the intersection.
   * @param collider2 − The second collider involved in the intersection.
   */
  intersectionPair(collider1, collider2) {
    return this.raw.intersection_pair(collider1, collider2);
  }
};
var TempContactManifold = class {
  constructor(raw) {
    this.raw = raw;
  }
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  normal() {
    return VectorOps.fromRaw(this.raw.normal());
  }
  localNormal1() {
    return VectorOps.fromRaw(this.raw.local_n1());
  }
  localNormal2() {
    return VectorOps.fromRaw(this.raw.local_n2());
  }
  subshape1() {
    return this.raw.subshape1();
  }
  subshape2() {
    return this.raw.subshape2();
  }
  numContacts() {
    return this.raw.num_contacts();
  }
  localContactPoint1(i) {
    return VectorOps.fromRaw(this.raw.contact_local_p1(i));
  }
  localContactPoint2(i) {
    return VectorOps.fromRaw(this.raw.contact_local_p2(i));
  }
  contactDist(i) {
    return this.raw.contact_dist(i);
  }
  contactFid1(i) {
    return this.raw.contact_fid1(i);
  }
  contactFid2(i) {
    return this.raw.contact_fid2(i);
  }
  contactImpulse(i) {
    return this.raw.contact_impulse(i);
  }
  // #if DIM2
  contactTangentImpulse(i) {
    return this.raw.contact_tangent_impulse(i);
  }
  // #endif
  numSolverContacts() {
    return this.raw.num_solver_contacts();
  }
  solverContactPoint(i) {
    return VectorOps.fromRaw(this.raw.solver_contact_point(i));
  }
  solverContactDist(i) {
    return this.raw.solver_contact_dist(i);
  }
  solverContactFriction(i) {
    return this.raw.solver_contact_friction(i);
  }
  solverContactRestitution(i) {
    return this.raw.solver_contact_restitution(i);
  }
  solverContactTangentVelocity(i) {
    return VectorOps.fromRaw(this.raw.solver_contact_tangent_velocity(i));
  }
};

// ../node_modules/@dimforge/rapier2d/geometry/contact.js
var ShapeContact = class _ShapeContact {
  constructor(dist, point1, point2, normal1, normal2) {
    this.distance = dist;
    this.point1 = point1;
    this.point2 = point2;
    this.normal1 = normal1;
    this.normal2 = normal2;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _ShapeContact(raw.distance(), VectorOps.fromRaw(raw.point1()), VectorOps.fromRaw(raw.point2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};

// ../node_modules/@dimforge/rapier2d/geometry/feature.js
var FeatureType;
(function(FeatureType2) {
  FeatureType2[FeatureType2["Vertex"] = 0] = "Vertex";
  FeatureType2[FeatureType2["Face"] = 1] = "Face";
  FeatureType2[FeatureType2["Unknown"] = 2] = "Unknown";
})(FeatureType || (FeatureType = {}));

// ../node_modules/@dimforge/rapier2d/geometry/point.js
var PointProjection = class _PointProjection {
  constructor(point, isInside) {
    this.point = point;
    this.isInside = isInside;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _PointProjection(VectorOps.fromRaw(raw.point()), raw.isInside());
    raw.free();
    return result;
  }
};
var PointColliderProjection = class _PointColliderProjection {
  constructor(collider, point, isInside, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.collider = collider;
    this.point = point;
    this.isInside = isInside;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _PointColliderProjection(colliderSet.get(raw.colliderHandle()), VectorOps.fromRaw(raw.point()), raw.isInside(), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};

// ../node_modules/@dimforge/rapier2d/geometry/ray.js
var Ray = class {
  /**
   * Builds a ray from its origin and direction.
   *
   * @param origin - The ray's starting point.
   * @param dir - The ray's direction of propagation.
   */
  constructor(origin, dir) {
    this.origin = origin;
    this.dir = dir;
  }
  pointAt(t) {
    return {
      x: this.origin.x + this.dir.x * t,
      y: this.origin.y + this.dir.y * t
    };
  }
};
var RayIntersection = class _RayIntersection {
  constructor(timeOfImpact, normal, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.timeOfImpact = timeOfImpact;
    this.normal = normal;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    const result = new _RayIntersection(raw.time_of_impact(), VectorOps.fromRaw(raw.normal()), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};
var RayColliderIntersection = class _RayColliderIntersection {
  constructor(collider, timeOfImpact, normal, featureType, featureId) {
    this.featureType = FeatureType.Unknown;
    this.featureId = void 0;
    this.collider = collider;
    this.timeOfImpact = timeOfImpact;
    this.normal = normal;
    if (featureId !== void 0)
      this.featureId = featureId;
    if (featureType !== void 0)
      this.featureType = featureType;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _RayColliderIntersection(colliderSet.get(raw.colliderHandle()), raw.time_of_impact(), VectorOps.fromRaw(raw.normal()), raw.featureType(), raw.featureId());
    raw.free();
    return result;
  }
};
var RayColliderHit = class _RayColliderHit {
  constructor(collider, timeOfImpact) {
    this.collider = collider;
    this.timeOfImpact = timeOfImpact;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _RayColliderHit(colliderSet.get(raw.colliderHandle()), raw.timeOfImpact());
    raw.free();
    return result;
  }
};

// ../node_modules/@dimforge/rapier2d/geometry/toi.js
var ShapeCastHit = class _ShapeCastHit {
  constructor(time_of_impact, witness1, witness2, normal1, normal2) {
    this.time_of_impact = time_of_impact;
    this.witness1 = witness1;
    this.witness2 = witness2;
    this.normal1 = normal1;
    this.normal2 = normal2;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _ShapeCastHit(raw.time_of_impact(), VectorOps.fromRaw(raw.witness1()), VectorOps.fromRaw(raw.witness2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};
var ColliderShapeCastHit = class _ColliderShapeCastHit extends ShapeCastHit {
  constructor(collider, time_of_impact, witness1, witness2, normal1, normal2) {
    super(time_of_impact, witness1, witness2, normal1, normal2);
    this.collider = collider;
  }
  static fromRaw(colliderSet, raw) {
    if (!raw)
      return null;
    const result = new _ColliderShapeCastHit(colliderSet.get(raw.colliderHandle()), raw.time_of_impact(), VectorOps.fromRaw(raw.witness1()), VectorOps.fromRaw(raw.witness2()), VectorOps.fromRaw(raw.normal1()), VectorOps.fromRaw(raw.normal2()));
    raw.free();
    return result;
  }
};

// ../node_modules/@dimforge/rapier2d/geometry/shape.js
var Shape = class {
  /**
   * instant mode without cache
   */
  static fromRaw(rawSet, handle) {
    const rawType = rawSet.coShapeType(handle);
    let extents;
    let borderRadius;
    let vs;
    let indices;
    let halfHeight;
    let radius;
    let normal;
    switch (rawType) {
      case RawShapeType.Ball:
        return new Ball(rawSet.coRadius(handle));
      case RawShapeType.Cuboid:
        extents = rawSet.coHalfExtents(handle);
        return new Cuboid(extents.x, extents.y);
      case RawShapeType.RoundCuboid:
        extents = rawSet.coHalfExtents(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundCuboid(extents.x, extents.y, borderRadius);
      case RawShapeType.Capsule:
        halfHeight = rawSet.coHalfHeight(handle);
        radius = rawSet.coRadius(handle);
        return new Capsule(halfHeight, radius);
      case RawShapeType.Segment:
        vs = rawSet.coVertices(handle);
        return new Segment(VectorOps.new(vs[0], vs[1]), VectorOps.new(vs[2], vs[3]));
      case RawShapeType.Polyline:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        return new Polyline(vs, indices);
      case RawShapeType.Triangle:
        vs = rawSet.coVertices(handle);
        return new Triangle(VectorOps.new(vs[0], vs[1]), VectorOps.new(vs[2], vs[3]), VectorOps.new(vs[4], vs[5]));
      case RawShapeType.RoundTriangle:
        vs = rawSet.coVertices(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundTriangle(VectorOps.new(vs[0], vs[1]), VectorOps.new(vs[2], vs[3]), VectorOps.new(vs[4], vs[5]), borderRadius);
      case RawShapeType.HalfSpace:
        normal = VectorOps.fromRaw(rawSet.coHalfspaceNormal(handle));
        return new HalfSpace(normal);
      case RawShapeType.TriMesh:
        vs = rawSet.coVertices(handle);
        indices = rawSet.coIndices(handle);
        const tri_flags = rawSet.coTriMeshFlags(handle);
        return new TriMesh(vs, indices, tri_flags);
      case RawShapeType.HeightField:
        const scale = rawSet.coHeightfieldScale(handle);
        const heights = rawSet.coHeightfieldHeights(handle);
        return new Heightfield(heights, scale);
      case RawShapeType.ConvexPolygon:
        vs = rawSet.coVertices(handle);
        return new ConvexPolygon(vs, false);
      case RawShapeType.RoundConvexPolygon:
        vs = rawSet.coVertices(handle);
        borderRadius = rawSet.coRoundRadius(handle);
        return new RoundConvexPolygon(vs, borderRadius, false);
      default:
        throw new Error("unknown shape type: " + rawType);
    }
  }
  /**
   * Computes the time of impact between two moving shapes.
   * @param shapePos1 - The initial position of this sahpe.
   * @param shapeRot1 - The rotation of this shape.
   * @param shapeVel1 - The velocity of this shape.
   * @param shape2 - The second moving shape.
   * @param shapePos2 - The initial position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @param shapeVel2 - The velocity of the second shape.
   * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
   *                         will be returned.
   * @param maxToi - The maximum time when the impact can happen.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @returns If the two moving shapes collider at some point along their trajectories, this returns the
   *  time at which the two shape collider as well as the contact information during the impact. Returns
   *  `null`if the two shapes never collide along their paths.
   */
  castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, targetDistance, maxToi, stopAtPenetration) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawVel1 = VectorOps.intoRaw(shapeVel1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawVel2 = VectorOps.intoRaw(shapeVel2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = ShapeCastHit.fromRaw(null, rawShape1.castShape(rawPos1, rawRot1, rawVel1, rawShape2, rawPos2, rawRot2, rawVel2, targetDistance, maxToi, stopAtPenetration));
    rawPos1.free();
    rawRot1.free();
    rawVel1.free();
    rawPos2.free();
    rawRot2.free();
    rawVel2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  /**
   * Tests if this shape intersects another shape.
   *
   * @param shapePos1 - The position of this shape.
   * @param shapeRot1 - The rotation of this shape.
   * @param shape2  - The second shape to test.
   * @param shapePos2 - The position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @returns `true` if the two shapes intersect, `false` if they don’t.
   */
  intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = rawShape1.intersectsShape(rawPos1, rawRot1, rawShape2, rawPos2, rawRot2);
    rawPos1.free();
    rawRot1.free();
    rawPos2.free();
    rawRot2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between two shapes.
   *
   * @param shapePos1 - The initial position of this sahpe.
   * @param shapeRot1 - The rotation of this shape.
   * @param shape2 - The second shape.
   * @param shapePos2 - The initial position of the second shape.
   * @param shapeRot2 - The rotation of the second shape.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
    let rawPos1 = VectorOps.intoRaw(shapePos1);
    let rawRot1 = RotationOps.intoRaw(shapeRot1);
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape1 = this.intoRaw();
    let rawShape2 = shape2.intoRaw();
    let result = ShapeContact.fromRaw(rawShape1.contactShape(rawPos1, rawRot1, rawShape2, rawPos2, rawRot2, prediction));
    rawPos1.free();
    rawRot1.free();
    rawPos2.free();
    rawRot2.free();
    rawShape1.free();
    rawShape2.free();
    return result;
  }
  containsPoint(shapePos, shapeRot, point) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawPoint = VectorOps.intoRaw(point);
    let rawShape = this.intoRaw();
    let result = rawShape.containsPoint(rawPos, rawRot, rawPoint);
    rawPos.free();
    rawRot.free();
    rawPoint.free();
    rawShape.free();
    return result;
  }
  projectPoint(shapePos, shapeRot, point, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawPoint = VectorOps.intoRaw(point);
    let rawShape = this.intoRaw();
    let result = PointProjection.fromRaw(rawShape.projectPoint(rawPos, rawRot, rawPoint, solid));
    rawPos.free();
    rawRot.free();
    rawPoint.free();
    rawShape.free();
    return result;
  }
  intersectsRay(ray, shapePos, shapeRot, maxToi) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = rawShape.intersectsRay(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi);
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
  castRay(ray, shapePos, shapeRot, maxToi, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = rawShape.castRay(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi, solid);
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
  castRayAndGetNormal(ray, shapePos, shapeRot, maxToi, solid) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawRayOrig = VectorOps.intoRaw(ray.origin);
    let rawRayDir = VectorOps.intoRaw(ray.dir);
    let rawShape = this.intoRaw();
    let result = RayIntersection.fromRaw(rawShape.castRayAndGetNormal(rawPos, rawRot, rawRayOrig, rawRayDir, maxToi, solid));
    rawPos.free();
    rawRot.free();
    rawRayOrig.free();
    rawRayDir.free();
    rawShape.free();
    return result;
  }
};
var ShapeType;
(function(ShapeType2) {
  ShapeType2[ShapeType2["Ball"] = 0] = "Ball";
  ShapeType2[ShapeType2["Cuboid"] = 1] = "Cuboid";
  ShapeType2[ShapeType2["Capsule"] = 2] = "Capsule";
  ShapeType2[ShapeType2["Segment"] = 3] = "Segment";
  ShapeType2[ShapeType2["Polyline"] = 4] = "Polyline";
  ShapeType2[ShapeType2["Triangle"] = 5] = "Triangle";
  ShapeType2[ShapeType2["TriMesh"] = 6] = "TriMesh";
  ShapeType2[ShapeType2["HeightField"] = 7] = "HeightField";
  ShapeType2[ShapeType2["ConvexPolygon"] = 9] = "ConvexPolygon";
  ShapeType2[ShapeType2["RoundCuboid"] = 10] = "RoundCuboid";
  ShapeType2[ShapeType2["RoundTriangle"] = 11] = "RoundTriangle";
  ShapeType2[ShapeType2["RoundConvexPolygon"] = 12] = "RoundConvexPolygon";
  ShapeType2[ShapeType2["HalfSpace"] = 13] = "HalfSpace";
})(ShapeType || (ShapeType = {}));
var TriMeshFlags;
(function(TriMeshFlags2) {
  TriMeshFlags2[TriMeshFlags2["DELETE_BAD_TOPOLOGY_TRIANGLES"] = 4] = "DELETE_BAD_TOPOLOGY_TRIANGLES";
  TriMeshFlags2[TriMeshFlags2["ORIENTED"] = 8] = "ORIENTED";
  TriMeshFlags2[TriMeshFlags2["MERGE_DUPLICATE_VERTICES"] = 16] = "MERGE_DUPLICATE_VERTICES";
  TriMeshFlags2[TriMeshFlags2["DELETE_DEGENERATE_TRIANGLES"] = 32] = "DELETE_DEGENERATE_TRIANGLES";
  TriMeshFlags2[TriMeshFlags2["DELETE_DUPLICATE_TRIANGLES"] = 64] = "DELETE_DUPLICATE_TRIANGLES";
  TriMeshFlags2[TriMeshFlags2["FIX_INTERNAL_EDGES"] = 152] = "FIX_INTERNAL_EDGES";
})(TriMeshFlags || (TriMeshFlags = {}));
var Ball = class extends Shape {
  /**
   * Creates a new ball with the given radius.
   * @param radius - The balls radius.
   */
  constructor(radius) {
    super();
    this.type = ShapeType.Ball;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.ball(this.radius);
  }
};
var HalfSpace = class extends Shape {
  /**
   * Creates a new halfspace delimited by an infinite plane.
   *
   * @param normal - The outward normal of the plane.
   */
  constructor(normal) {
    super();
    this.type = ShapeType.HalfSpace;
    this.normal = normal;
  }
  intoRaw() {
    let n = VectorOps.intoRaw(this.normal);
    let result = RawShape.halfspace(n);
    n.free();
    return result;
  }
};
var Cuboid = class extends Shape {
  // #if DIM2
  /**
   * Creates a new 2D rectangle.
   * @param hx - The half width of the rectangle.
   * @param hy - The helf height of the rectangle.
   */
  constructor(hx, hy) {
    super();
    this.type = ShapeType.Cuboid;
    this.halfExtents = VectorOps.new(hx, hy);
  }
  // #endif
  intoRaw() {
    return RawShape.cuboid(this.halfExtents.x, this.halfExtents.y);
  }
};
var RoundCuboid = class extends Shape {
  // #if DIM2
  /**
   * Creates a new 2D rectangle.
   * @param hx - The half width of the rectangle.
   * @param hy - The helf height of the rectangle.
   * @param borderRadius - The radius of the borders of this cuboid. This will
   *   effectively increase the half-extents of the cuboid by this radius.
   */
  constructor(hx, hy, borderRadius) {
    super();
    this.type = ShapeType.RoundCuboid;
    this.halfExtents = VectorOps.new(hx, hy);
    this.borderRadius = borderRadius;
  }
  // #endif
  intoRaw() {
    return RawShape.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.borderRadius);
  }
};
var Capsule = class extends Shape {
  /**
   * Creates a new capsule with the given radius and half-height.
   * @param halfHeight - The balls half-height along the `y` axis.
   * @param radius - The balls radius.
   */
  constructor(halfHeight, radius) {
    super();
    this.type = ShapeType.Capsule;
    this.halfHeight = halfHeight;
    this.radius = radius;
  }
  intoRaw() {
    return RawShape.capsule(this.halfHeight, this.radius);
  }
};
var Segment = class extends Shape {
  /**
   * Creates a new segment shape.
   * @param a - The first point of the segment.
   * @param b - The second point of the segment.
   */
  constructor(a, b) {
    super();
    this.type = ShapeType.Segment;
    this.a = a;
    this.b = b;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let result = RawShape.segment(ra, rb);
    ra.free();
    rb.free();
    return result;
  }
};
var Triangle = class extends Shape {
  /**
   * Creates a new triangle shape.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   */
  constructor(a, b, c) {
    super();
    this.type = ShapeType.Triangle;
    this.a = a;
    this.b = b;
    this.c = c;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let rc = VectorOps.intoRaw(this.c);
    let result = RawShape.triangle(ra, rb, rc);
    ra.free();
    rb.free();
    rc.free();
    return result;
  }
};
var RoundTriangle = class extends Shape {
  /**
   * Creates a new triangle shape with round corners.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   * @param borderRadius - The radius of the borders of this triangle. In 3D,
   *   this is also equal to half the thickness of the triangle.
   */
  constructor(a, b, c, borderRadius) {
    super();
    this.type = ShapeType.RoundTriangle;
    this.a = a;
    this.b = b;
    this.c = c;
    this.borderRadius = borderRadius;
  }
  intoRaw() {
    let ra = VectorOps.intoRaw(this.a);
    let rb = VectorOps.intoRaw(this.b);
    let rc = VectorOps.intoRaw(this.c);
    let result = RawShape.roundTriangle(ra, rb, rc, this.borderRadius);
    ra.free();
    rb.free();
    rc.free();
    return result;
  }
};
var Polyline = class extends Shape {
  /**
   * Creates a new polyline shape.
   *
   * @param vertices - The coordinates of the polyline's vertices.
   * @param indices - The indices of the polyline's segments. If this is `null` or not provided, then
   *    the vertices are assumed to form a line strip.
   */
  constructor(vertices, indices) {
    super();
    this.type = ShapeType.Polyline;
    this.vertices = vertices;
    this.indices = indices !== null && indices !== void 0 ? indices : new Uint32Array(0);
  }
  intoRaw() {
    return RawShape.polyline(this.vertices, this.indices);
  }
};
var TriMesh = class extends Shape {
  /**
   * Creates a new triangle mesh shape.
   *
   * @param vertices - The coordinates of the triangle mesh's vertices.
   * @param indices - The indices of the triangle mesh's triangles.
   */
  constructor(vertices, indices, flags) {
    super();
    this.type = ShapeType.TriMesh;
    this.vertices = vertices;
    this.indices = indices;
    this.flags = flags;
  }
  intoRaw() {
    return RawShape.trimesh(this.vertices, this.indices, this.flags);
  }
};
var ConvexPolygon = class extends Shape {
  /**
   * Creates a new convex polygon shape.
   *
   * @param vertices - The coordinates of the convex polygon's vertices.
   * @param skipConvexHullComputation - If set to `true`, the input points will
   *   be assumed to form a convex polyline and no convex-hull computation will
   *   be done automatically.
   */
  constructor(vertices, skipConvexHullComputation) {
    super();
    this.type = ShapeType.ConvexPolygon;
    this.vertices = vertices;
    this.skipConvexHullComputation = !!skipConvexHullComputation;
  }
  intoRaw() {
    if (this.skipConvexHullComputation) {
      return RawShape.convexPolyline(this.vertices);
    } else {
      return RawShape.convexHull(this.vertices);
    }
  }
};
var RoundConvexPolygon = class extends Shape {
  /**
   * Creates a new convex polygon shape.
   *
   * @param vertices - The coordinates of the convex polygon's vertices.
   * @param borderRadius - The radius of the borders of this convex polygon.
   * @param skipConvexHullComputation - If set to `true`, the input points will
   *   be assumed to form a convex polyline and no convex-hull computation will
   *   be done automatically.
   */
  constructor(vertices, borderRadius, skipConvexHullComputation) {
    super();
    this.type = ShapeType.RoundConvexPolygon;
    this.vertices = vertices;
    this.borderRadius = borderRadius;
    this.skipConvexHullComputation = !!skipConvexHullComputation;
  }
  intoRaw() {
    if (this.skipConvexHullComputation) {
      return RawShape.roundConvexPolyline(this.vertices, this.borderRadius);
    } else {
      return RawShape.roundConvexHull(this.vertices, this.borderRadius);
    }
  }
};
var Heightfield = class extends Shape {
  /**
   * Creates a new heightfield shape.
   *
   * @param heights - The heights of the heightfield, along its local `y` axis.
   * @param scale - The scale factor applied to the heightfield.
   */
  constructor(heights, scale) {
    super();
    this.type = ShapeType.HeightField;
    this.heights = heights;
    this.scale = scale;
  }
  intoRaw() {
    let rawScale = VectorOps.intoRaw(this.scale);
    let rawShape = RawShape.heightfield(this.heights, rawScale);
    rawScale.free();
    return rawShape;
  }
};

// ../node_modules/@dimforge/rapier2d/pipeline/physics_pipeline.js
var PhysicsPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawPhysicsPipeline();
  }
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulseJoints, multibodyJoints, ccdSolver, eventQueue, hooks) {
    let rawG = VectorOps.intoRaw(gravity);
    if (!!eventQueue) {
      this.raw.stepWithEvents(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw, ccdSolver.raw, eventQueue.raw, hooks, !!hooks ? hooks.filterContactPair : null, !!hooks ? hooks.filterIntersectionPair : null);
    } else {
      this.raw.step(rawG, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw, ccdSolver.raw);
    }
    rawG.free();
  }
};

// ../node_modules/@dimforge/rapier2d/pipeline/query_pipeline.js
var QueryFilterFlags;
(function(QueryFilterFlags2) {
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_FIXED"] = 1] = "EXCLUDE_FIXED";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_KINEMATIC"] = 2] = "EXCLUDE_KINEMATIC";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_DYNAMIC"] = 4] = "EXCLUDE_DYNAMIC";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_SENSORS"] = 8] = "EXCLUDE_SENSORS";
  QueryFilterFlags2[QueryFilterFlags2["EXCLUDE_SOLIDS"] = 16] = "EXCLUDE_SOLIDS";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_DYNAMIC"] = 3] = "ONLY_DYNAMIC";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_KINEMATIC"] = 5] = "ONLY_KINEMATIC";
  QueryFilterFlags2[QueryFilterFlags2["ONLY_FIXED"] = 6] = "ONLY_FIXED";
})(QueryFilterFlags || (QueryFilterFlags = {}));
var QueryPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawQueryPipeline();
  }
  /**
   * Release the WASM memory occupied by this query pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Updates the acceleration structure of the query pipeline.
   * @param bodies - The set of rigid-bodies taking part in this pipeline.
   * @param colliders - The set of colliders taking part in this pipeline.
   */
  update(bodies, colliders) {
    this.raw.update(bodies.raw, colliders.raw);
  }
  /**
   * Find the closest intersection between a ray and a set of collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param filter - The callback to filter out which collider will be hit.
   */
  castRay(bodies, colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayColliderHit.fromRaw(colliders, this.raw.castRay(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Find the closest intersection between a ray and a set of collider.
   *
   * This also computes the normal at the hit point.
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   */
  castRayAndGetNormal(bodies, colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayColliderIntersection.fromRaw(colliders, this.raw.castRayAndGetNormal(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Cast a ray and collects all the intersections between a ray and the scene.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
   *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
   */
  intersectionsWithRay(bodies, colliders, ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let rawCallback = (rawInter) => {
      return callback(RayColliderIntersection.fromRaw(colliders, rawInter));
    };
    this.raw.intersectionsWithRay(bodies.raw, colliders.raw, rawOrig, rawDir, maxToi, solid, rawCallback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawOrig.free();
    rawDir.free();
  }
  /**
   * Gets the handle of up to one collider intersecting the given shape.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The position of the shape used for the intersection test.
   * @param shapeRot - The orientation of the shape used for the intersection test.
   * @param shape - The shape used for the intersection test.
   * @param groups - The bit groups and filter associated to the ray, in order to only
   *   hit the colliders with collision groups compatible with the ray's group.
   */
  intersectionWithShape(bodies, colliders, shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawShape = shape.intoRaw();
    let result = this.raw.intersectionWithShape(bodies.raw, colliders.raw, rawPos, rawRot, rawShape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPos.free();
    rawRot.free();
    rawShape.free();
    return result;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPoint(bodies, colliders, point, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointColliderProjection.fromRaw(colliders, this.raw.projectPoint(bodies.raw, colliders.raw, rawPoint, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPoint.free();
    return result;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point to project.
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPointAndGetFeature(bodies, colliders, point, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointColliderProjection.fromRaw(colliders, this.raw.projectPointAndGetFeature(bodies.raw, colliders.raw, rawPoint, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPoint.free();
    return result;
  }
  /**
   * Find all the colliders containing the given point.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param point - The point used for the containment test.
   * @param groups - The bit groups and filter associated to the point to test, in order to only
   *   test on colliders with collision groups compatible with the ray's group.
   * @param callback - A function called with the handles of each collider with a shape
   *   containing the `point`.
   */
  intersectionsWithPoint(bodies, colliders, point, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPoint = VectorOps.intoRaw(point);
    this.raw.intersectionsWithPoint(bodies.raw, colliders.raw, rawPoint, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPoint.free();
  }
  /**
   * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
   * This is similar to ray-casting except that we are casting a whole shape instead of
   * just a point (the ray origin).
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The initial position of the shape to cast.
   * @param shapeRot - The initial rotation of the shape to cast.
   * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
   * @param shape - The shape to cast.
   * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
   *                       will be returned.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @param groups - The bit groups and filter associated to the shape to cast, in order to only
   *   test on colliders with collision groups compatible with this group.
   */
  castShape(bodies, colliders, shapePos, shapeRot, shapeVel, shape, targetDistance, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawVel = VectorOps.intoRaw(shapeVel);
    let rawShape = shape.intoRaw();
    let result = ColliderShapeCastHit.fromRaw(colliders, this.raw.castShape(bodies.raw, colliders.raw, rawPos, rawRot, rawVel, rawShape, targetDistance, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate));
    rawPos.free();
    rawRot.free();
    rawVel.free();
    rawShape.free();
    return result;
  }
  /**
   * Retrieve all the colliders intersecting the given shape.
   *
   * @param colliders - The set of colliders taking part in this pipeline.
   * @param shapePos - The position of the shape to test.
   * @param shapeRot - The orientation of the shape to test.
   * @param shape - The shape to test.
   * @param groups - The bit groups and filter associated to the shape to test, in order to only
   *   test on colliders with collision groups compatible with this group.
   * @param callback - A function called with the handles of each collider intersecting the `shape`.
   */
  intersectionsWithShape(bodies, colliders, shapePos, shapeRot, shape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let rawPos = VectorOps.intoRaw(shapePos);
    let rawRot = RotationOps.intoRaw(shapeRot);
    let rawShape = shape.intoRaw();
    this.raw.intersectionsWithShape(bodies.raw, colliders.raw, rawPos, rawRot, rawShape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate);
    rawPos.free();
    rawRot.free();
    rawShape.free();
  }
  /**
   * Finds the handles of all the colliders with an AABB intersecting the given AABB.
   *
   * @param aabbCenter - The center of the AABB to test.
   * @param aabbHalfExtents - The half-extents of the AABB to test.
   * @param callback - The callback that will be called with the handles of all the colliders
   *                   currently intersecting the given AABB.
   */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    let rawCenter = VectorOps.intoRaw(aabbCenter);
    let rawHalfExtents = VectorOps.intoRaw(aabbHalfExtents);
    this.raw.collidersWithAabbIntersectingAabb(rawCenter, rawHalfExtents, callback);
    rawCenter.free();
    rawHalfExtents.free();
  }
};

// ../node_modules/@dimforge/rapier2d/pipeline/serialization_pipeline.js
var SerializationPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawSerializationPipeline();
  }
  /**
   * Release the WASM memory occupied by this serialization pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Serialize a complete physics state into a single byte array.
   * @param gravity - The current gravity affecting the simulation.
   * @param integrationParameters - The integration parameters of the simulation.
   * @param broadPhase - The broad-phase of the simulation.
   * @param narrowPhase - The narrow-phase of the simulation.
   * @param bodies - The rigid-bodies taking part into the simulation.
   * @param colliders - The colliders taking part into the simulation.
   * @param impulseJoints - The impulse joints taking part into the simulation.
   * @param multibodyJoints - The multibody joints taking part into the simulation.
   */
  serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulseJoints, multibodyJoints) {
    let rawGra = VectorOps.intoRaw(gravity);
    const res = this.raw.serializeAll(rawGra, integrationParameters.raw, islands.raw, broadPhase.raw, narrowPhase.raw, bodies.raw, colliders.raw, impulseJoints.raw, multibodyJoints.raw);
    rawGra.free();
    return res;
  }
  /**
   * Deserialize the complete physics state from a single byte array.
   *
   * @param data - The byte array to deserialize.
   */
  deserializeAll(data) {
    return World.fromRaw(this.raw.deserializeAll(data));
  }
};

// ../node_modules/@dimforge/rapier2d/pipeline/debug_render_pipeline.js
var DebugRenderBuffers = class {
  constructor(vertices, colors) {
    this.vertices = vertices;
    this.colors = colors;
  }
};
var DebugRenderPipeline = class {
  constructor(raw) {
    this.raw = raw || new RawDebugRenderPipeline();
  }
  /**
   * Release the WASM memory occupied by this serialization pipeline.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    this.vertices = void 0;
    this.colors = void 0;
  }
  render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
    this.raw.render(bodies.raw, colliders.raw, impulse_joints.raw, multibody_joints.raw, narrow_phase.raw);
    this.vertices = this.raw.vertices();
    this.colors = this.raw.colors();
  }
};

// ../node_modules/@dimforge/rapier2d/control/character_controller.js
var CharacterCollision = class {
};
var KinematicCharacterController = class {
  constructor(offset, params, bodies, colliders, queries) {
    this.params = params;
    this.bodies = bodies;
    this.colliders = colliders;
    this.queries = queries;
    this.raw = new RawKinematicCharacterController(offset);
    this.rawCharacterCollision = new RawCharacterCollision();
    this._applyImpulsesToDynamicBodies = false;
    this._characterMass = null;
  }
  /** @internal */
  free() {
    if (!!this.raw) {
      this.raw.free();
      this.rawCharacterCollision.free();
    }
    this.raw = void 0;
    this.rawCharacterCollision = void 0;
  }
  /**
   * The direction that goes "up". Used to determine where the floor is, and the floor’s angle.
   */
  up() {
    return this.raw.up();
  }
  /**
   * Sets the direction that goes "up". Used to determine where the floor is, and the floor’s angle.
   */
  setUp(vector) {
    let rawVect = VectorOps.intoRaw(vector);
    return this.raw.setUp(rawVect);
    rawVect.free();
  }
  applyImpulsesToDynamicBodies() {
    return this._applyImpulsesToDynamicBodies;
  }
  setApplyImpulsesToDynamicBodies(enabled) {
    this._applyImpulsesToDynamicBodies = enabled;
  }
  /**
   * Returns the custom value of the character mass, if it was set by `this.setCharacterMass`.
   */
  characterMass() {
    return this._characterMass;
  }
  /**
   * Set the mass of the character to be used for impulse resolution if `self.applyImpulsesToDynamicBodies`
   * is set to `true`.
   *
   * If no character mass is set explicitly (or if it is set to `null`) it is automatically assumed to be equal
   * to the mass of the rigid-body the character collider is attached to; or equal to 0 if the character collider
   * isn’t attached to any rigid-body.
   *
   * @param mass - The mass to set.
   */
  setCharacterMass(mass) {
    this._characterMass = mass;
  }
  /**
   * A small gap to preserve between the character and its surroundings.
   *
   * This value should not be too large to avoid visual artifacts, but shouldn’t be too small
   * (must not be zero) to improve numerical stability of the character controller.
   */
  offset() {
    return this.raw.offset();
  }
  /**
   * Sets a small gap to preserve between the character and its surroundings.
   *
   * This value should not be too large to avoid visual artifacts, but shouldn’t be too small
   * (must not be zero) to improve numerical stability of the character controller.
   */
  setOffset(value) {
    this.raw.setOffset(value);
  }
  /// Increase this number if your character appears to get stuck when sliding against surfaces.
  ///
  /// This is a small distance applied to the movement toward the contact normals of shapes hit
  /// by the character controller. This helps shape-casting not getting stuck in an always-penetrating
  /// state during the sliding calculation.
  ///
  /// This value should remain fairly small since it can introduce artificial "bumps" when sliding
  /// along a flat surface.
  normalNudgeFactor() {
    return this.raw.normalNudgeFactor();
  }
  /// Increase this number if your character appears to get stuck when sliding against surfaces.
  ///
  /// This is a small distance applied to the movement toward the contact normals of shapes hit
  /// by the character controller. This helps shape-casting not getting stuck in an always-penetrating
  /// state during the sliding calculation.
  ///
  /// This value should remain fairly small since it can introduce artificial "bumps" when sliding
  /// along a flat surface.
  setNormalNudgeFactor(value) {
    this.raw.setNormalNudgeFactor(value);
  }
  /**
   * Is sliding against obstacles enabled?
   */
  slideEnabled() {
    return this.raw.slideEnabled();
  }
  /**
   * Enable or disable sliding against obstacles.
   */
  setSlideEnabled(enabled) {
    this.raw.setSlideEnabled(enabled);
  }
  /**
   * The maximum step height a character can automatically step over.
   */
  autostepMaxHeight() {
    return this.raw.autostepMaxHeight();
  }
  /**
   * The minimum width of free space that must be available after stepping on a stair.
   */
  autostepMinWidth() {
    return this.raw.autostepMinWidth();
  }
  /**
   * Can the character automatically step over dynamic bodies too?
   */
  autostepIncludesDynamicBodies() {
    return this.raw.autostepIncludesDynamicBodies();
  }
  /**
   * Is automatically stepping over small objects enabled?
   */
  autostepEnabled() {
    return this.raw.autostepEnabled();
  }
  /**
   * Enabled automatically stepping over small objects.
   *
   * @param maxHeight - The maximum step height a character can automatically step over.
   * @param minWidth - The minimum width of free space that must be available after stepping on a stair.
   * @param includeDynamicBodies - Can the character automatically step over dynamic bodies too?
   */
  enableAutostep(maxHeight, minWidth, includeDynamicBodies) {
    this.raw.enableAutostep(maxHeight, minWidth, includeDynamicBodies);
  }
  /**
   * Disable automatically stepping over small objects.
   */
  disableAutostep() {
    return this.raw.disableAutostep();
  }
  /**
   * The maximum angle (radians) between the floor’s normal and the `up` vector that the
   * character is able to climb.
   */
  maxSlopeClimbAngle() {
    return this.raw.maxSlopeClimbAngle();
  }
  /**
   * Sets the maximum angle (radians) between the floor’s normal and the `up` vector that the
   * character is able to climb.
   */
  setMaxSlopeClimbAngle(angle) {
    this.raw.setMaxSlopeClimbAngle(angle);
  }
  /**
   * The minimum angle (radians) between the floor’s normal and the `up` vector before the
   * character starts to slide down automatically.
   */
  minSlopeSlideAngle() {
    return this.raw.minSlopeSlideAngle();
  }
  /**
   * Sets the minimum angle (radians) between the floor’s normal and the `up` vector before the
   * character starts to slide down automatically.
   */
  setMinSlopeSlideAngle(angle) {
    this.raw.setMinSlopeSlideAngle(angle);
  }
  /**
   * If snap-to-ground is enabled, should the character be automatically snapped to the ground if
   * the distance between the ground and its feet are smaller than the specified threshold?
   */
  snapToGroundDistance() {
    return this.raw.snapToGroundDistance();
  }
  /**
   * Enables automatically snapping the character to the ground if the distance between
   * the ground and its feet are smaller than the specified threshold.
   */
  enableSnapToGround(distance) {
    this.raw.enableSnapToGround(distance);
  }
  /**
   * Disables automatically snapping the character to the ground.
   */
  disableSnapToGround() {
    this.raw.disableSnapToGround();
  }
  /**
   * Is automatically snapping the character to the ground enabled?
   */
  snapToGroundEnabled() {
    return this.raw.snapToGroundEnabled();
  }
  /**
   * Computes the movement the given collider is able to execute after hitting and sliding on obstacles.
   *
   * @param collider - The collider to move.
   * @param desiredTranslationDelta - The desired collider movement.
   * @param filterFlags - Flags for excluding whole subsets of colliders from the obstacles taken into account.
   * @param filterGroups - Groups for excluding colliders with incompatible collision groups from the obstacles
   *                       taken into account.
   * @param filterPredicate - Any collider for which this closure returns `false` will be excluded from the
   *                          obstacles taken into account.
   */
  computeColliderMovement(collider, desiredTranslationDelta, filterFlags, filterGroups, filterPredicate) {
    let rawTranslationDelta = VectorOps.intoRaw(desiredTranslationDelta);
    this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, collider.handle, rawTranslationDelta, this._applyImpulsesToDynamicBodies, this._characterMass, filterFlags, filterGroups, this.colliders.castClosure(filterPredicate));
    rawTranslationDelta.free();
  }
  /**
   * The movement computed by the last call to `this.computeColliderMovement`.
   */
  computedMovement() {
    return VectorOps.fromRaw(this.raw.computedMovement());
  }
  /**
   * The result of ground detection computed by the last call to `this.computeColliderMovement`.
   */
  computedGrounded() {
    return this.raw.computedGrounded();
  }
  /**
   * The number of collisions against obstacles detected along the path of the last call
   * to `this.computeColliderMovement`.
   */
  numComputedCollisions() {
    return this.raw.numComputedCollisions();
  }
  /**
   * Returns the collision against one of the obstacles detected along the path of the last
   * call to `this.computeColliderMovement`.
   *
   * @param i - The i-th collision will be returned.
   * @param out - If this argument is set, it will be filled with the collision information.
   */
  computedCollision(i, out) {
    if (!this.raw.computedCollision(i, this.rawCharacterCollision)) {
      return null;
    } else {
      let c = this.rawCharacterCollision;
      out = out !== null && out !== void 0 ? out : new CharacterCollision();
      out.translationDeltaApplied = VectorOps.fromRaw(c.translationDeltaApplied());
      out.translationDeltaRemaining = VectorOps.fromRaw(c.translationDeltaRemaining());
      out.toi = c.toi();
      out.witness1 = VectorOps.fromRaw(c.worldWitness1());
      out.witness2 = VectorOps.fromRaw(c.worldWitness2());
      out.normal1 = VectorOps.fromRaw(c.worldNormal1());
      out.normal2 = VectorOps.fromRaw(c.worldNormal2());
      out.collider = this.colliders.get(c.handle());
      return out;
    }
  }
};

// ../node_modules/@dimforge/rapier2d/pipeline/world.js
var World = class _World {
  constructor(gravity, rawIntegrationParameters, rawIslands, rawBroadPhase, rawNarrowPhase, rawBodies, rawColliders, rawImpulseJoints, rawMultibodyJoints, rawCCDSolver, rawQueryPipeline, rawPhysicsPipeline, rawSerializationPipeline, rawDebugRenderPipeline) {
    this.gravity = gravity;
    this.integrationParameters = new IntegrationParameters(rawIntegrationParameters);
    this.islands = new IslandManager(rawIslands);
    this.broadPhase = new BroadPhase(rawBroadPhase);
    this.narrowPhase = new NarrowPhase(rawNarrowPhase);
    this.bodies = new RigidBodySet(rawBodies);
    this.colliders = new ColliderSet(rawColliders);
    this.impulseJoints = new ImpulseJointSet(rawImpulseJoints);
    this.multibodyJoints = new MultibodyJointSet(rawMultibodyJoints);
    this.ccdSolver = new CCDSolver(rawCCDSolver);
    this.queryPipeline = new QueryPipeline(rawQueryPipeline);
    this.physicsPipeline = new PhysicsPipeline(rawPhysicsPipeline);
    this.serializationPipeline = new SerializationPipeline(rawSerializationPipeline);
    this.debugRenderPipeline = new DebugRenderPipeline(rawDebugRenderPipeline);
    this.characterControllers = /* @__PURE__ */ new Set();
    this.impulseJoints.finalizeDeserialization(this.bodies);
    this.bodies.finalizeDeserialization(this.colliders);
    this.colliders.finalizeDeserialization(this.bodies);
  }
  /**
   * Release the WASM memory occupied by this physics world.
   *
   * All the fields of this physics world will be freed as well,
   * so there is no need to call their `.free()` methods individually.
   */
  free() {
    this.integrationParameters.free();
    this.islands.free();
    this.broadPhase.free();
    this.narrowPhase.free();
    this.bodies.free();
    this.colliders.free();
    this.impulseJoints.free();
    this.multibodyJoints.free();
    this.ccdSolver.free();
    this.queryPipeline.free();
    this.physicsPipeline.free();
    this.serializationPipeline.free();
    this.debugRenderPipeline.free();
    this.characterControllers.forEach((controller) => controller.free());
    this.integrationParameters = void 0;
    this.islands = void 0;
    this.broadPhase = void 0;
    this.narrowPhase = void 0;
    this.bodies = void 0;
    this.colliders = void 0;
    this.ccdSolver = void 0;
    this.impulseJoints = void 0;
    this.multibodyJoints = void 0;
    this.queryPipeline = void 0;
    this.physicsPipeline = void 0;
    this.serializationPipeline = void 0;
    this.debugRenderPipeline = void 0;
    this.characterControllers = void 0;
  }
  static fromRaw(raw) {
    if (!raw)
      return null;
    return new _World(VectorOps.fromRaw(raw.takeGravity()), raw.takeIntegrationParameters(), raw.takeIslandManager(), raw.takeBroadPhase(), raw.takeNarrowPhase(), raw.takeBodies(), raw.takeColliders(), raw.takeImpulseJoints(), raw.takeMultibodyJoints());
  }
  /**
   * Takes a snapshot of this world.
   *
   * Use `World.restoreSnapshot` to create a new physics world with a state identical to
   * the state when `.takeSnapshot()` is called.
   */
  takeSnapshot() {
    return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  /**
   * Creates a new physics world from a snapshot.
   *
   * This new physics world will be an identical copy of the snapshoted physics world.
   */
  static restoreSnapshot(data) {
    let deser = new SerializationPipeline();
    return deser.deserializeAll(data);
  }
  /**
   * Computes all the lines (and their colors) needed to render the scene.
   */
  debugRender() {
    this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase);
    return new DebugRenderBuffers(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
  }
  /**
   * Advance the simulation by one time step.
   *
   * All events generated by the physics engine are ignored.
   *
   * @param EventQueue - (optional) structure responsible for collecting
   *   events generated by the physics engine.
   */
  step(eventQueue, hooks) {
    this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, eventQueue, hooks);
    this.queryPipeline.update(this.bodies, this.colliders);
  }
  /**
   * Update colliders positions after rigid-bodies moved.
   *
   * When a rigid-body moves, the positions of the colliders attached to it need to be updated. This update is
   * generally automatically done at the beginning and the end of each simulation step with World.step.
   * If the positions need to be updated without running a simulation step this method can be called manually.
   */
  propagateModifiedBodyPositionsToColliders() {
    this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
  }
  /**
   * Ensure subsequent scene queries take into account the collider positions set before this method is called.
   *
   * This does not step the physics simulation forward.
   */
  updateSceneQueries() {
    this.propagateModifiedBodyPositionsToColliders();
    this.queryPipeline.update(this.bodies, this.colliders);
  }
  /**
   * The current simulation timestep.
   */
  get timestep() {
    return this.integrationParameters.dt;
  }
  /**
   * Sets the new simulation timestep.
   *
   * The simulation timestep governs by how much the physics state of the world will
   * be integrated. A simulation timestep should:
   * - be as small as possible. Typical values evolve around 0.016 (assuming the chosen unit is milliseconds,
   * corresponds to the time between two frames of a game running at 60FPS).
   * - not vary too much during the course of the simulation. A timestep with large variations may
   * cause instabilities in the simulation.
   *
   * @param dt - The timestep length, in seconds.
   */
  set timestep(dt) {
    this.integrationParameters.dt = dt;
  }
  /**
   * The approximate size of most dynamic objects in the scene.
   *
   * See the documentation of the `World.lengthUnit` setter for further details.
   */
  get lengthUnit() {
    return this.integrationParameters.lengthUnit;
  }
  /**
   * The approximate size of most dynamic objects in the scene.
   *
   * This value is used internally to estimate some length-based tolerance. In particular, the
   * values `IntegrationParameters.allowedLinearError`,
   * `IntegrationParameters.maxPenetrationCorrection`,
   * `IntegrationParameters.predictionDistance`, `RigidBodyActivation.linearThreshold`
   * are scaled by this value implicitly.
   *
   * This value can be understood as the number of units-per-meter in your physical world compared
   * to a human-sized world in meter. For example, in a 2d game, if your typical object size is 100
   * pixels, set the `[`Self::length_unit`]` parameter to 100.0. The physics engine will interpret
   * it as if 100 pixels is equivalent to 1 meter in its various internal threshold.
   * (default `1.0`).
   */
  set lengthUnit(unitsPerMeter) {
    this.integrationParameters.lengthUnit = unitsPerMeter;
  }
  /**
   * The number of solver iterations run by the constraints solver for calculating forces (default: `4`).
   */
  get numSolverIterations() {
    return this.integrationParameters.numSolverIterations;
  }
  /**
   * Sets the number of solver iterations run by the constraints solver for calculating forces (default: `4`).
   *
   * The greater this value is, the most rigid and realistic the physics simulation will be.
   * However a greater number of iterations is more computationally intensive.
   *
   * @param niter - The new number of solver iterations.
   */
  set numSolverIterations(niter) {
    this.integrationParameters.numSolverIterations = niter;
  }
  /**
   * Number of addition friction resolution iteration run during the last solver sub-step (default: `4`).
   */
  get numAdditionalFrictionIterations() {
    return this.integrationParameters.numAdditionalFrictionIterations;
  }
  /**
   * Sets the number of addition friction resolution iteration run during the last solver sub-step (default: `4`).
   *
   * The greater this value is, the most realistic friction will be.
   * However a greater number of iterations is more computationally intensive.
   *
   * @param niter - The new number of additional friction iterations.
   */
  set numAdditionalFrictionIterations(niter) {
    this.integrationParameters.numAdditionalFrictionIterations = niter;
  }
  /**
   * Number of internal Project Gauss Seidel (PGS) iterations run at each solver iteration (default: `1`).
   */
  get numInternalPgsIterations() {
    return this.integrationParameters.numInternalPgsIterations;
  }
  /**
   * Sets the Number of internal Project Gauss Seidel (PGS) iterations run at each solver iteration (default: `1`).
   *
   * Increasing this parameter will improve stability of the simulation. It will have a lesser effect than
   * increasing `numSolverIterations` but is also less computationally expensive.
   *
   * @param niter - The new number of internal PGS iterations.
   */
  set numInternalPgsIterations(niter) {
    this.integrationParameters.numInternalPgsIterations = niter;
  }
  /// Configures the integration parameters to match the old PGS solver
  /// from Rapier JS version <= 0.11.
  ///
  /// This solver was slightly faster than the new one but resulted
  /// in less stable joints and worse convergence rates.
  ///
  /// This should only be used for comparison purpose or if you are
  /// experiencing problems with the new solver.
  ///
  /// NOTE: this does not affect any `RigidBody.additional_solver_iterations` that will
  ///       still create solver iterations based on the new "small-steps" PGS solver.
  switchToStandardPgsSolver() {
    this.integrationParameters.switchToStandardPgsSolver();
  }
  /// Configures the integration parameters to match the new "small-steps" PGS solver
  /// from Rapier version >= 0.12.
  ///
  /// The "small-steps" PGS solver is the default one when creating the physics world. So
  /// calling this function is generally not needed unless `World.switch_to_standard_pgs_solver`
  /// was called.
  ///
  /// This solver results in more stable joints and significantly better convergence
  /// rates but is slightly slower in its default settings.
  switchToSmallStepsPgsSolver() {
    this.integrationParameters.switchToSmallStepsPgsSolver();
  }
  /// Configures the integration parameters to match the new "small-steps" PGS solver
  /// from Rapier version >= 0.12. Warmstarting is disabled.
  ///
  /// The "small-steps" PGS solver is the default one when creating the physics world. So
  /// calling this function is generally not needed unless `World.switch_to_standard_pgs_solver`
  /// was called.
  ///
  /// This solver results in more stable joints and significantly better convergence
  /// rates but is slightly slower in its default settings.
  switchToSmallStepsPgsSolverWithoutWarmstart() {
    this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
  }
  /**
   * Creates a new rigid-body from the given rigid-body descriptor.
   *
   * @param body - The description of the rigid-body to create.
   */
  createRigidBody(body) {
    return this.bodies.createRigidBody(this.colliders, body);
  }
  /**
   * Creates a new character controller.
   *
   * @param offset - The artificial gap added between the character’s chape and its environment.
   */
  createCharacterController(offset) {
    let controller = new KinematicCharacterController(offset, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
    this.characterControllers.add(controller);
    return controller;
  }
  /**
   * Removes a character controller from this world.
   *
   * @param controller - The character controller to remove.
   */
  removeCharacterController(controller) {
    this.characterControllers.delete(controller);
    controller.free();
  }
  /**
   * Creates a new collider.
   *
   * @param desc - The description of the collider.
   * @param parent - The rigid-body this collider is attached to.
   */
  createCollider(desc, parent) {
    let parentHandle = parent ? parent.handle : void 0;
    return this.colliders.createCollider(this.bodies, desc, parentHandle);
  }
  /**
   * Creates a new impulse joint from the given joint descriptor.
   *
   * @param params - The description of the joint to create.
   * @param parent1 - The first rigid-body attached to this joint.
   * @param parent2 - The second rigid-body attached to this joint.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createImpulseJoint(params, parent1, parent2, wakeUp) {
    return this.impulseJoints.createJoint(this.bodies, params, parent1.handle, parent2.handle, wakeUp);
  }
  /**
   * Creates a new multibody joint from the given joint descriptor.
   *
   * @param params - The description of the joint to create.
   * @param parent1 - The first rigid-body attached to this joint.
   * @param parent2 - The second rigid-body attached to this joint.
   * @param wakeUp - Should the attached rigid-bodies be awakened?
   */
  createMultibodyJoint(params, parent1, parent2, wakeUp) {
    return this.multibodyJoints.createJoint(params, parent1.handle, parent2.handle, wakeUp);
  }
  /**
   * Retrieves a rigid-body from its handle.
   *
   * @param handle - The integer handle of the rigid-body to retrieve.
   */
  getRigidBody(handle) {
    return this.bodies.get(handle);
  }
  /**
   * Retrieves a collider from its handle.
   *
   * @param handle - The integer handle of the collider to retrieve.
   */
  getCollider(handle) {
    return this.colliders.get(handle);
  }
  /**
   * Retrieves an impulse joint from its handle.
   *
   * @param handle - The integer handle of the impulse joint to retrieve.
   */
  getImpulseJoint(handle) {
    return this.impulseJoints.get(handle);
  }
  /**
   * Retrieves an multibody joint from its handle.
   *
   * @param handle - The integer handle of the multibody joint to retrieve.
   */
  getMultibodyJoint(handle) {
    return this.multibodyJoints.get(handle);
  }
  /**
   * Removes the given rigid-body from this physics world.
   *
   * This will remove this rigid-body as well as all its attached colliders and joints.
   * Every other bodies touching or attached by joints to this rigid-body will be woken-up.
   *
   * @param body - The rigid-body to remove.
   */
  removeRigidBody(body) {
    if (this.bodies) {
      this.bodies.remove(body.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
    }
  }
  /**
   * Removes the given collider from this physics world.
   *
   * @param collider - The collider to remove.
   * @param wakeUp - If set to `true`, the rigid-body this collider is attached to will be awaken.
   */
  removeCollider(collider, wakeUp) {
    if (this.colliders) {
      this.colliders.remove(collider.handle, this.islands, this.bodies, wakeUp);
    }
  }
  /**
   * Removes the given impulse joint from this physics world.
   *
   * @param joint - The impulse joint to remove.
   * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
   */
  removeImpulseJoint(joint, wakeUp) {
    if (this.impulseJoints) {
      this.impulseJoints.remove(joint.handle, wakeUp);
    }
  }
  /**
   * Removes the given multibody joint from this physics world.
   *
   * @param joint - The multibody joint to remove.
   * @param wakeUp - If set to `true`, the rigid-bodies attached by this joint will be awaken.
   */
  removeMultibodyJoint(joint, wakeUp) {
    if (this.impulseJoints) {
      this.multibodyJoints.remove(joint.handle, wakeUp);
    }
  }
  /**
   * Applies the given closure to each collider managed by this physics world.
   *
   * @param f(collider) - The function to apply to each collider managed by this physics world. Called as `f(collider)`.
   */
  forEachCollider(f) {
    this.colliders.forEach(f);
  }
  /**
   * Applies the given closure to each rigid-body managed by this physics world.
   *
   * @param f(body) - The function to apply to each rigid-body managed by this physics world. Called as `f(collider)`.
   */
  forEachRigidBody(f) {
    this.bodies.forEach(f);
  }
  /**
   * Applies the given closure to each active rigid-body managed by this physics world.
   *
   * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
   * the physics engine in order to save computational power. A sleeping rigid-body never moves
   * unless it is moved manually by the user.
   *
   * @param f - The function to apply to each active rigid-body managed by this physics world. Called as `f(collider)`.
   */
  forEachActiveRigidBody(f) {
    this.bodies.forEachActiveRigidBody(this.islands, f);
  }
  /**
   * Find the closest intersection between a ray and the physics world.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param filter - The callback to filter out which collider will be hit.
   */
  castRay(ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castRay(this.bodies, this.colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find the closest intersection between a ray and the physics world.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   */
  castRayAndGetNormal(ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, ray, maxToi, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Cast a ray and collects all the intersections between a ray and the scene.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @param groups - Used to filter the colliders that can or cannot be hit by the ray.
   * @param callback - The callback called once per hit (in no particular order) between a ray and a collider.
   *   If this callback returns `false`, then the cast will stop and no further hits will be detected/reported.
   */
  intersectionsWithRay(ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, ray, maxToi, solid, callback, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Gets the handle of up to one collider intersecting the given shape.
   *
   * @param shapePos - The position of the shape used for the intersection test.
   * @param shapeRot - The orientation of the shape used for the intersection test.
   * @param shape - The shape used for the intersection test.
   * @param groups - The bit groups and filter associated to the ray, in order to only
   *   hit the colliders with collision groups compatible with the ray's group.
   */
  intersectionWithShape(shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    let handle = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, shapePos, shapeRot, shape, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
    return handle != null ? this.colliders.get(handle) : null;
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPoint(point, solid, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.projectPoint(this.bodies, this.colliders, point, solid, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find the projection of a point on the closest collider.
   *
   * @param point - The point to project.
   * @param groups - The bit groups and filter associated to the point to project, in order to only
   *   project on colliders with collision groups compatible with the ray's group.
   */
  projectPointAndGetFeature(point, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, point, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Find all the colliders containing the given point.
   *
   * @param point - The point used for the containment test.
   * @param groups - The bit groups and filter associated to the point to test, in order to only
   *   test on colliders with collision groups compatible with the ray's group.
   * @param callback - A function called with the handles of each collider with a shape
   *   containing the `point`.
   */
  intersectionsWithPoint(point, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, point, this.colliders.castClosure(callback), filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Casts a shape at a constant linear velocity and retrieve the first collider it hits.
   * This is similar to ray-casting except that we are casting a whole shape instead of
   * just a point (the ray origin).
   *
   * @param shapePos - The initial position of the shape to cast.
   * @param shapeRot - The initial rotation of the shape to cast.
   * @param shapeVel - The constant velocity of the shape to cast (i.e. the cast direction).
   * @param shape - The shape to cast.
   * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
   *                         will be returned.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   * @param groups - The bit groups and filter associated to the shape to cast, in order to only
   *   test on colliders with collision groups compatible with this group.
   */
  castShape(shapePos, shapeRot, shapeVel, shape, targetDistance, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    return this.queryPipeline.castShape(this.bodies, this.colliders, shapePos, shapeRot, shapeVel, shape, targetDistance, maxToi, stopAtPenetration, filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Retrieve all the colliders intersecting the given shape.
   *
   * @param shapePos - The position of the shape to test.
   * @param shapeRot - The orientation of the shape to test.
   * @param shape - The shape to test.
   * @param groups - The bit groups and filter associated to the shape to test, in order to only
   *   test on colliders with collision groups compatible with this group.
   * @param callback - A function called with the handles of each collider intersecting the `shape`.
   */
  intersectionsWithShape(shapePos, shapeRot, shape, callback, filterFlags, filterGroups, filterExcludeCollider, filterExcludeRigidBody, filterPredicate) {
    this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, shapePos, shapeRot, shape, this.colliders.castClosure(callback), filterFlags, filterGroups, filterExcludeCollider ? filterExcludeCollider.handle : null, filterExcludeRigidBody ? filterExcludeRigidBody.handle : null, this.colliders.castClosure(filterPredicate));
  }
  /**
   * Finds the handles of all the colliders with an AABB intersecting the given AABB.
   *
   * @param aabbCenter - The center of the AABB to test.
   * @param aabbHalfExtents - The half-extents of the AABB to test.
   * @param callback - The callback that will be called with the handles of all the colliders
   *                   currently intersecting the given AABB.
   */
  collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
    this.queryPipeline.collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, this.colliders.castClosure(callback));
  }
  /**
   * Enumerates all the colliders potentially in contact with the given collider.
   *
   * @param collider1 - The second collider involved in the contact.
   * @param f - Closure that will be called on each collider that is in contact with `collider1`.
   */
  contactPairsWith(collider1, f) {
    this.narrowPhase.contactPairsWith(collider1.handle, this.colliders.castClosure(f));
  }
  /**
   * Enumerates all the colliders intersecting the given colliders, assuming one of them
   * is a sensor.
   */
  intersectionPairsWith(collider1, f) {
    this.narrowPhase.intersectionPairsWith(collider1.handle, this.colliders.castClosure(f));
  }
  /**
   * Iterates through all the contact manifolds between the given pair of colliders.
   *
   * @param collider1 - The first collider involved in the contact.
   * @param collider2 - The second collider involved in the contact.
   * @param f - Closure that will be called on each contact manifold between the two colliders. If the second argument
   *            passed to this closure is `true`, then the contact manifold data is flipped, i.e., methods like `localNormal1`
   *            actually apply to the `collider2` and fields like `localNormal2` apply to the `collider1`.
   */
  contactPair(collider1, collider2, f) {
    this.narrowPhase.contactPair(collider1.handle, collider2.handle, f);
  }
  /**
   * Returns `true` if `collider1` and `collider2` intersect and at least one of them is a sensor.
   * @param collider1 − The first collider involved in the intersection.
   * @param collider2 − The second collider involved in the intersection.
   */
  intersectionPair(collider1, collider2) {
    return this.narrowPhase.intersectionPair(collider1.handle, collider2.handle);
  }
};

// ../node_modules/@dimforge/rapier2d/pipeline/event_queue.js
var ActiveEvents;
(function(ActiveEvents2) {
  ActiveEvents2[ActiveEvents2["NONE"] = 0] = "NONE";
  ActiveEvents2[ActiveEvents2["COLLISION_EVENTS"] = 1] = "COLLISION_EVENTS";
  ActiveEvents2[ActiveEvents2["CONTACT_FORCE_EVENTS"] = 2] = "CONTACT_FORCE_EVENTS";
})(ActiveEvents || (ActiveEvents = {}));
var TempContactForceEvent = class {
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * The first collider involved in the contact.
   */
  collider1() {
    return this.raw.collider1();
  }
  /**
   * The second collider involved in the contact.
   */
  collider2() {
    return this.raw.collider2();
  }
  /**
   * The sum of all the forces between the two colliders.
   */
  totalForce() {
    return VectorOps.fromRaw(this.raw.total_force());
  }
  /**
   * The sum of the magnitudes of each force between the two colliders.
   *
   * Note that this is **not** the same as the magnitude of `self.total_force`.
   * Here we are summing the magnitude of all the forces, instead of taking
   * the magnitude of their sum.
   */
  totalForceMagnitude() {
    return this.raw.total_force_magnitude();
  }
  /**
   * The world-space (unit) direction of the force with strongest magnitude.
   */
  maxForceDirection() {
    return VectorOps.fromRaw(this.raw.max_force_direction());
  }
  /**
   * The magnitude of the largest force at a contact point of this contact pair.
   */
  maxForceMagnitude() {
    return this.raw.max_force_magnitude();
  }
};
var EventQueue = class {
  /**
   * Creates a new event collector.
   *
   * @param autoDrain -setting this to `true` is strongly recommended. If true, the collector will
   * be automatically drained before each `world.step(collector)`. If false, the collector will
   * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
   * RAM if no drain is performed.
   */
  constructor(autoDrain, raw) {
    this.raw = raw || new RawEventQueue(autoDrain);
  }
  /**
   * Release the WASM memory occupied by this event-queue.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
  }
  /**
   * Applies the given javascript closure on each collision event of this collector, then clear
   * the internal collision event buffer.
   *
   * @param f - JavaScript closure applied to each collision event. The
   * closure must take three arguments: two integers representing the handles of the colliders
   * involved in the collision, and a boolean indicating if the collision started (true) or stopped
   * (false).
   */
  drainCollisionEvents(f) {
    this.raw.drainCollisionEvents(f);
  }
  /**
   * Applies the given javascript closure on each contact force event of this collector, then clear
   * the internal collision event buffer.
   *
   * @param f - JavaScript closure applied to each collision event. The
   *            closure must take one `TempContactForceEvent` argument.
   */
  drainContactForceEvents(f) {
    let event = new TempContactForceEvent();
    this.raw.drainContactForceEvents((raw) => {
      event.raw = raw;
      f(event);
      event.free();
    });
  }
  /**
   * Removes all events contained by this collector
   */
  clear() {
    this.raw.clear();
  }
};

// ../node_modules/@dimforge/rapier2d/pipeline/physics_hooks.js
var ActiveHooks;
(function(ActiveHooks2) {
  ActiveHooks2[ActiveHooks2["NONE"] = 0] = "NONE";
  ActiveHooks2[ActiveHooks2["FILTER_CONTACT_PAIRS"] = 1] = "FILTER_CONTACT_PAIRS";
  ActiveHooks2[ActiveHooks2["FILTER_INTERSECTION_PAIRS"] = 2] = "FILTER_INTERSECTION_PAIRS";
})(ActiveHooks || (ActiveHooks = {}));
var SolverFlags;
(function(SolverFlags2) {
  SolverFlags2[SolverFlags2["EMPTY"] = 0] = "EMPTY";
  SolverFlags2[SolverFlags2["COMPUTE_IMPULSE"] = 1] = "COMPUTE_IMPULSE";
})(SolverFlags || (SolverFlags = {}));

// ../node_modules/@dimforge/rapier2d/geometry/collider.js
var ActiveCollisionTypes;
(function(ActiveCollisionTypes2) {
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_DYNAMIC"] = 1] = "DYNAMIC_DYNAMIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_KINEMATIC"] = 12] = "DYNAMIC_KINEMATIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DYNAMIC_FIXED"] = 2] = "DYNAMIC_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["KINEMATIC_KINEMATIC"] = 52224] = "KINEMATIC_KINEMATIC";
  ActiveCollisionTypes2[ActiveCollisionTypes2["KINEMATIC_FIXED"] = 8704] = "KINEMATIC_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["FIXED_FIXED"] = 32] = "FIXED_FIXED";
  ActiveCollisionTypes2[ActiveCollisionTypes2["DEFAULT"] = 15] = "DEFAULT";
  ActiveCollisionTypes2[ActiveCollisionTypes2["ALL"] = 60943] = "ALL";
})(ActiveCollisionTypes || (ActiveCollisionTypes = {}));
var Collider = class {
  constructor(colliderSet, handle, parent, shape) {
    this.colliderSet = colliderSet;
    this.handle = handle;
    this._parent = parent;
    this._shape = shape;
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    if (this.handle != null) {
      this._parent = bodies.get(this.colliderSet.raw.coParent(this.handle));
    }
  }
  ensureShapeIsCached() {
    if (!this._shape)
      this._shape = Shape.fromRaw(this.colliderSet.raw, this.handle);
  }
  /**
   * The shape of this collider.
   */
  get shape() {
    this.ensureShapeIsCached();
    return this._shape;
  }
  /**
   * Checks if this collider is still valid (i.e. that it has
   * not been deleted from the collider set yet).
   */
  isValid() {
    return this.colliderSet.raw.contains(this.handle);
  }
  /**
   * The world-space translation of this rigid-body.
   */
  translation() {
    return VectorOps.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
  }
  /**
   * The world-space orientation of this rigid-body.
   */
  rotation() {
    return RotationOps.fromRaw(this.colliderSet.raw.coRotation(this.handle));
  }
  /**
   * Is this collider a sensor?
   */
  isSensor() {
    return this.colliderSet.raw.coIsSensor(this.handle);
  }
  /**
   * Sets whether or not this collider is a sensor.
   * @param isSensor - If `true`, the collider will be a sensor.
   */
  setSensor(isSensor) {
    this.colliderSet.raw.coSetSensor(this.handle, isSensor);
  }
  /**
   * Sets the new shape of the collider.
   * @param shape - The collider’s new shape.
   */
  setShape(shape) {
    let rawShape = shape.intoRaw();
    this.colliderSet.raw.coSetShape(this.handle, rawShape);
    rawShape.free();
    this._shape = shape;
  }
  /**
   * Sets whether this collider is enabled or not.
   *
   * @param enabled - Set to `false` to disable this collider (its parent rigid-body won’t be disabled automatically by this).
   */
  setEnabled(enabled) {
    this.colliderSet.raw.coSetEnabled(this.handle, enabled);
  }
  /**
   * Is this collider enabled?
   */
  isEnabled() {
    return this.colliderSet.raw.coIsEnabled(this.handle);
  }
  /**
   * Sets the restitution coefficient of the collider to be created.
   *
   * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
   *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
   *                   constraints solver).
   */
  setRestitution(restitution) {
    this.colliderSet.raw.coSetRestitution(this.handle, restitution);
  }
  /**
   * Sets the friction coefficient of the collider to be created.
   *
   * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
   *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
   *                   being built.
   */
  setFriction(friction) {
    this.colliderSet.raw.coSetFriction(this.handle, friction);
  }
  /**
   * Gets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   */
  frictionCombineRule() {
    return this.colliderSet.raw.coFrictionCombineRule(this.handle);
  }
  /**
   * Sets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setFrictionCombineRule(rule) {
    this.colliderSet.raw.coSetFrictionCombineRule(this.handle, rule);
  }
  /**
   * Gets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   */
  restitutionCombineRule() {
    return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
  }
  /**
   * Sets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setRestitutionCombineRule(rule) {
    this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, rule);
  }
  /**
   * Sets the collision groups used by this collider.
   *
   * Two colliders will interact iff. their collision groups are compatible.
   * See the documentation of `InteractionGroups` for details on teh used bit pattern.
   *
   * @param groups - The collision groups used for the collider being built.
   */
  setCollisionGroups(groups) {
    this.colliderSet.raw.coSetCollisionGroups(this.handle, groups);
  }
  /**
   * Sets the solver groups used by this collider.
   *
   * Forces between two colliders in contact will be computed iff their solver
   * groups are compatible.
   * See the documentation of `InteractionGroups` for details on the used bit pattern.
   *
   * @param groups - The solver groups used for the collider being built.
   */
  setSolverGroups(groups) {
    this.colliderSet.raw.coSetSolverGroups(this.handle, groups);
  }
  /**
   * Sets the contact skin for this collider.
   *
   * See the documentation of `ColliderDesc.setContactSkin` for additional details.
   */
  contactSkin() {
    return this.colliderSet.raw.coContactSkin(this.handle);
  }
  /**
   * Sets the contact skin for this collider.
   *
   * See the documentation of `ColliderDesc.setContactSkin` for additional details.
   *
   * @param thickness - The contact skin thickness.
   */
  setContactSkin(thickness) {
    return this.colliderSet.raw.coSetContactSkin(this.handle, thickness);
  }
  /**
   * Get the physics hooks active for this collider.
   */
  activeHooks() {
    return this.colliderSet.raw.coActiveHooks(this.handle);
  }
  /**
   * Set the physics hooks active for this collider.
   *
   * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
   *
   * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveHooks(activeHooks) {
    this.colliderSet.raw.coSetActiveHooks(this.handle, activeHooks);
  }
  /**
   * The events active for this collider.
   */
  activeEvents() {
    return this.colliderSet.raw.coActiveEvents(this.handle);
  }
  /**
   * Set the events active for this collider.
   *
   * Use this to enable contact and/or intersection event reporting for this collider.
   *
   * @param activeEvents - The events active for contact/intersection pairs involving this collider.
   */
  setActiveEvents(activeEvents) {
    this.colliderSet.raw.coSetActiveEvents(this.handle, activeEvents);
  }
  /**
   * Gets the collision types active for this collider.
   */
  activeCollisionTypes() {
    return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
  }
  /**
   * Sets the total force magnitude beyond which a contact force event can be emitted.
   *
   * @param threshold - The new force threshold.
   */
  setContactForceEventThreshold(threshold) {
    return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, threshold);
  }
  /**
   * The total force magnitude beyond which a contact force event can be emitted.
   */
  contactForceEventThreshold() {
    return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
  }
  /**
   * Set the collision types active for this collider.
   *
   * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveCollisionTypes(activeCollisionTypes) {
    this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, activeCollisionTypes);
  }
  /**
   * Sets the uniform density of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   *
   * The mass and angular inertia of this collider will be computed automatically based on its
   * shape.
   */
  setDensity(density) {
    this.colliderSet.raw.coSetDensity(this.handle, density);
  }
  /**
   * Sets the mass of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   *
   * The angular inertia of this collider will be computed automatically based on its shape
   * and this mass value.
   */
  setMass(mass) {
    this.colliderSet.raw.coSetMass(this.handle, mass);
  }
  // #if DIM2
  /**
   * Sets the mass of this collider.
   *
   * This will override any previous mass-properties set by `this.setDensity`,
   * `this.setMass`, `this.setMassProperties`, `ColliderDesc.density`,
   * `ColliderDesc.mass`, or `ColliderDesc.massProperties` for this collider.
   */
  setMassProperties(mass, centerOfMass, principalAngularInertia) {
    let rawCom = VectorOps.intoRaw(centerOfMass);
    this.colliderSet.raw.coSetMassProperties(this.handle, mass, rawCom, principalAngularInertia);
    rawCom.free();
  }
  // #endif
  /**
   * Sets the translation of this collider.
   *
   * @param tra - The world-space position of the collider.
   */
  setTranslation(tra) {
    this.colliderSet.raw.coSetTranslation(this.handle, tra.x, tra.y);
  }
  /**
   * Sets the translation of this collider relative to its parent rigid-body.
   *
   * Does nothing if this collider isn't attached to a rigid-body.
   *
   * @param tra - The new translation of the collider relative to its parent.
   */
  setTranslationWrtParent(tra) {
    this.colliderSet.raw.coSetTranslationWrtParent(this.handle, tra.x, tra.y);
  }
  // #if DIM2
  /**
   * Sets the rotation angle of this collider.
   *
   * @param angle - The rotation angle, in radians.
   */
  setRotation(angle) {
    this.colliderSet.raw.coSetRotation(this.handle, angle);
  }
  /**
   * Sets the rotation angle of this collider relative to its parent rigid-body.
   *
   * Does nothing if this collider isn't attached to a rigid-body.
   *
   * @param angle - The rotation angle, in radians.
   */
  setRotationWrtParent(angle) {
    this.colliderSet.raw.coSetRotationWrtParent(this.handle, angle);
  }
  // #endif
  /**
   * The type of the shape of this collider.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  shapeType() {
    return this.colliderSet.raw.coShapeType(this.handle);
  }
  /**
   * The half-extents of this collider if it is a cuboid shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  halfExtents() {
    return VectorOps.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
  }
  /**
   * Sets the half-extents of this collider if it is a cuboid shape.
   *
   * @param newHalfExtents - desired half extents.
   */
  setHalfExtents(newHalfExtents) {
    const rawPoint = VectorOps.intoRaw(newHalfExtents);
    this.colliderSet.raw.coSetHalfExtents(this.handle, rawPoint);
  }
  /**
   * The radius of this collider if it is a ball, cylinder, capsule, or cone shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  radius() {
    return this.colliderSet.raw.coRadius(this.handle);
  }
  /**
   * Sets the radius of this collider if it is a ball, cylinder, capsule, or cone shape.
   *
   * @param newRadius - desired radius.
   */
  setRadius(newRadius) {
    this.colliderSet.raw.coSetRadius(this.handle, newRadius);
  }
  /**
   * The radius of the round edges of this collider if it is a round cylinder.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  roundRadius() {
    return this.colliderSet.raw.coRoundRadius(this.handle);
  }
  /**
   * Sets the radius of the round edges of this collider if it has round edges.
   *
   * @param newBorderRadius - desired round edge radius.
   */
  setRoundRadius(newBorderRadius) {
    this.colliderSet.raw.coSetRoundRadius(this.handle, newBorderRadius);
  }
  /**
   * The half height of this collider if it is a cylinder, capsule, or cone shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  halfHeight() {
    return this.colliderSet.raw.coHalfHeight(this.handle);
  }
  /**
   * Sets the half height of this collider if it is a cylinder, capsule, or cone shape.
   *
   * @param newHalfheight - desired half height.
   */
  setHalfHeight(newHalfheight) {
    this.colliderSet.raw.coSetHalfHeight(this.handle, newHalfheight);
  }
  /**
   * If this collider has a triangle mesh, polyline, convex polygon, or convex polyhedron shape,
   * this returns the vertex buffer of said shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  vertices() {
    return this.colliderSet.raw.coVertices(this.handle);
  }
  /**
   * If this collider has a triangle mesh, polyline, or convex polyhedron shape,
   * this returns the index buffer of said shape.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  indices() {
    return this.colliderSet.raw.coIndices(this.handle);
  }
  /**
   * If this collider has a heightfield shape, this returns the heights buffer of
   * the heightfield.
   * In 3D, the returned height matrix is provided in column-major order.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldHeights() {
    return this.colliderSet.raw.coHeightfieldHeights(this.handle);
  }
  /**
   * If this collider has a heightfield shape, this returns the scale
   * applied to it.
   * @deprecated this field will be removed in the future, please access this field on `shape` member instead.
   */
  heightfieldScale() {
    let scale = this.colliderSet.raw.coHeightfieldScale(this.handle);
    return VectorOps.fromRaw(scale);
  }
  /**
   * The rigid-body this collider is attached to.
   */
  parent() {
    return this._parent;
  }
  /**
   * The friction coefficient of this collider.
   */
  friction() {
    return this.colliderSet.raw.coFriction(this.handle);
  }
  /**
   * The restitution coefficient of this collider.
   */
  restitution() {
    return this.colliderSet.raw.coRestitution(this.handle);
  }
  /**
   * The density of this collider.
   */
  density() {
    return this.colliderSet.raw.coDensity(this.handle);
  }
  /**
   * The mass of this collider.
   */
  mass() {
    return this.colliderSet.raw.coMass(this.handle);
  }
  /**
   * The volume of this collider.
   */
  volume() {
    return this.colliderSet.raw.coVolume(this.handle);
  }
  /**
   * The collision groups of this collider.
   */
  collisionGroups() {
    return this.colliderSet.raw.coCollisionGroups(this.handle);
  }
  /**
   * The solver groups of this collider.
   */
  solverGroups() {
    return this.colliderSet.raw.coSolverGroups(this.handle);
  }
  /**
   * Tests if this collider contains a point.
   *
   * @param point - The point to test.
   */
  containsPoint(point) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = this.colliderSet.raw.coContainsPoint(this.handle, rawPoint);
    rawPoint.free();
    return result;
  }
  /**
   * Find the projection of a point on this collider.
   *
   * @param point - The point to project.
   * @param solid - If this is set to `true` then the collider shapes are considered to
   *   be plain (if the point is located inside of a plain shape, its projection is the point
   *   itself). If it is set to `false` the collider shapes are considered to be hollow
   *   (if the point is located inside of an hollow shape, it is projected on the shape's
   *   boundary).
   */
  projectPoint(point, solid) {
    let rawPoint = VectorOps.intoRaw(point);
    let result = PointProjection.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, rawPoint, solid));
    rawPoint.free();
    return result;
  }
  /**
   * Tests if this collider intersects the given ray.
   *
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   */
  intersectsRay(ray, maxToi) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = this.colliderSet.raw.coIntersectsRay(this.handle, rawOrig, rawDir, maxToi);
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /*
   * Computes the smallest time between this and the given shape under translational movement are separated by a distance smaller or equal to distance.
   *
   * @param collider1Vel - The constant velocity of the current shape to cast (i.e. the cast direction).
   * @param shape2 - The shape to cast against.
   * @param shape2Pos - The position of the second shape.
   * @param shape2Rot - The rotation of the second shape.
   * @param shape2Vel - The constant velocity of the second shape.
   * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
   *                         will be returned.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `collider1Vel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   */
  castShape(collider1Vel, shape2, shape2Pos, shape2Rot, shape2Vel, targetDistance, maxToi, stopAtPenetration) {
    let rawCollider1Vel = VectorOps.intoRaw(collider1Vel);
    let rawShape2Pos = VectorOps.intoRaw(shape2Pos);
    let rawShape2Rot = RotationOps.intoRaw(shape2Rot);
    let rawShape2Vel = VectorOps.intoRaw(shape2Vel);
    let rawShape2 = shape2.intoRaw();
    let result = ShapeCastHit.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, rawCollider1Vel, rawShape2, rawShape2Pos, rawShape2Rot, rawShape2Vel, targetDistance, maxToi, stopAtPenetration));
    rawCollider1Vel.free();
    rawShape2Pos.free();
    rawShape2Rot.free();
    rawShape2Vel.free();
    rawShape2.free();
    return result;
  }
  /*
   * Computes the smallest time between this and the given collider under translational movement are separated by a distance smaller or equal to distance.
   *
   * @param collider1Vel - The constant velocity of the current collider to cast (i.e. the cast direction).
   * @param collider2 - The collider to cast against.
   * @param collider2Vel - The constant velocity of the second collider.
   * @param targetDistance − If the shape moves closer to this distance from a collider, a hit
   *                         will be returned.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the distance traveled by the shape to `shapeVel.norm() * maxToi`.
   * @param stopAtPenetration - If set to `false`, the linear shape-cast won’t immediately stop if
   *   the shape is penetrating another shape at its starting point **and** its trajectory is such
   *   that it’s on a path to exist that penetration state.
   */
  castCollider(collider1Vel, collider2, collider2Vel, targetDistance, maxToi, stopAtPenetration) {
    let rawCollider1Vel = VectorOps.intoRaw(collider1Vel);
    let rawCollider2Vel = VectorOps.intoRaw(collider2Vel);
    let result = ColliderShapeCastHit.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, rawCollider1Vel, collider2.handle, rawCollider2Vel, targetDistance, maxToi, stopAtPenetration));
    rawCollider1Vel.free();
    rawCollider2Vel.free();
    return result;
  }
  intersectsShape(shape2, shapePos2, shapeRot2) {
    let rawPos2 = VectorOps.intoRaw(shapePos2);
    let rawRot2 = RotationOps.intoRaw(shapeRot2);
    let rawShape2 = shape2.intoRaw();
    let result = this.colliderSet.raw.coIntersectsShape(this.handle, rawShape2, rawPos2, rawRot2);
    rawPos2.free();
    rawRot2.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between the shape owned by this collider and the given shape.
   *
   * @param shape2 - The second shape.
   * @param shape2Pos - The initial position of the second shape.
   * @param shape2Rot - The rotation of the second shape.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactShape(shape2, shape2Pos, shape2Rot, prediction) {
    let rawPos2 = VectorOps.intoRaw(shape2Pos);
    let rawRot2 = RotationOps.intoRaw(shape2Rot);
    let rawShape2 = shape2.intoRaw();
    let result = ShapeContact.fromRaw(this.colliderSet.raw.coContactShape(this.handle, rawShape2, rawPos2, rawRot2, prediction));
    rawPos2.free();
    rawRot2.free();
    rawShape2.free();
    return result;
  }
  /**
   * Computes one pair of contact points between the collider and the given collider.
   *
   * @param collider2 - The second collider.
   * @param prediction - The prediction value, if the shapes are separated by a distance greater than this value, test will fail.
   * @returns `null` if the shapes are separated by a distance greater than prediction, otherwise contact details. The result is given in world-space.
   */
  contactCollider(collider2, prediction) {
    let result = ShapeContact.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, collider2.handle, prediction));
    return result;
  }
  /**
   * Find the closest intersection between a ray and this collider.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   * @returns The time-of-impact between this collider and the ray, or `-1` if there is no intersection.
   */
  castRay(ray, maxToi, solid) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = this.colliderSet.raw.coCastRay(this.handle, rawOrig, rawDir, maxToi, solid);
    rawOrig.free();
    rawDir.free();
    return result;
  }
  /**
   * Find the closest intersection between a ray and this collider.
   *
   * This also computes the normal at the hit point.
   * @param ray - The ray to cast.
   * @param maxToi - The maximum time-of-impact that can be reported by this cast. This effectively
   *   limits the length of the ray to `ray.dir.norm() * maxToi`.
   * @param solid - If `false` then the ray will attempt to hit the boundary of a shape, even if its
   *   origin already lies inside of a shape. In other terms, `true` implies that all shapes are plain,
   *   whereas `false` implies that all shapes are hollow for this ray-cast.
   */
  castRayAndGetNormal(ray, maxToi, solid) {
    let rawOrig = VectorOps.intoRaw(ray.origin);
    let rawDir = VectorOps.intoRaw(ray.dir);
    let result = RayIntersection.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, rawOrig, rawDir, maxToi, solid));
    rawOrig.free();
    rawDir.free();
    return result;
  }
};
var MassPropsMode;
(function(MassPropsMode2) {
  MassPropsMode2[MassPropsMode2["Density"] = 0] = "Density";
  MassPropsMode2[MassPropsMode2["Mass"] = 1] = "Mass";
  MassPropsMode2[MassPropsMode2["MassProps"] = 2] = "MassProps";
})(MassPropsMode || (MassPropsMode = {}));
var ColliderDesc = class _ColliderDesc {
  /**
   * Initializes a collider descriptor from the collision shape.
   *
   * @param shape - The shape of the collider being built.
   */
  constructor(shape) {
    this.enabled = true;
    this.shape = shape;
    this.massPropsMode = MassPropsMode.Density;
    this.density = 1;
    this.friction = 0.5;
    this.restitution = 0;
    this.rotation = RotationOps.identity();
    this.translation = VectorOps.zeros();
    this.isSensor = false;
    this.collisionGroups = 4294967295;
    this.solverGroups = 4294967295;
    this.frictionCombineRule = CoefficientCombineRule.Average;
    this.restitutionCombineRule = CoefficientCombineRule.Average;
    this.activeCollisionTypes = ActiveCollisionTypes.DEFAULT;
    this.activeEvents = ActiveEvents.NONE;
    this.activeHooks = ActiveHooks.NONE;
    this.mass = 0;
    this.centerOfMass = VectorOps.zeros();
    this.contactForceEventThreshold = 0;
    this.contactSkin = 0;
    this.principalAngularInertia = 0;
    this.rotationsEnabled = true;
  }
  /**
   * Create a new collider descriptor with a ball shape.
   *
   * @param radius - The radius of the ball.
   */
  static ball(radius) {
    const shape = new Ball(radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Create a new collider descriptor with a capsule shape.
   *
   * @param halfHeight - The half-height of the capsule, along the `y` axis.
   * @param radius - The radius of the capsule basis.
   */
  static capsule(halfHeight, radius) {
    const shape = new Capsule(halfHeight, radius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new segment shape.
   *
   * @param a - The first point of the segment.
   * @param b - The second point of the segment.
   */
  static segment(a, b) {
    const shape = new Segment(a, b);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new triangle shape.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   */
  static triangle(a, b, c) {
    const shape = new Triangle(a, b, c);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new triangle shape with round corners.
   *
   * @param a - The first point of the triangle.
   * @param b - The second point of the triangle.
   * @param c - The third point of the triangle.
   * @param borderRadius - The radius of the borders of this triangle. In 3D,
   *   this is also equal to half the thickness of the triangle.
   */
  static roundTriangle(a, b, c, borderRadius) {
    const shape = new RoundTriangle(a, b, c, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a polyline shape.
   *
   * @param vertices - The coordinates of the polyline's vertices.
   * @param indices - The indices of the polyline's segments. If this is `undefined` or `null`,
   *    the vertices are assumed to describe a line strip.
   */
  static polyline(vertices, indices) {
    const shape = new Polyline(vertices, indices);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a triangle mesh shape.
   *
   * @param vertices - The coordinates of the triangle mesh's vertices.
   * @param indices - The indices of the triangle mesh's triangles.
   */
  static trimesh(vertices, indices, flags) {
    const shape = new TriMesh(vertices, indices, flags);
    return new _ColliderDesc(shape);
  }
  // #if DIM2
  /**
   * Creates a new collider descriptor with a rectangular shape.
   *
   * @param hx - The half-width of the rectangle along its local `x` axis.
   * @param hy - The half-width of the rectangle along its local `y` axis.
   */
  static cuboid(hx, hy) {
    const shape = new Cuboid(hx, hy);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a rectangular shape with round borders.
   *
   * @param hx - The half-width of the rectangle along its local `x` axis.
   * @param hy - The half-width of the rectangle along its local `y` axis.
   * @param borderRadius - The radius of the cuboid's borders.
   */
  static roundCuboid(hx, hy, borderRadius) {
    const shape = new RoundCuboid(hx, hy, borderRadius);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider description with a halfspace (infinite plane) shape.
   *
   * @param normal - The outward normal of the plane.
   */
  static halfspace(normal) {
    const shape = new HalfSpace(normal);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor with a heightfield shape.
   *
   * @param heights - The heights of the heightfield, along its local `y` axis.
   * @param scale - The scale factor applied to the heightfield.
   */
  static heightfield(heights, scale) {
    const shape = new Heightfield(heights, scale);
    return new _ColliderDesc(shape);
  }
  /**
   * Computes the convex-hull of the given points and use the resulting
   * convex polygon as the shape for this new collider descriptor.
   *
   * @param points - The point that will be used to compute the convex-hull.
   */
  static convexHull(points) {
    const shape = new ConvexPolygon(points, false);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor that uses the given set of points assumed
   * to form a convex polyline (no convex-hull computation will be done).
   *
   * @param vertices - The vertices of the convex polyline.
   */
  static convexPolyline(vertices) {
    const shape = new ConvexPolygon(vertices, true);
    return new _ColliderDesc(shape);
  }
  /**
   * Computes the convex-hull of the given points and use the resulting
   * convex polygon as the shape for this new collider descriptor. A
   * border is added to that convex polygon to give it round corners.
   *
   * @param points - The point that will be used to compute the convex-hull.
   * @param borderRadius - The radius of the round border added to the convex polygon.
   */
  static roundConvexHull(points, borderRadius) {
    const shape = new RoundConvexPolygon(points, borderRadius, false);
    return new _ColliderDesc(shape);
  }
  /**
   * Creates a new collider descriptor that uses the given set of points assumed
   * to form a round convex polyline (no convex-hull computation will be done).
   *
   * @param vertices - The vertices of the convex polyline.
   * @param borderRadius - The radius of the round border added to the convex polyline.
   */
  static roundConvexPolyline(vertices, borderRadius) {
    const shape = new RoundConvexPolygon(vertices, borderRadius, true);
    return new _ColliderDesc(shape);
  }
  // #endif
  // #if DIM2
  /**
   * Sets the position of the collider to be created relative to the rigid-body it is attached to.
   */
  setTranslation(x, y) {
    if (typeof x != "number" || typeof y != "number")
      throw TypeError("The translation components must be numbers.");
    this.translation = { x, y };
    return this;
  }
  // #endif
  /**
   * Sets the rotation of the collider to be created relative to the rigid-body it is attached to.
   *
   * @param rot - The rotation of the collider to be created relative to the rigid-body it is attached to.
   */
  setRotation(rot) {
    this.rotation = rot;
    return this;
  }
  /**
   * Sets whether or not the collider being created is a sensor.
   *
   * A sensor collider does not take part of the physics simulation, but generates
   * proximity events.
   *
   * @param sensor - Set to `true` of the collider built is to be a sensor.
   */
  setSensor(sensor) {
    this.isSensor = sensor;
    return this;
  }
  /**
   * Sets whether the created collider will be enabled or disabled.
   * @param enabled − If set to `false` the collider will be disabled at creation.
   */
  setEnabled(enabled) {
    this.enabled = enabled;
    return this;
  }
  /**
   * Sets the contact skin of the collider.
   *
   * The contact skin acts as if the collider was enlarged with a skin of width `skin_thickness`
   * around it, keeping objects further apart when colliding.
   *
   * A non-zero contact skin can increase performance, and in some cases, stability. However
   * it creates a small gap between colliding object (equal to the sum of their skin). If the
   * skin is sufficiently small, this might not be visually significant or can be hidden by the
   * rendering assets.
   */
  setContactSkin(thickness) {
    this.contactSkin = thickness;
    return this;
  }
  /**
   * Sets the density of the collider being built.
   *
   * The mass and angular inertia tensor will be computed automatically based on this density and the collider’s shape.
   *
   * @param density - The density to set, must be greater or equal to 0. A density of 0 means that this collider
   *                  will not affect the mass or angular inertia of the rigid-body it is attached to.
   */
  setDensity(density) {
    this.massPropsMode = MassPropsMode.Density;
    this.density = density;
    return this;
  }
  /**
   * Sets the mass of the collider being built.
   *
   * The angular inertia tensor will be computed automatically based on this mass and the collider’s shape.
   *
   * @param mass - The mass to set, must be greater or equal to 0.
   */
  setMass(mass) {
    this.massPropsMode = MassPropsMode.Mass;
    this.mass = mass;
    return this;
  }
  // #if DIM2
  /**
   * Sets the mass properties of the collider being built.
   *
   * This replaces the mass-properties automatically computed from the collider's density and shape.
   * These mass-properties will be added to the mass-properties of the rigid-body this collider will be attached to.
   *
   * @param mass − The mass of the collider to create.
   * @param centerOfMass − The center-of-mass of the collider to create.
   * @param principalAngularInertia − The principal angular inertia of the collider to create.
   */
  setMassProperties(mass, centerOfMass, principalAngularInertia) {
    this.massPropsMode = MassPropsMode.MassProps;
    this.mass = mass;
    VectorOps.copy(this.centerOfMass, centerOfMass);
    this.principalAngularInertia = principalAngularInertia;
    return this;
  }
  // #endif
  /**
   * Sets the restitution coefficient of the collider to be created.
   *
   * @param restitution - The restitution coefficient in `[0, 1]`. A value of 0 (the default) means no bouncing behavior
   *                   while 1 means perfect bouncing (though energy may still be lost due to numerical errors of the
   *                   constraints solver).
   */
  setRestitution(restitution) {
    this.restitution = restitution;
    return this;
  }
  /**
   * Sets the friction coefficient of the collider to be created.
   *
   * @param friction - The friction coefficient. Must be greater or equal to 0. This is generally smaller than 1. The
   *                   higher the coefficient, the stronger friction forces will be for contacts with the collider
   *                   being built.
   */
  setFriction(friction) {
    this.friction = friction;
    return this;
  }
  /**
   * Sets the rule used to combine the friction coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setFrictionCombineRule(rule) {
    this.frictionCombineRule = rule;
    return this;
  }
  /**
   * Sets the rule used to combine the restitution coefficients of two colliders
   * colliders involved in a contact.
   *
   * @param rule − The combine rule to apply.
   */
  setRestitutionCombineRule(rule) {
    this.restitutionCombineRule = rule;
    return this;
  }
  /**
   * Sets the collision groups used by this collider.
   *
   * Two colliders will interact iff. their collision groups are compatible.
   * See the documentation of `InteractionGroups` for details on teh used bit pattern.
   *
   * @param groups - The collision groups used for the collider being built.
   */
  setCollisionGroups(groups) {
    this.collisionGroups = groups;
    return this;
  }
  /**
   * Sets the solver groups used by this collider.
   *
   * Forces between two colliders in contact will be computed iff their solver
   * groups are compatible.
   * See the documentation of `InteractionGroups` for details on the used bit pattern.
   *
   * @param groups - The solver groups used for the collider being built.
   */
  setSolverGroups(groups) {
    this.solverGroups = groups;
    return this;
  }
  /**
   * Set the physics hooks active for this collider.
   *
   * Use this to enable custom filtering rules for contact/intersecstion pairs involving this collider.
   *
   * @param activeHooks - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveHooks(activeHooks) {
    this.activeHooks = activeHooks;
    return this;
  }
  /**
   * Set the events active for this collider.
   *
   * Use this to enable contact and/or intersection event reporting for this collider.
   *
   * @param activeEvents - The events active for contact/intersection pairs involving this collider.
   */
  setActiveEvents(activeEvents) {
    this.activeEvents = activeEvents;
    return this;
  }
  /**
   * Set the collision types active for this collider.
   *
   * @param activeCollisionTypes - The hooks active for contact/intersection pairs involving this collider.
   */
  setActiveCollisionTypes(activeCollisionTypes) {
    this.activeCollisionTypes = activeCollisionTypes;
    return this;
  }
  /**
   * Sets the total force magnitude beyond which a contact force event can be emitted.
   *
   * @param threshold - The force threshold to set.
   */
  setContactForceEventThreshold(threshold) {
    this.contactForceEventThreshold = threshold;
    return this;
  }
};

// ../node_modules/@dimforge/rapier2d/geometry/collider_set.js
var ColliderSet = class {
  constructor(raw) {
    this.raw = raw || new RawColliderSet();
    this.map = new Coarena();
    if (raw) {
      raw.forEachColliderHandle((handle) => {
        this.map.set(handle, new Collider(this, handle, null));
      });
    }
  }
  /**
   * Release the WASM memory occupied by this collider set.
   */
  free() {
    if (!!this.raw) {
      this.raw.free();
    }
    this.raw = void 0;
    if (!!this.map) {
      this.map.clear();
    }
    this.map = void 0;
  }
  /** @internal */
  castClosure(f) {
    return (handle) => {
      if (!!f) {
        return f(this.get(handle));
      } else {
        return void 0;
      }
    };
  }
  /** @internal */
  finalizeDeserialization(bodies) {
    this.map.forEach((collider) => collider.finalizeDeserialization(bodies));
  }
  /**
   * Creates a new collider and return its integer handle.
   *
   * @param bodies - The set of bodies where the collider's parent can be found.
   * @param desc - The collider's description.
   * @param parentHandle - The integer handle of the rigid-body this collider is attached to.
   */
  createCollider(bodies, desc, parentHandle) {
    let hasParent = parentHandle != void 0 && parentHandle != null;
    if (hasParent && isNaN(parentHandle))
      throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
    let rawShape = desc.shape.intoRaw();
    let rawTra = VectorOps.intoRaw(desc.translation);
    let rawRot = RotationOps.intoRaw(desc.rotation);
    let rawCom = VectorOps.intoRaw(desc.centerOfMass);
    let handle = this.raw.createCollider(
      desc.enabled,
      rawShape,
      rawTra,
      rawRot,
      desc.massPropsMode,
      desc.mass,
      rawCom,
      // #if DIM2
      desc.principalAngularInertia,
      // #endif
      desc.density,
      desc.friction,
      desc.restitution,
      desc.frictionCombineRule,
      desc.restitutionCombineRule,
      desc.isSensor,
      desc.collisionGroups,
      desc.solverGroups,
      desc.activeCollisionTypes,
      desc.activeHooks,
      desc.activeEvents,
      desc.contactForceEventThreshold,
      desc.contactSkin,
      hasParent,
      hasParent ? parentHandle : 0,
      bodies.raw
    );
    rawShape.free();
    rawTra.free();
    rawRot.free();
    rawCom.free();
    let parent = hasParent ? bodies.get(parentHandle) : null;
    let collider = new Collider(this, handle, parent, desc.shape);
    this.map.set(handle, collider);
    return collider;
  }
  /**
   * Remove a collider from this set.
   *
   * @param handle - The integer handle of the collider to remove.
   * @param bodies - The set of rigid-body containing the rigid-body the collider is attached to.
   * @param wakeUp - If `true`, the rigid-body the removed collider is attached to will be woken-up automatically.
   */
  remove(handle, islands, bodies, wakeUp) {
    this.raw.remove(handle, islands.raw, bodies.raw, wakeUp);
    this.unmap(handle);
  }
  /**
   * Internal function, do not call directly.
   * @param handle
   */
  unmap(handle) {
    this.map.delete(handle);
  }
  /**
   * Gets the rigid-body with the given handle.
   *
   * @param handle - The handle of the rigid-body to retrieve.
   */
  get(handle) {
    return this.map.get(handle);
  }
  /**
   * The number of colliders on this set.
   */
  len() {
    return this.map.len();
  }
  /**
   * Does this set contain a collider with the given handle?
   *
   * @param handle - The collider handle to check.
   */
  contains(handle) {
    return this.get(handle) != null;
  }
  /**
   * Applies the given closure to each collider contained by this set.
   *
   * @param f - The closure to apply.
   */
  forEach(f) {
    this.map.forEach(f);
  }
  /**
   * Gets all colliders in the list.
   *
   * @returns collider list.
   */
  getAll() {
    return this.map.getAll();
  }
};

// ../node_modules/@dimforge/rapier2d/exports.js
function version2() {
  return version();
}

// ../node_modules/@dimforge/rapier2d/rapier.js
var rapier_default = exports_exports;
export {
  ActiveCollisionTypes,
  ActiveEvents,
  ActiveHooks,
  Ball,
  BroadPhase,
  CCDSolver,
  Capsule,
  CharacterCollision,
  CoefficientCombineRule,
  Collider,
  ColliderDesc,
  ColliderSet,
  ColliderShapeCastHit,
  ConvexPolygon,
  Cuboid,
  DebugRenderBuffers,
  DebugRenderPipeline,
  EventQueue,
  FeatureType,
  FixedImpulseJoint,
  FixedMultibodyJoint,
  HalfSpace,
  Heightfield,
  ImpulseJoint,
  ImpulseJointSet,
  IntegrationParameters,
  IslandManager,
  JointAxesMask,
  JointData,
  JointType,
  KinematicCharacterController,
  MassPropsMode,
  MotorModel,
  MultibodyJoint,
  MultibodyJointSet,
  NarrowPhase,
  PhysicsPipeline,
  PointColliderProjection,
  PointProjection,
  Polyline,
  PrismaticImpulseJoint,
  PrismaticMultibodyJoint,
  QueryFilterFlags,
  QueryPipeline,
  Ray,
  RayColliderHit,
  RayColliderIntersection,
  RayIntersection,
  RevoluteImpulseJoint,
  RevoluteMultibodyJoint,
  RigidBody,
  RigidBodyDesc,
  RigidBodySet,
  RigidBodyType,
  RopeImpulseJoint,
  RotationOps,
  RoundConvexPolygon,
  RoundCuboid,
  RoundTriangle,
  Segment,
  SerializationPipeline,
  Shape,
  ShapeCastHit,
  ShapeContact,
  ShapeType,
  SolverFlags,
  SpringImpulseJoint,
  TempContactForceEvent,
  TempContactManifold,
  TriMesh,
  TriMeshFlags,
  Triangle,
  UnitImpulseJoint,
  UnitMultibodyJoint,
  Vector2,
  VectorOps,
  World,
  rapier_default as default,
  version2 as version
};
//# sourceMappingURL=@dimforge_rapier2d.js.map
