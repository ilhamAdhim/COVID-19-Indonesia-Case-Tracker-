// Import all HTML Custom Element and DataSource
import DataSource from '../data/data-source.js';
import _ from 'lodash';

const main = () => {
    const defaultNations = ['China', 'US', 'Indonesia'];
    const defaultProvinces = ['DKI Jakarta', 'Jawa Timur', 'Jawa Tengah', 'Jawa Barat', 'Sumatera Utara'];

    const container = document.querySelector('.container');
    const regionListElement = document.querySelector("region-list");

    const importAllImages = (image) => {
        return image.keys().map(image);
    }

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
                // console.log("Processed ", JSON.stringify(finalResult))
            }
            // console.log("Raw", resultAPI)

            renderResult(province != null ? finalResult : resultAPI);
        } catch (message) {
            errorMessage(message);
        }
    }

    const dataAllCountry = async (country = null) => {
        try {
            const finalResult = []
            const resultAPI = await DataSource.getDataByCountry(country);
            if (country != null) {
                // console.log(resultAPI.features[0].attributes.Country_Region)
                defaultNations.forEach(nationName => {
                    let country = _.filter(resultAPI.features, ['attributes.Country_Region', nationName])
                    finalResult.push(country);
                })
                // console.log(finalResult)
            }
            renderResult(country != null ? finalResult : resultAPI);

        } catch (message) {
            errorMessage(message);
        }
    }


    const errorMessage = msg => {
        console.log(msg);
    }

    const renderResult = results => {
        regionListElement.regions = results;
    };


    // dataByProvince(defaultProvinces);
    dataAllCountry(defaultNations);


}


export default main;