const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/api/v1', require('./routes/v1/v1Routes'))
app.use('/api/v2', require('./routes/v2/v2Routes'))