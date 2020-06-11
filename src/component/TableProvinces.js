import "./ProvinceItem"

class TableProvinces extends HTMLElement {
    constructor() {
        super();
    }


    set provinces(provinces) {
        this._provinces = provinces;
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
        const table = document.querySelector('table');

        this._provinces.forEach(province => {
            const provinceDataElement = document.createElement("province-item");
            provinceDataElement.province = province;

            const tableRow = document.createElement("tr");

            table.appendChild(provinceDataElement)
            // tableRow.appendChild(provinceDataElement);
        })
    }

}

customElements.define("table-provinces", TableProvinces);
