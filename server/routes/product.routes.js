const JokeController = require ("../controllers/products.controller");

module.exports = app => {
    app.get('/api/products', JokeController.findAllProducts);
    app.get('/api/products/:id', JokeController.findOneProduct);
    app.put('/api/products/:id', JokeController.updateExistingProduct);
    app.post('/api/products', JokeController.createNewProduct);
    app.delete('/api/products/:id', JokeController.deleteAnExistingProduct);
}
