const ProyectoModel = require("../models/Proyecto.models");

const crearProyecto = async (req, res) => {
  const proyecto = req.body;
  try {
    const newProyecto = new ProyectoModel(proyecto);
    await newProyecto.save();
    console.log("Pryecto creado con exito", newProyecto);
    res.json(newProyecto)
  } catch (error) {
      console.error('Error Creado proyecto',error)
  }
};

module.exports = {
    crearProyecto
};
