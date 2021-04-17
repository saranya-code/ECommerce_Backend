const router = require('express').Router();
const { Category, Product} = require('../../models');


// Get All category
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll({
            include: { model: Product },
        });
        res.status(200).json(categoryData);
    } catch (err){
        res.status(500).json(err);
    }
});

//GET Category by Id
router.get('/:id', async (req, res) => {
    try {
        const categoryData = await Category.findByPk(req.params.id, {
             include:  { model: Product },
        });
        res.status(200).json(categoryData);
    } catch (err){
        res.status(500).json(err);
    }
});

//Create new catogory using POST
router.post('/', async (req, res) => {
    try {
        const categoryData = await Category.create(req.body);
        
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Update
router.put('/:id', async (req, res) => {
    try {
        const categoryData = await Category.update(
            {
                category_name: req.body.category_name, 
              
            },
            {
                where:{
                    id: req.params.id,
            }
        });
        res.status(200).json(categoryData);
        
    } catch (err){
        res.status(500).json(err);  
    }
});

//DELETE category by Id
router.delete('/:id', async (req, res) => {
    try {
        const categoryData = await Category.destroy({
            where:{
                id: req.params.id
            },
        });
        res.status(200).json(categoryData);
    } catch (err){
        res.status(500).json(err);
    }
});
module.exports = router;