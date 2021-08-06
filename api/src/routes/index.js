const express = require('express')
/*SI NO ANDA EN Un Futuro, ACORDARSE DE REIMPORTAR EN ROUTER EN VEZ DE REQUERIRLO DE EXPRESS Y DE AHI A ROUTER,
YA QUE ORIGINALMENTE VINO ASI EN EL ZIP*/ 
const { Router } = require('express');
const Dog = require('./dog');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogs')
 const temperament = require('./temperament')
const router = express.Router()
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs)
router.use('/temperament',temperament )
router.use('/dog', Dog)
module.exports = router;
