class SearchBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="p-2 h-100 text-center">
            <div class="md-form search-container"  id="search-container">
                <input type="text" placeholder="Cari Provinsi Anda..." id="searchElement" type="search" aria-label="Search">
                <button class="btn btn-indigo btn-rounded btn-lg text-white" id="searchButtonElement" type="submit">Cari</button>
            </div>
        </div>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
