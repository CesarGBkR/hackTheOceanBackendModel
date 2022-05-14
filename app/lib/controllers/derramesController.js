const reader = require('../utils/reader')
const derrames = reader.readJsonFile('../derrames.json')
const derramesServices = require('../services/derramesServices')

class derramesController{

    static getAllDerrames(path){
        reader.readJsonFile(path)
    }

    static getAllDerramesName(){
        derramesServices.derramesNames(derrames)
    }

    static getDerramesByUbi(ubi){
        derramesServices.filterByubication(derrames, ubi)
    }

    static getAllDerramesByCountry(country){
        derramesServices.filterByCountry(derrames,country)
    }
}

module.exports = derramesController
