const derramesController = require('../lib/controllers/derramesController')
const express = require('express')
const app = express ()
app.use(express.json())
const port = process.envPORT ||  3500

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.get('/derrames', async (req, res) => {
    const getAllDerramesNames =  await prisma.derrames.findMany({});
    res.json(getAllDerramesNames);
});

app.get('/derrames/:id', async (req, res) => {
    const id = req.params.id;
    const derrames = await prisma.derrames.findUnique({where: {id: parseInt(id)}});
    res.json(derrames);
});

app.get('/derrames/country/:country', async (req, res) => {
    const country = req.params.country
    const getAllDerramesNames =  await prisma.derrames.findMany({});
    var derramesByCountry = derramesController.getDerramesByCountry(getAllDerramesNames, country)
    res.json(derramesByCountry);
});

app.get('/derrames/ubication/:ubi', async (req, res) => {
    const ubi = req.params.ubi
    const getAllDerramesNames =  await prisma.derrames.findMany({});
    var derramesByUbi = derramesController.getDerramesByUbi(getAllDerramesNames, ubi)
    res.json(derramesByUbi);
});

app.post('/derrames', async (req, res) => {
    const derrame = {
    nombre: req.body.nombre,
    ubicacion: req.body.ubicacion,
    fecha:req.body.fecha,
    paisesi: req.body.paisesi,
    causas: req.body.causas,
    consecuencias: req.body.consecuencias,
    soluciones: req.body.soluciones
    };
    const message = 'Stored data';
    await prisma.derrames.create({data: derrame});
    return res.json({message});
});

app.put('/derrames/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.derrames.update({
		where: {
			id: id
		},
		data: {
			nombre: req.body.nombre,
            ubicacion: req.body.ubicacion,
            fecha: req.body.fecha,
            paisesi: req.body.paisesi,
            causas: req.body.causas,
            consecuencias: req.body.consecuencias,
            soluciones: req.body.soluciones
		}
	})

	return res.json({message: `Derrame with id: ${id} updated`});
});

app.delete('/derrames/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.derrames.delete({where: {id: id}});
	return res.json({message: `Derrame with id: ${id} deleted`});
});



app.listen(port, () => {
    console.log(`message ${port}`)
})