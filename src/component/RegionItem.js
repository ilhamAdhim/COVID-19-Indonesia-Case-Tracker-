// import images from "../data/images";

class RegionItem extends HTMLElement {
    constructor() {
        super();
    }
    set region(region) {
        this._region = region[0].attributes;
        this._region['image'] = "../../dist/assets/" + this._region.Country_Region + "-flag-button-round-icon-128.png"
        // console.log(this._region)
        this.render();
    }
    /* connectedCallback() {
        this.render();
    } */

    render() {
        // console.log(images)
        if (_.has(this._region, 'Country_Region')) {
            this.innerHTML = `
            
                <div class="container p-2">
                    <div class="row">
                        <div class="col-sm-4">
                            <img class="center" src="${this._region.image} " alt="${this._region.Country_Region}" width="60" height="60">
                        </div>
                        <div class="col-sm-8 align-self-center">
                            <center>
                                <h4>${this._region.Country_Region}</h4>
                            </center>
                        </div>
                    </div>
                </div>
                <div class="card-body">    
                    <div class="d-flex flex-row">
                        <div class="p-2 flex-fill bg-success">
                            <center>
                                Recovered
                            </center>
                        </div>
                        <div class="p-2 flex-fill bg-warning">
                            <center>
                                Confirmed
                            </center>
                        </div>
                        <div class="p-2 flex-fill bg-danger">
                            <center>
                                Deaths
                            </center>
                        </div>
                    </div>
                </div>
            
            <div class="card-footer">
                <div class="d-flex flex-row">
                    <div class="p-2 flex-fill bg-success">
                        <center>
                            ${this._region.Recovered}
                        <center>
                    </div>
                    <div class="p-2 flex-fill bg-warning">
                        <center>
                            ${this._region.Confirmed}
                        <center>
                    </div>
                    <div class="p-2 flex-fill bg-danger">
                        <center>
                            ${this._region.Deaths}
                        <center>
                    </div>
                </div>
            `;
        } else {
            this.innerHTML = `
            <tr>
                <td> <b> ${this._region.Country_Region} </b>
                <td> <b> ${this._region.Deaths} </b>
                <td> <b> ${this._region.Confirmed} </b>
                <td> <b> ${this._region.Recovered} </b>
            </tr>
            `
        }
    }
}

customElements.define("region-item", RegionItem);