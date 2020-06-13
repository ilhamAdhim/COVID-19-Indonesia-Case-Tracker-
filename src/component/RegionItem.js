class RegionItem extends HTMLElement {
    constructor() {
        super();
    }
    set region(region) {
        this._region = region[0].attributes;
        this._region['image'] = "../../dist/assets/" + this._region.Country_Region + "-flag-button-round-icon-128.png"
        this.render();
    }

    render() {
        // console.log(this._region)
        this.className = "card mb-2";
        this.innerHTML = `
                <div class="container p-2">
                    <div class="row">
                        <div class="col-sm-4">
                            <center>

                                <img class="center" src="${this._region.image} " alt="${this._region.Country_Region}" width="60" height="60">
                            </center>

                        </div>
                        <div class="col-sm-8 align-self-center">
                            <center>
                                <h4>${this._region.Country_Region}</h4>
                            </center>
                        </div>
                    </div>
                    <hr >
                <div class="card-body p-2" style="padding:0">    
                    <div class="d-flex flex-md-column flex-lg-row">
                        <div class="p-2 flex-fill text-success">
                            <center>
                                Sembuh  ${this._region.Recovered.toLocaleString("en")}
                            </center>
                        </div>
                        <div class="p-2 flex-fill text-warning">
                            <center>
                                Positif  ${this._region.Confirmed.toLocaleString("en")}
                            </center>
                        </div>
                        <div class="p-2 flex-fill text-danger">
                            <center>
                            Meninggal 
                            ${this._region.Deaths.toLocaleString("en")}

                            </center>
                        </div>
                    </div>
                </div>`;
    }
}


customElements.define("region-item", RegionItem);