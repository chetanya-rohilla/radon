let axios = require("axios")

let getWeather = async function(req,res){
    let city = req.query.city
    const options = {
        "method" : "get",
        "url" : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fa3696c3595e0638660f452c9660ee7`
    }

    const result = await axios(options)
    res.status(200).send({msg : result.data})
}

let onlyTemp = async function(req,res){
    let city = req.query.city
    const options = {
        "method" : "get",
        "url" : `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3fa3696c3595e0638660f452c9660ee7`
    }

    const result = await axios(options)
    res.status(200).send({msg : result.data.main.temp})
}

const sortByTemp = async function(req,res){
    let cities = ["Bengaluru", "Mumbai", "Delhi", " Kolkata", "Chennai", "London", "Moscow"]
    let cityData = []

    for(let i=0; i < cities.length; i++){
        const options = {
            "method" : "get",
            "url" : `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=3fa3696c3595e0638660f452c9660ee7`
        }

        const result = await axios(options);
        cityData.push({city:cities[i], temp:result.data.main.temp})
    }
    let sortedCity = cityData.sort((a,b) => {
        return a.temp - b.temp
    })
    res.status(200).send({msg : sortedCity})
}

module.exports.getWeather = getWeather
module.exports.onlyTemp = onlyTemp
module.exports.sortByTemp = sortByTemp