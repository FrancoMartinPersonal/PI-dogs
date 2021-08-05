const express = require('express')
/*SI NO ANDA EN Un Futuro, ACORDARSE DE REIMPORTAR EN ROUTER EN VEZ DE REQUERIRLO DE EXPRESS Y DE AHI A ROUTER,
YA QUE ORIGINALMENTE VINO ASI EN EL ZIP*/ 
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dog = require('./dog')
 
const router = express.Router()
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dog)


module.exports = router;
