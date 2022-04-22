'use strict'

const express = require('express');
const app = express();
const { Connection } = require('./configs/database');
const router = require('./routes/routes');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3030;

const onConnect = () => {
	return new Promise((resolve, reject)=> {
		const { connection } = new Connection();

		connection.authenticate()
			.then( () => resolve('DATABASE CONNECTION ESTABLISHED') )
			.catch( (error) => reject(`Error ${error}`) );
	});
}

onConnect()
.then( async () => {
    app.use('/', router );

    app.listen(PORT, () => { 
        console.log(`server running http://${HOST}:${PORT}`)
    });
})
.catch( (error) => console.log(error));