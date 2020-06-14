class DataSource {
    static async getDataByCountry(country = null) {

        // Confirmed, recovered, death data from certain country
        return fetch(`https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json`)
            .then(response => response.json())
            .then(responseJSON => Promise.resolve(responseJSON))
            .catch(err => Promise.reject(`${country} is not found`));
    }

    static async getDataByProvince() {
        // Province, Deaths,Recovered, Positives data from Indonesia
        return fetch(`https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`)
            .then(response => response.json())
            .then(responseJSON => Promise.resolve(responseJSON))
            .catch(err => Promise.reject(`Data is not found`));
    }

}
export default DataSource;