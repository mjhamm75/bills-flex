import express from 'express';
import _ from 'lodash';

var knex = require('knex')(require('./config/knex.js'));
import { getBills, sortBills } from './routes/bill.routes.js';

var PORT = 3000;

var app = express();
app.use(express.static('.'));

app.get('/', (req, res) => {
	res.render('./index.html')
})

app.get('/bills', (req, res) => {
	getBills(knex).then(resp => {
		res.json(sortBills(resp));
	});
})

app.listen(PORT, () => {
	console.log('Example app listening on port: %s', PORT);
});