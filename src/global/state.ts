import { writable } from 'svelte/store';

export const wert = writable('init Wert');

function create_store() {
	const value = writable(0);

	const mehr = () => value.update((x) => x + 1);

	return {
		subscribe: value.subscribe,
		mehr
	};
}

export const store = create_store();
