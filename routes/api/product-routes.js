const router = require('express').Router();
const { Category, Product} = require('../../models');

// Get All product
router.get('/', async (req, res) => {
    try {
        const productData = await Product.findAll({
            include: { model: Category },              
        });
        res.status(200).json(productData);
    } catch (err){
        res.status(500).json(err);
    }
});

//GET product by Id
router.get('/:id', async (req, res) => {
    try {
        const productData = await Product.findByPk(req.params.id, {
             include:  { model: Category },            
        });
        res.status(200).json(productData);
    } catch (err){
        res.status(500).json(err);
    }
});

//Create new product using POST
router.post('/', async (req, res) => {
    try {
        const productData = await Product.create(req.body);
        
        res.status(200).json(productData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Update
router.put('/:id', async (req, res) => {
    try {
        const productData = await Product.update(
            {
                product_name: req.body.productName, 
                price: req.body.price,
                stock: req.body.stock        
            },
            {
                where:{
                    id: req.params.id,

            }
        });
        res.status(200).json(productData);
    } catch (err){
        res.status(500).json(err);  
    }
});


///DELETE product by Id
router.delete('/:id', async (req, res) => {
    try {
        const productData = await Product.destroy({
            where:{
                id: req.params.id
            },
        });

        if (!productData) {
            res.status(404).json({ message: 'No Product found with that id!' });
            return;
          }

        res.status(200).json(productData);
    } catch (err){
        res.status(500).json(err);
    }
});
module.exports = router;