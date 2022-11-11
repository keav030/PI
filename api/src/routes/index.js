const { Router } = require('express');
const { getDogs} = require('../controllers/dogs.controller.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs', getDogs)

module.exports = router;
