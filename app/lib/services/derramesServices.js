const reader = require('../utils/reader')
const derrames = reader.readJsonFile('../derrames.json')

class explorerService {
    static derramesNames(derrames){
        var name = derrames.map(function (element) {
            return element.ubicacion
        })
        return name
    }

    static filterByubication(derrames, ubication){
        var filterByubicaion = derrames.filter((derrames) => derrames.ubicacion == ubication);
        return filterByubicaion
    }

    static filterByCountry(derrames, country){
        var filterByCountry = derrames.filter((derrames) => derrames.paisesI == country);
        return filterByCountry
    }
}

console.log(derrames)
// explorerService.getDerramesNames(derrames)
// explorerService.filterByubication(derrames, 'Golfo de México')
// explorerService.filterByCountry(derrames, 'México')
module.exports = explorerService