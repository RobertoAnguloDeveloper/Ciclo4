var controller = {
    create: function(request, response) {
        return response.status(200).send({
            message: "CREATE controller/usuarios"
        });
    },

    read : (request, response) => {
        return response.status(200).send({
            message: "READ controller/usuarios"
        });
    },

    update: function(request, response) {
        return response.status(200).send({
            message: "UPDATE controller/usuarios"
        });
    },

    delete : (request, response) => {
        return response.status(200).send({
            message: "DELETE controller/usuarios"
        });
    }
}

module.exports = controller;