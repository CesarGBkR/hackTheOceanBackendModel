const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const derrame = await prisma.derrames.upsert({
            where: { nombre: "Guerra del Golfo" },
            update: {},
            create: {
                nombre: "Guerra del Golfo",
                fecha: "1/1/1991",
                ubicacion: 'Golfo Pérsico',
                paisesi: "Irak, Kuwait, Arabia Saudita",
                causas: "causa 1, causa2",
                consecuencias: "consecuencia 1,consecuencia 2",
                soluciones: "solucion 1, solucion2"
            },
        })

        const derrame2 = await prisma.derrames.upsert({
            where: { nombre: "Deepwater Horizon" },
            update: {},
            create: {
                nombre: "Deepwater Horizon",
                fecha: "22/4/2010",
                ubicacion: 'Deepwater Horizon',
                paisesi: "Estados Unidos",
                causas:"causa 1",
                consecuencias:"consecuencia 1, consecuencia 2, consecuencia 3",
                soluciones:"solucion 1"
            },
        })

        const derrame3 = await prisma.derrames.upsert({
            where: { nombre: "Ixtoc" },
            update: {},
            create: {
                nombre: "Ixtoc",
                fecha: "03/6/1979",
                ubicacion: "Golfo de México",
                paisesi: "México",
                causas:"causa 1, causa 2, causa 3",
                consecuencias:"consecuencia 1",
                soluciones:"solucion 1, solucion2, solucion 3"
            },
        })

        console.log('stored data');
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();