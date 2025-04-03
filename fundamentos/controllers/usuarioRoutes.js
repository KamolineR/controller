const express = require("express")
const {cadastroUsuario} = require("../controllers/usuarioController")

const router = express.Router()

//criar rota para cadastrar um novo usuario

router.post("/cadastroUsuario", cadastroUsuario)

module.exports = router;
