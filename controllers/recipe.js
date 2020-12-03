const Recipe = require('../model/recipe');


const getAllRecipes = async (req, res) => {
    Recipe.find().then(
        (recipes) => {
            res.status(200).json({ message: 'Success', recipes })
        }
    )
        .catch(
            () => {
                res.status(404).json({ message: 'Couldn\'t retrieve Recipes' })
            }
        )
}

const getRecipe = async (req, res) => {
    let recipeID = req.params.id;
    Recipe.findById(recipeID).then(
        (recipe) => {
            if (recipe != null)
                res.status(200).json({ message: 'Found', recipe });
            else
                res.status(404).json({ message: 'Not found' });
        }
    ).catch(
        () => {
            res.status(404).json({ message: 'Not found' });
        }
    )
}

const addRecipe = async (req, res) => {
    let recipe = new Recipe({
        name: req.body.name,
        descripition: req.body.descripition,
        imageURL: req.body.imageURL
    })
    recipe.save().then(
        (recipe) => {
            res.status(201).json({ message: 'Added successfully', id: recipe._id });
        }
    )
        .catch(
            () => {
                res.status(404).json({ message: 'Couldn\'t add recipe' });
            }
        )
}

module.exports = { getAllRecipes, addRecipe, getRecipe }