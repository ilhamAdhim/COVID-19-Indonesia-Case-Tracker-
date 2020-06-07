class RegionList {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });

    }
    set regions(regions) {
        this._regions = regions;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
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
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this.regions.forEach(region => {
            const regionItemElement = document.createElement("region-list");
            regionItemElement.region = region
            this.shadowDOM.appendChild(regionItemElement);
        })
    }
}







customElements.define("region-list", RegionList);
