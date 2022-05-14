// const derramesController = require("./controllers/explorerController")
const express = require('express')
const app = express ()
app.use(express.json())
const port =  3500

app.get('/', (req, res) => {
    res.send('messagge')
})

app.get('/COT/Derrames', (req, res) => {

    const Derrames = derramesController.getAllDerrames(mision)
    res.status(200).json(Derrames)
})

app.get('/COT/Derrames/:derrame', (req, res) => {
    const mision = req.params.mission
    const explorersInMission = ExplorerController.getExplorersByMissions(mision)
    res.status(200).json(explorersInMission)
})

// app.get('/v1/explorers/amount/:mission', (req, res) => {
//     const mission = req.params.mission
//     const explorersAmountInMission = ExplorerController.getExplorersAmountByMission(mission)
//     res.status(200).json({
//         'mission': mission,
//         'quantity': explorersAmountInMission
//     })
// })

// app.get('/v1/explorers/usernames/:mission', (req, res) => {
//     const mission = req.params.mission
//     const explorersUserNamesInMission = ExplorerController.getExplorersUsernameByMission(mission)
//     res.status(200).json({
//         'mission': mission,
//         'users': explorersUserNamesInMission
//     })
// })

// app.get('/v1/fizzbuzz/:score', (req, res) => {
//     const score = req.params.score
//     const trick = ExplorerController.fizzBuzz(score)
//     res.status(200).json({
//         'score': score,
//         'trick': trick
//     })
// })

app.listen(port, () => {
    console.log(`message ${port}`)
})