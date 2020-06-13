// Import all HTML Custom Element and DataSource
import DataSource from '../data/data-source.js';
import _ from 'lodash';

const main = () => {
    const defaultNations = ['US', 'United Kingdom', 'Brazil'];

    const searchBarElement = document.querySelector("search-bar");
    const regionListElement = document.querySelector("region-list");
    const provinceItemElement = document.querySelector("province-item");


    const dataByProvince = async (province = null) => {
        try {
            const finalResult = [];
            const resultAPI = await DataSource.getDataByProvince();
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

    const onButtonSearchClicked = async () => {
        try {
            const resultAPI = await DataSource.getDataByProvince();
            const province = _.filter(resultAPI.features, ['attributes.Provinsi', searchBarElement.value]);
            console.log(province);
            renderSearchProvince(province);
        } catch (message) {
            errorMessage(message)
        }
    };

    const renderSearchProvince = async result => {
        provinceItemElement.province = result;
    }

    const errorMessage = msg => {
        console.log(msg);
    }

    const renderCountryData = results => {
        regionListElement.regions = results;
    };



    const defaultData = async () => {
        await dataAllCountry(defaultNations);
    }

    AOS.init();
    defaultData();
    searchBarElement.clickEvent = onButtonSearchClicked;

}


export default main;