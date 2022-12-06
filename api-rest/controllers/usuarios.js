var validator = require("validator");

var controller = {
    probando: function(req,res){
        return res.status(200).send({
            message: "Entramos a la función probando"
        })
    },

    testeando: function(req,res){
        return res.status(200).send({
            message:"Este es el metodo testeando"
        })
    },

    save: function(req, res){
        var params = req.body;
        console.log(params);
        var validate_name = !validator.isEmpty(params.nombre);
        var validate_surname = !validator.isEmpty(params.surname);
        var validate_email = validator.isEmail(params.email) && !validator.isEmpty(params.email);
        var validate_pass = !validator.isEmpty(params.pass);
        console.log(validate_pass);
        if(validate_name && validate_surname && validate_email && validate_pass){
            return res.status(200).send({
                message:"Usuario guardado"
            })
        }else{
            return res.status(200).send({
                message:"Ingresa todos los datos, y asegurate de que el correo sea valido",
                params
            })
        }
        
    },

    login:function(req,res){
        return res.status(200).send({
            message:"Metodo Login"
        })
    },

    update:function(req,res){
        return res.status(200).send({
            message:"Actualizar"
        })
    },

    delete:function(req,res){
        return res.status(200).send({
            message:"Eliminar"
        })
    },

    listarUsuarios:function(req,res){
        return res.status(200).send({
            message:"Listado de Usuarios"
        })
    }
}

module.exports = controller;