const router = require('express').Router();
const { Category, Product,Tag} = require('../../models');

// Get All Tag
router.get('/', async (req, res) => {
    try {
        const tagData = await Tag.findAll({
            // include: { model: Category },             
        });
        res.status(200).json(tagData);
    } catch (err){
        res.status(500).json(err);
    }
});

//GET tag by Id
router.get('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id, {
            //  include:  { model: Category },            
        });
        res.status(200).json(tagData);
    } catch (err){
        res.status(500).json(err);
    }
});

//Create new tag using POST
router.post('/', async (req, res) => {
    try {
        const tagData = await Tag.create(req.body);
        
        res.status(200).json(tagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Update
router.put('/:id', async (req, res) => {
    try {
        const tagData = await Tag.update(
            {
                tag_name: req.body.tag_name
                
            },
            {
                where:{
                    id: req.params.id,
            }
        });
        res.status(200).json(tagData);
    } catch (err){
        res.status(500).json(err);  
    }
});

///DELETE tag by Id
router.delete('/:id', async (req, res) => {
    try {
        const tagData = await Tag.destroy({
            where:{
                id: req.params.id
            },
        });
        res.status(200).json(tagData);
    } catch (err){
        res.status(500).json(err);
    }
});
module.exports = router;