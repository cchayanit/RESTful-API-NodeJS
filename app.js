const express = require('express')
const app = express()

class Product {
    constructor(id, name, image, price, stock) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.stock = stock
    }
}

const products = [
    new Product(1, "Macbook Pro", "", 9000, 0),
    new Product(2, "Miphone XS", "", 4000, 10),
]

// app.get('/products', function (req, res) {  //route //http medthod => GET POST...
// res.json(products)
// })

app.get('/products', (req, res) => {  //route //http medthod => GET POST...
    res.json(products)
})

app.get('/products/price', (req, res) => {
    const { min, max } = req.query; //destructuring
    const result = products.filter(product => product.price >= min && product.price <= max)
    res.json(result)
})

app.get('/products/:id', (req, res) => {  //route //http medthod => GET POST...
    const result = products.filter(product => product.id == req.params.id)
    if (result.length > 0) {
        res.json(result[0])
    } else {
        res.status(404).json({})
    }
})

const port = 3000
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
    console.log("Press Ctrl + C to quit");
})


// //get => param , query ****param****
// //http://localhost:3000/say/name/age 
// app.get('/say/:name/:age', function (req, res) {
//     res.send(`hello ${req.params.name},${req.params.age}`)
// })

// //****query****
// //localhost:3000/search?name=xxxx&price=xxxx
// app.get('/search', function (req, res) {
//     res.send(`search: ${req.query.name},${req.query.price}`)
// })
