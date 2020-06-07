import "../style/style.css";

const APIPerProvince = `https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json`;
const APIGlobal = `https://covid-19-data.p.rapidapi.com/country/code?format=json&code=${code}`


const getDataPerProvince = async () => {
    try {
        const response = await fetch(APIPerProvince);
        const responseJSON = await response.json();
        document.body.innerText = JSON.stringify(responseJSON);
    } catch (error) {
        console.log(error);
    }
}

const getDataGlobal = async () => {
    const response = await fetch(APIGlobal, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "5f5f6090c6mshe3c64a00c80ba71p1cc3c8jsna5ca7e5362ef"
        }
    });
    const responseJSON = await response.json();
    if (responseJson.error) {
        showResponseMessage(responseJson.message);
    } else {
        renderAllBooks(responseJson.books);
    }
}

getDataPerProvince();
