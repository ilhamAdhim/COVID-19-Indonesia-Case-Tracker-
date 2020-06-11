class ProvinceItem extends HTMLElement {
    constructor() {
        super();
    }

    set province(province) {
        // Get only some keys from JSON Response and assign it to private variable
        this._province = _.pick(province[0].attributes, ['Provinsi', 'Kasus_Meni', 'Kasus_Posi', 'Kasus_Semb']);
        this.render();
    }



    render() {
        console.log(this._province);

    }
}

customElements.define("province-item", ProvinceItem);
