const Product = require("../models/products.model")

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allTheProducts) => {
            res.json({ products: allTheProducts })
        })
        .catch(err => res.json(err));
}


module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json({ product: oneProduct })
        })
        .catch(err => res.json(err));
}


module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ product: newlyCreatedProduct })
        })
        .catch(err => res.json(err));
}


module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ product: updatedProduct })
        })
        .catch(err => res.json(err));
}


module.exports.deleteAnExistingProduct = (req, res) => {
    Product.remove({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch(err => res.json(err));
}
