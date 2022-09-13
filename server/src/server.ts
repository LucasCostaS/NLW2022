import express from 'express';

const app = express()

app.get('/ads',  (request, response) => {
    return response.json([
        {id: 1, name: 'batata'},
        {id: 2, name: 'mamao'},
        {id: 3, name: 'banana'},
        {id: 4, name: 'limao'}
    ])
});

app.listen(3333)