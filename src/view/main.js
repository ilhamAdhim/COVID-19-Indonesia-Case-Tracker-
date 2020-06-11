// Import all HTML Custom Element and DataSource
import DataSource from '../data/data-source.js';
import _ from 'lodash';

const main = () => {
    const defaultNations = ['US', 'United Kingdom', 'Brazil'];
    const defaultProvinces = ['DKI Jakarta', 'Jawa Timur', 'Jawa Tengah', 'Jawa Barat', 'Sumatera Utara'];

    const regionListElement = document.querySelector("region-list");

    const dataByProvince = async (province = null) => {
        try {
            const finalResult = []
            const resultAPI = await DataSource.getDataByProvince(province);
            if (province != null) {
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
            console.log(province[0])
            container.innerHTML += ` 
            <tr>
                <td style="font-size:1em"> <center> <b> ${province[0].attributes.Provinsi.toLocaleString("en")} </b> </center></td>
                <td style="font-size:1em"> <center> <b> ${province[0].attributes.Kasus_Meni.toLocaleString("en")} </b> </center></td>
                <td style="font-size:1em"> <center> <b> ${province[0].attributes.Kasus_Posi.toLocaleString("en")} </b> </center></td>
                <td style="font-size:1em"> <center> <b> ${province[0].attributes.Kasus_Semb.toLocaleString("en")} </b> </center></td>
            </tr>`
        })
    }

    const getDate = () => {
        n = new Date();
        y = n.getFullYear();
        m = n.getMonth() + 1;
        d = n.getDate();
        document.getElementsByClassName("date").innerHTML = m + "/" + d + "/" + y;
    }

    const defaultData = async () => {
        await dataAllCountry(defaultNations);
        await dataByProvince(defaultProvinces);
        getDate();
    }

    defaultData()

}


export default main;