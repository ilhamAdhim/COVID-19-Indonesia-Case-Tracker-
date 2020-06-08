class RegionItem extends HTMLElement {
    constructor() {
        super();
    }
    set region(region) {
        this._region = region;
        this.render();
    }
    /* connectedCallback() {
        this.render();
    } */

    render() {
        this.innerHTML = `
        <div class="card">
            <img class="card-img-top" src="{indonesia-flag-button-round-icon-128.png}" alt="Indonesia">
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Text</p>
            </div>
        </div>`;
    }
}

customElements.define("region-item", RegionItem);