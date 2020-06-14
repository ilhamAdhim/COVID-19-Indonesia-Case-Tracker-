class ProvinceItem extends HTMLElement {
    constructor() {
        super();
    }

    set province(province) {
        this._tbody = document.querySelector('tbody');
        // Get only some keys from JSON Response and assign it to private variable
        this._province = province[0].attributes;
        this.render();
    }
    render() {
        this._tbody.innerHTML += ` 
            <tr class="province-item">
                <td style="font-size:1em" class="text-center"> <b> ${this._province.Provinsi} </b> </td>
                <td style="font-size:1em" class="text-center"> <b> ${this._province.Kasus_Meni} </b> </td>
                <td style="font-size:1em" class="text-center"> <b> ${this._province.Kasus_Posi} </b> </td>
                <td style="font-size:1em" class="text-center"> <b> ${this._province.Kasus_Semb} </b> </td>
            </tr>`;
    }
}

customElements.define("province-item", ProvinceItem);
