var controller = {
    probando: function(request, response) {
        return response.status(200).send({
            message: "Usuarios Controller Prueba"
        });
    }
}

module.exports = controller;