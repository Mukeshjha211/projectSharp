const path = require('path');
const http = require('http');
// const routes = require('./routes');
// const { buffer } = require('stream/consumers');
const express = require('express');
const app = express();
const adminRoutes = require('./Router/admin')
const shopRoutes = require('./Router/shop');

const { dir } = require('console');
// const bodyParser = require('body-parser');



// app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next)=>
    {
        res.status(404).send('<h1>"page Error"</h1>')
    })
const server = http.createServer(app);
server.listen(3007);