const derramesServices = require('../services/derramesServices')

class derramesController{

    static getDerramesByUbi(derrames, ubi){
        return derramesServices.filterByubication(derrames, ubi)
    }

    static getDerramesByCountry(derrames, country){
        return derramesServices.filterByCountry(derrames, country)
    }
}

module.exports = derramesController
