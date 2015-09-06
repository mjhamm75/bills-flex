import express from 'express';
var knex = require('knex')({
		client: 'pg',
			connection: {
				host : 'localhost',
				user     : 'bills',
				password : 'bills',
				database : 'bills'
			}
	});;

var PORT = 3000;

var app = express();
app.use(express.static('.'));

app.get('/', (req, res) => {
	res.render('./index.html')
})

app.get('/bills', (req, res) => {
	knex.select().table('bills').then(resp => {
		res.json(resp)
	})
})

app.listen(PORT, () => {
	console.log('Example app listening on port: %s', PORT);
});