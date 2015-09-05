var express = require('express');
var PORT = 3000;

var app = express();

app.get('/info', (req, res) => {
	res.json({
		jason: 'hamm'
	})
})

app.listen(PORT, () => {
	console.log('Example app listening on port: %s', PORT);
});