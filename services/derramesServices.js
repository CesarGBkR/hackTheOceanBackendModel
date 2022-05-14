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
        var filterByCountry = derrames.filter((derrames) => derrames.paisesI.find(element => element == country));
        console.log(filterByCountry)
    }
}

module.exports = explorerService