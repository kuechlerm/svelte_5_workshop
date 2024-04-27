export const wert = $state('init Wert');

class Store {
	value = $state(0);
	anderes = $state(0);

	// kind = new Anderer_Store();

	mehr() {
		this.value = this.value + 1;
	}
}

export const store = new Store();
