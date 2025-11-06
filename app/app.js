require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const restaurantsRoutes = require('../routes/restaurants');
const ordersRoutes = require('../routes/orders');

const app = express();
app.use(bodyParser.json());
app.use('/public', express.static('public'));

app.use('/restaurants', restaurantsRoutes);
app.use('/orders', ordersRoutes);

app.get('/', (req, res) => res.sendFile(require('path').resolve(__dirname, '..', 'public', 'index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
