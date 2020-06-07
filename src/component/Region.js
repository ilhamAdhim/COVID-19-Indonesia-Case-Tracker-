class RegionItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    set region(region) {
        this._region = region;
        this.render();
    }


    render() {
        this.shadowDOM.innerHTML = `
        <img class="fan-art-region" src="${this._region.strTeamBadge}" alt="Fan Art">
        <div class="region-info">
            <h2>${this._region.strTeam}</h2>
            <p>${ this._region.strDescriptionEN}</p>
        </div>`;
    }
}

customElements.define("region-item", RegionItem);