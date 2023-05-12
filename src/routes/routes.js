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

app.get('/getAllTasks', (request, response) => {
    dataBase.query('SELECT * FROM tb_task', (error, result) => {
        if(error) {
            console.log('Fail to get all tasks !');
            response.send(error);
            console.log(error);
        }

        response.send(result);
    });
});

app.delete('/deleteTask/:id', (request, response) => {
    const { id } = request.params;

    dataBase.query('DELETE FROM tb_task WHERE id = ?', [id], (error, result) => {
        if(error) {
            console.log('Fail to delete a task !');
            response.send(error);
            console.log(error);
        }

        response.send(result);
    });
});

module.exports = app;