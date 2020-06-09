// Import all HTML Custom Element and DataSource
import DataSource from '../data/data-source.js';
import _ from 'lodash';

const main = () => {
    const defaultNations = ['China', 'US', 'Indonesia'];
    const defaultProvinces = ['DKI Jakarta', 'Jawa Timur', 'Jawa Tengah', 'Jawa Barat', 'Sumatera Utara'];

    const regionListElement = document.querySelector("region-list");

    const dataByProvince = async (province = null) => {
        try {
            const finalResult = []
            const resultAPI = await DataSource.getDataByProvince(province);
            if (province != null) {
                // console.log(resultAPI.features[0].attributes.Provinsi)
                province.forEach(provinceName => {
                    let province = _.filter(resultAPI.features, ['attributes.Provinsi', provinceName])
                    finalResult.push(province);
                })
            }

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
                    let country = _.filter(resultAPI.features, ['attributes.Country_Region', nationName])
                    finalResult.push(country);
                })
            }
            renderCountryData(country != null ? finalResult : resultAPI);

        } catch (message) {
            errorMessage(message);
        }
    }


    const errorMessage = msg => {
        console.log(msg);
    }

    const renderCountryData = results => {
        regionListElement.regions = results;
    };

    const renderProvinceData = results => {
        const container = document.querySelector('.data-province');
        results.forEach(province => {
            container.innerHTML += `<tr>`;

            console.log(province[0])
            container.innerHTML += ` 
            <td> <center> ${province[0].attributes.Provinsi} </center></td>
            <td> <center> ${province[0].attributes.Kasus_Meni} </center></td>
            <td> <center> ${province[0].attributes.Kasus_Semb} </center></td>
            <td> <center> ${province[0].attributes.Kasus_Posi} </center></td>
            `
            container.innerHTML += `</tr>`;

        })
    }

    const defaultData = async () => {
        await dataAllCountry(defaultNations);
        await dataByProvince(defaultProvinces);
    }

    defaultData()

}


export default main;