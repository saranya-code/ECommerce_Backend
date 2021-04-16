const router = require('express').Router();
const { Category, Product} = require('../../models');


// Get All category
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: { 
                model: Product
            },
        });
        res.status(200).json(categoryData);
    } catch (err){
        res.status(500).json(err);
    }
});


//GET by id
//CREATE using POST
//DELETE






module.exports = router;