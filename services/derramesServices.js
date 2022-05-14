// const reader = require('../utils/reader')
// const derrames = reader.readJsonFile('../derrames.json')

class explorerService {
    static getDerramesNames(derrames){
        var name = derrames.map(function (element) {
            return element.ubicacion
        })
        console.log(name)
        return name
    }

    static filterByubication(derrames, ubication){
        var filterByubicaion = derrames.filter((derrames) => derrames.ubicacion == ubication);
        console.log(filterByubicaion)
        return filterByubicaion
    }
}

// console.log(derrames)
// explorerService.getDerramesNames(derrames)
// explorerService.filterByubication(derrames, 'Golfo de México')

module.exports = explorerService