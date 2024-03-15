const express = require('express');
const app = express();
const port = 3000;
//conecta a l base de datos
const mongoose = require('mongoose');

const user = require('./user.handler.js')

//parsear el post de json a javascript
app.use(express.json())

mongoose.connect('mongodb+srv://root:rootroot@cluster0.naatpu3.mongodb.net/api-db');

app.get('/api/', user.list);
app.post('/api/send', user.create);
app.get('/api/:id', user.get)
app.put('/api/:id', user.update)
app.delete('/api/:id', user.delete)
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
    console.log(`run in: http://localhost:3000/api/`);
})
