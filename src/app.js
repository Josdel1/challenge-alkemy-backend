const express = require('express')
const app = express();


const PORT = process.env.PORT || 3000

app.get('/', (req,res) => res.json('testing'));

app.listen(PORT, () => console.log('server running on http://localhost:'+PORT));