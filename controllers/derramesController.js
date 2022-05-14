const reader = require('../utils/reader')
const derrames = reader.readJsonFile('../derrames.json')
const derramesServices = require('../services/derramesServices')

class derramesController{

    static getAllDerramesName(){
        derramesServices.getDerramesNames(derrame)
    }

    static getDerramesByUbi(ubi){
        derramesServices.filterByubication(derrames, ubi)
    }
}

module.exports = derramesController
