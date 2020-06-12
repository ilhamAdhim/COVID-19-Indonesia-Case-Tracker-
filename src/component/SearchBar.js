import './ProvinceItem'
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
            <div class="md-form"  id="search-container">
                <input type="text" placeholder="Cari Provinsi Anda..." id="searchElement" aria-label="Search">
                <i class="fas fa-search text-white ml-3" aria-hidden="true"></i>
                <button class="btn btn-indigo btn-rounded btn-lg text-white" id="searchButtonElement" type="submit">Cari</button>
                <div class = "container search-result">
                </div>
            </div>
        </div>`;

        console.log(this.value)
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
