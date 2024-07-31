export type Icon =
	| 'movement'
	| 'fireRate'
	| 'bulletSpeed'
	| 'damage'
	| 'shootingRange'
	| 'health'
	| 'piercing'
	| 'itemTime'
	| 'new';

const icons: Record<Icon, string> = {
	movement: `<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="size-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
	/>
</svg>`,
	fireRate: `<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="size-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
	/>
</svg>`,
	bulletSpeed: `<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="size-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
	/>
</svg>`,
	damage: `<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="size-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
	/>
</svg>`,
	shootingRange: `<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="size-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
	/>
</svg>`,
	health: `<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="size-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
	/>
</svg>`,
	piercing: `<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="size-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
	/>
</svg>`,
	itemTime: `<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	stroke-width="1.5"
	stroke="currentColor"
	class="size-6"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
	/>
</svg>`,
	new: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>`
};

function getIcon(icon: Icon) {
	return icons[icon];
}

type UpgradeOption = {
	index: number;
	total: number;

	icon?: Icon;

	disabled?: boolean;

	description?: string;

	perk?: string;
	perkValue?: string;

	minusStat?: string;
	minusStatValue?: string;

	price?: {
		color: string;
		amount: number;
	}[];

	bought?: boolean;

	empty?: boolean;

	buy?: () => void;

	color: string;
};

export function addUpgradeOption(options: UpgradeOption) {
	// if index === 0
	// rounded-tl-lg rounded-tr-lg sm:rounded-tr-none
	// if index === 1
	// sm:rounded-tr-lg
	// if index === total - 2
	// sm:rounded-bl-lg
	// if index === total - 1
	// rounded-bl-lg rounded-br-lg sm:rounded-bl-none
	const upgrade = document.createElement('div');
	upgrade.className = 'group relative ring-1 ring-inset ring-white/10 p-6 overflow-hidden';
	if (options.index === 0) {
		upgrade.classList.add('rounded-tl-lg', 'rounded-tr-lg', 'sm:rounded-tr-none');
	} else if (options.index === 1) {
		upgrade.classList.add('sm:rounded-tr-lg');
	} else if (options.index === options.total - 2) {
		upgrade.classList.add('sm:rounded-bl-lg');
	} else if (options.index === options.total - 1) {
		upgrade.classList.add('rounded-bl-lg', 'rounded-br-lg', 'sm:rounded-bl-none');
	}

	// add hover glow
	let glow = document.createElement('div');
	glow.className =
		'absolute inset-0 ring-2 ring-inset ring-amber-500 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-200';
	upgrade.appendChild(glow);

	if (options.disabled) {
		upgrade.classList.add('opacity-30', 'pointer-events-none');
	}

	if (options.bought) {
		upgrade.classList.add('pointer-events-none');
	}

	if (options.empty) {
		upgrade.classList.add('pointer-events-none', 'opacity-30', 'hidden', 'sm:block');

		return upgrade;
	}

	if (options.icon) {
		const icon = document.createElement('span');
		icon.className = 'inline-flex rounded-lg bg-white/5 p-3 ring-0 ' + options.color;
		icon.innerHTML = getIcon(options.icon);

		upgrade.appendChild(icon);
	}

	const div = document.createElement('div');
	div.className = 'mt-8';
	const title = document.createElement('h3');
	title.className = 'text-base font-semibold leading-6 text-gray-50';
	const button = document.createElement('button');
	button.className = 'focus:outline-none';

	const span = document.createElement('span');
	span.className = 'absolute inset-0';
	span.setAttribute('aria-hidden', 'true');
	const spanText = document.createElement('span');
	spanText.innerText = options.perk + ' ';
	const spanPercentage = document.createElement('span');
	spanPercentage.className = options.color;
	spanPercentage.innerText = options.perkValue ?? '';

	spanText.appendChild(spanPercentage);
	button.appendChild(span);
	button.appendChild(spanText);
	title.appendChild(button);

	div.appendChild(title);

	if (options.description) {
		const description = document.createElement('p');
		description.innerHTML = options.description + ' ';
		description.className = 'mt-2 text-sm text-gray-300 font-semibold';
		div.appendChild(description);
	}

	if (options.price) {
		const stats = document.createElement('p');
		stats.className =
			'absolute bottom-6 right-6 mt-2 text-sm text-gray-300 font-semibold flex items-center gap-2 justify-end';

		let count = (options.price ?? []).length;
		for (let i = 0; i < count; i++) {
			const stat1 = document.createElement('span');
			stat1.className =
				'h-3 w-3 rounded-full relative ' +
				options.price?.[i].color +
				(i < count - 1 ? ' mr-2' : '');

			stats.innerHTML += options.price?.[i].amount;

			const statGlow = document.createElement('span');
			statGlow.className =
				'absolute -inset-0.5 h-4 w-4 rounded-full blur-sm ' + options.price?.[i].color;
			stat1.appendChild(statGlow);

			stats.appendChild(stat1);
		}

		div.appendChild(stats);
	}

	upgrade.appendChild(div);

	const spanPointer = document.createElement('span');
	spanPointer.className =
		'pointer-events-none absolute right-6 top-6 text-gray-50 group-hover:text-gray-200';
	spanPointer.setAttribute('aria-hidden', 'true');

	if (options.bought) {
		spanPointer.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  			<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
		</svg>`;
	} else {
		spanPointer.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
        >
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>`;
	}

	button.addEventListener('click', () => {
		if (options.disabled) {
			return;
		}
		if (options.bought) {
			return;
		}

		if (options.buy) {
			options.buy();
		}

		// remove hover:ring-2 hover:ring-inset hover:ring-white
		upgrade.classList.remove('hover:ring-2', 'hover:ring-inset', 'hover:ring-white');

		options.bought = true;
		upgrade.classList.add('opacity-30', 'pointer-events-none');
		spanPointer.innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  			<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
		</svg>`;
	});

	upgrade.appendChild(spanPointer);

	return upgrade;
}
