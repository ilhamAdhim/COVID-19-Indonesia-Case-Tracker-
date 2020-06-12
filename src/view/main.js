// Import all HTML Custom Element and DataSource
import DataSource from '../data/data-source.js';
import _ from 'lodash';

const main = () => {
    const defaultNations = ['US', 'United Kingdom', 'Brazil'];
    const defaultProvinces = ['Jawa Timur', 'Sulawesi Selatan', 'DKI Jakarta', 'Jawa Tengah', 'Kalimantan Selatan'];

    const searchElement = document.querySelector("search-bar");
    const regionListElement = document.querySelector("region-list");
    const provinceItemElement = document.querySelector("province-item");
    const title = document.querySelector(".title-jumbotron");
    const doctorImage = document.querySelector("doctor-img");

    const dataByProvince = async (province = null) => {
        try {
            const finalResult = [];
            const resultAPI = await DataSource.getDataByProvince(province);
            if (province != null) {
                province.forEach(provinceName => {
                    let province = _.filter(resultAPI.features, ['attributes.Provinsi', provinceName]);
                    finalResult.push(province);
                })
            }
            // Sort the Province based on amount of Confirmed cases
            renderProvinceData(province != null ? finalResult : resultAPI);
        } catch (message) {
            errorMessage(message);
        }
    }

    const dataAllCountry = async (country = null) => {
        try {
            const finalResult = []
            const resultAPI = await DataSource.getDataByCountry(country);
            if (country != null) {
                defaultNations.forEach(nationName => {
                    let country = _.filter(resultAPI.features, ['attributes.Country_Region', nationName]);
                    finalResult.push(country);
                })
            }
            renderCountryData(country != null ? finalResult : resultAPI);

        } catch (message) {
            errorMessage(message);
        }
    }

    const triggerSearchFeature = () => {
        doctorImage.style.transform = "translate(300px,75px)";

        title.style.display = 'none';
        searchBar.style.display = 'inline';
    }

    const triggerTitle = () => {
        doctorImage.style.transform = "translate(0px,75px)";

        title.style.display = 'inline';
        searchBar.style.display = 'none';
    }

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.getDataByProvince(searchElement.value);
            provinceItemElement.province = results;
        } catch (message) {
            errorMessage(message)
        }
    };

    const errorMessage = msg => {
        console.log(msg);
    }

    const renderCountryData = results => {
        regionListElement.regions = results;
    };

    const renderProvinceData = results => {
        const container = document.querySelector('.data-province');
        results.forEach(province => {
            container.innerHTML += ` 
            <tr>
                <td style="font-size:1em"> <center> <b> ${province[0].attributes.Provinsi.toLocaleString("en")} </b> </center></td>
                <td style="font-size:1em"> <center> <b> ${province[0].attributes.Kasus_Meni.toLocaleString("en")} </b> </center></td>
                <td style="font-size:1em"> <center> <b> ${province[0].attributes.Kasus_Posi.toLocaleString("en")} </b> </center></td>
                <td style="font-size:1em"> <center> <b> ${province[0].attributes.Kasus_Semb.toLocaleString("en")} </b> </center></td>
            </tr>`;
        })
    }



    const defaultData = async () => {
        await dataAllCountry(defaultNations);
        await dataByProvince(defaultProvinces);

    }

    AOS.init();
    defaultData();

}


export default main;