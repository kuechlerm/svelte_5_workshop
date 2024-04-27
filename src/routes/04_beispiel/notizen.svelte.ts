export type Notiz = {
	titel: string;
};

class NotizenStore {
	notizen: Notiz[] = $state([]);
	anzahl = $derived(this.notizen.length);

	add(titel: string) {
		if (this.notizen.find((n) => n.titel.toLowerCase() === titel)) return;

		this.notizen.push({ titel });

		// in Datenbank speichern
	}
}

export const notizen = new NotizenStore();
