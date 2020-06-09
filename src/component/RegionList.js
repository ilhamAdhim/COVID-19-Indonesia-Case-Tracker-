import './RegionItem'
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
       </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.className = "card-deck";
        this._regions.forEach(region => {
            const createRegionItemElement = document.createElement("region-item");
            createRegionItemElement.region = region;
            createRegionItemElement.className = "card";
            this.appendChild(createRegionItemElement);

        })
    }
}



customElements.define("region-list", RegionList);
