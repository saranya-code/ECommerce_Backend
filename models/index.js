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
    through: {
        model: ProductTag,
        // unique: false, doubt
    },
    foreignKey: 'product_id',
    // onDelete: 'CASCADE', // doubt what does this do actually
    // as: 'tagProduct'
})

Tag.belongsToMany(Product,{
    through: {
        model: ProductTag,
        // unique: false,
    },
    foreignKey: 'tag_id',
    // onDelete: 'CASCADE', // doubt what does this do actually, why we need to have
    // as: 'productTag'
})

module.exports =  {Category, Product, Tag, ProductTag};

