const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000

//dummy data until adding database
const recipes = require('./RecipesTempData').data

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods","*");
    next();
})


app.get('/api/recipes', (req, res) => {
    res.status(200).json({message:'success',recipes})
})
app.post('/api/addRecipe', (req, res) => {
    let recipe = req.body
    recipes.push(recipe);
    res.status(201).json({message:'Added successfully'});
})


app.get('/', (req, res) => {
    res.end('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})