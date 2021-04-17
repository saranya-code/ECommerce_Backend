const Category = require('./category')
const Product = require('./product')
const ProductTag = require('./producttag')
const Tag = require('./tag')

Product.belongsTo(Category, {
    foreignKey: 'category_id',
});

//doubt on foreginkey
Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Product.belongsToMany(Tag,{
    through: ProductTag,
    foreignKey: 'product_id',

})

Tag.belongsToMany(Product,{
    through: ProductTag,
    foreignKey: 'tag_id',
    
})

module.exports =  {Category, Product, Tag, ProductTag};

