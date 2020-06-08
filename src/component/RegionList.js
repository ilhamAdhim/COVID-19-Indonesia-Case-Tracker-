import './Region'
class RegionList extends HTMLElement {
    constructor() {
        super();
    }
    set regions(regions) {
        this._regions = regions;
        this.render();
    }

    connectedCallback(regions) {
        this.render();
    }

    renderError(message) {
        this.innerHTML = `
       <style>
           .placeholder {
               font-weight: lighter;
               color: rgba(0,0,0,0.5);
               -webkit-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
           }
       </style>
       `;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <div class="card-deck">
            </div>
        </div>`;
        /* this._regions.forEach(region => {
            const regionItemElement = document.createElement("region-item");
            regionItemElement.region = region;
            this.appendChild(regionItemElement);
        }) */
    }
}



customElements.define("region-list", RegionList);
