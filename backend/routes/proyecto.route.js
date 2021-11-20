const { Router } = require('express');
const { crearProyecto } = require('../controllers/proyecto.controllers');
const router = Router();

router.post('/api/proyectos', crearProyecto)

module.exports = router;
