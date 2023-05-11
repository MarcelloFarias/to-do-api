const dataBase = require('../database/database');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/createTask', (request, response) => {
    const title = request.body.title;
    const description = request.body.description;
    const date = new Date().toLocaleDateString();
    const status = 'pendente';

    dataBase.query('INSERT INTO tb_task (titulo, descricao, dataCriacao, status) VALUES (?, ?, ?, ?)', [title, description, date, status], (error, result) => {
        if(error) {
            console.log('Fail to register task !');
            response.send(error);
            console.log(error);
        }

        response.send({status: 200, message: 'Successfully registered task'});
        console.log(result);
    });
});

module.exports = app;