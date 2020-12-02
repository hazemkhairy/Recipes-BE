const Recipe = require('../model/recipe');


const getAllRecipes = async (req, res) => {
    let recipes = await Recipe.find();
    res.status(200).json({ message: 'success', recipes })
}

const addRecipe = (req, res) => {
    let recipe = new Recipe({
        name: req.body.name,
        descripition: req.body.descripition,
        imageURL: req.body.imageURL
    })
    recipe.save();

    res.status(201).json({ message: 'Added successfully' });
}

module.exports = { getAllRecipes, addRecipe }