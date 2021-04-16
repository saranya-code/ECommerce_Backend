const router = require('express').Router();
const categoryRoute = require('./category-routes');
const productRoute = require('./product-routes');
const productTagRoute = require('./category-routes')
const tagRoute = require('./tag-routes');

router.use('/category', categoryRoute);
router.use('/product', productRoute);
router.use('/tag', tagRoute);
router.use('/producttag', productTagRoute);


module.exports = router;