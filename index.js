
const config = require('./config.js');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = config.PORT
const mongoose = require('mongoose');
const recipeRoute = require('./routes/recipes');

mongoose.connect(config.DATABASE_URL)
    .then(
        () => { console.log("Database connected") }
    )
    .catch(
        () => {
            console.log('Couldn\'t connect to Database')
        }
    );
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
})


app.use("/api/recipes",recipeRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})