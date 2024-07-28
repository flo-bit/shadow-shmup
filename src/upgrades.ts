function getIcon(icon: string) {
	return `
        <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
    `;
}

type UpgradeOption = {
	index: number;
	total: number;

	iconName?: string;

	disabled?: boolean;

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
	upgrade.className =
		'group relative ring-1 ring-inset ring-white/10 p-6 hover:ring-2 hover:ring-inset hover:ring-white';
	if (options.index === 0) {
		upgrade.classList.add('rounded-tl-lg', 'rounded-tr-lg', 'sm:rounded-tr-none');
	} else if (options.index === 1) {
		upgrade.classList.add('sm:rounded-tr-lg');
	} else if (options.index === options.total - 2) {
		upgrade.classList.add('sm:rounded-bl-lg');
	} else if (options.index === options.total - 1) {
		upgrade.classList.add('rounded-bl-lg', 'rounded-br-lg', 'sm:rounded-bl-none');
	}

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

	const icon = document.createElement('span');
	icon.className = 'inline-flex rounded-lg bg-white/5 p-3 text-rose-500 ring-0';
	icon.innerHTML = getIcon(options.iconName ?? '');

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
	spanPercentage.className = 'text-sky-500';
	spanPercentage.innerText = options.perkValue ?? '';

	spanText.appendChild(spanPercentage);
	button.appendChild(span);
	button.appendChild(spanText);
	title.appendChild(button);

	div.appendChild(title);

	const description = document.createElement('p');
	description.innerHTML = options.minusStat + ' ';
	description.className = 'mt-2 text-sm text-gray-300 font-semibold';
	const descriptionText = document.createElement('span');
	descriptionText.className = 'text-rose-500';
	descriptionText.innerText = options.minusStatValue ?? '';
	description.appendChild(descriptionText);

	const stats = document.createElement('p');
	stats.className = 'mt-2 text-sm text-gray-300 font-semibold flex items-center gap-2 justify-end';

	let count = (options.price ?? []).length;
	for (let i = 0; i < count; i++) {
		const stat1 = document.createElement('span');
		stat1.className =
			'h-3 w-3 rounded-full relative ' + options.price?.[i].color + (i < count - 1 ? ' mr-2' : '');

		stats.innerHTML += options.price?.[i].amount;

		const statGlow = document.createElement('span');
		statGlow.className =
			'absolute -inset-0.5 h-4 w-4 rounded-full blur-sm ' + options.price?.[i].color;
		stat1.appendChild(statGlow);

		stats.appendChild(stat1);
	}

	upgrade.appendChild(icon);
	div.appendChild(title);
	div.appendChild(description);
	div.appendChild(stats);

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
