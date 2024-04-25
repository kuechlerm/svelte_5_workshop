import { writable } from 'svelte/store';

export type Notiz = {
	titel: string;
};

const create_store = () => {
	const store = writable<Notiz[]>([]);

	const add = (titel: string) => {
		store.update((current) => {
			if (current.find((n) => n.titel.toLowerCase() === titel)) return current;

			current.push({ titel });
			return current;
		});

		// in Datenbank speichern
	};

	return { subscribe: store.subscribe, add };
};

export const notizen = create_store();
