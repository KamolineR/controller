const bcrypt = require("bcrypt")

const bcrypt = require("bcrypt")
const Usuario = require("../model/Usuario")

const cadastroUsuario = (req, res) =>{
    const {nome, email, senha} = req.body;

    if (!nome || !email || !senha){
        return res.status(404).json({error: "Todos os campos são obrigatórios"})
    }


    Usuario.findOne({where: {email}})
        .then((usuarioExistente) =>{
            if(usuarioExistente){
                throw{status:400, message:"Email ja cadastrado"}
            }
            return bcrypt.hash(String(senha), 10)
        })
        .then((senhaHash) =>{
            //create table
            return Usuario.create({nome, email, senha:senhaHash});
        })
        .then((novoUsuario) =>{
            res.status201.json({message:"Usuario cadastrado com sucesso", usuario: novoUsuario})
        })
        .catch((error)=>{
            if(error.status){
                return res.status(error.status).json({error: error.message})
            }
            console.log("Erro ao cadastrar usuario: ", error)
            res.status(500).json({error: "Erro interno do servidor"})
        })
}
module.export={cadastroUsuario}