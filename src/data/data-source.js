class DataSource {
    static getDataByCountry(key) {
        // Confirmed, recovered, death data from certain country
        return fetch(`https://covid-19-data.p.rapidapi.com/country?format=json&name=${key}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
                "x-rapidapi-key": "5f5f6090c6mshe3c64a00c80ba71p1cc3c8jsna5ca7e5362ef"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                return Promise.resolve(responseJSON);
            })
            .catch(err => {
                return Promise.reject(`${key} is not found`);
            });
    }

    static getDataByProvince(key) {
        // Province, Deaths,Recovered, Positives data from certain country
        return fetch(`https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`, {
            "method": "GET"
        })
            .then(response => {
                return response.json();
            })
            .then(responseJSON => {
                return Promise.resolve(responseJSON);
            })
            .catch(err => {
                return Promise.reject(`Data is not found`);
            });
    }

}