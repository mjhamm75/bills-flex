var express = require('express');
var PORT = 3000;

var app = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
	res.render('./index.html')
})

app.get('/bills', (req, res) => {
	res.json({
		jason: 'hamm'
	})
})

app.listen(PORT, () => {
	console.log('Example app listening on port: %s', PORT);
});