// Import all HTML Custom Element and DataSource
import DataSource from '../data/data-source.js';
import _ from 'lodash';

const main = () => {
    const defaultNations = ['US', 'United Kingdom', 'Brazil'];

    const searchBarElement = document.querySelector("search-bar");
    const regionListElement = document.querySelector("region-list");
    const provinceItemElement = document.querySelector("province-item");

    const date = document.querySelector('.latest-update');

    const dataAllCountry = async (country = null) => {
        try {
            const finalResult = []
            const resultAPI = await DataSource.getDataByCountry(country);
            if (country !== null) {
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

            // Capitalized the first letter of each word
            const formattedProvince = _.startCase(_.camelCase(searchBarElement.value));

            const province = _.filter(resultAPI.features, ['attributes.Provinsi', formattedProvince]);
            renderSearchProvince(province);
        } catch (message) {
            errorMessage(message);
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
        date.innerHTML += new Date().toDateString();
    }

    AOS.init();
    defaultData();
    searchBarElement.clickEvent = onButtonSearchClicked;

}


export default main;