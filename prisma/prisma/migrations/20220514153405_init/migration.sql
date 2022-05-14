-- CreateTable
CREATE TABLE `derrames` (
    `id` INTEGER NOT NULL DEFAULT 0,
    `nombre` VARCHAR(191) NOT NULL,
    `ubicacion` VARCHAR(191) NOT NULL,
    `paisesi` VARCHAR(191) NOT NULL,
    `causas` TEXT NOT NULL,
    `consecuencias` TEXT NOT NULL,
    `soluciones` TEXT NOT NULL,

    UNIQUE INDEX `derrames_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
