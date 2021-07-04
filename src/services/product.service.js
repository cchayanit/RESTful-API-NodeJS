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


let count = products.length

// exports.getProducts = (req, res) => {  //route //http medthod => GET POST...
//     res.json(products)
// }
// exports.findAll =  products => error findAll is not a function
exports.findAll = () => products




//******1
// exports.getProductByPrice = (req, res) => {
//     const { min, max } = req.query; //destructuring
//     const result = products.filter(product => product.price >= min && product.price <= max)
//     res.json(result)
// }

//******2
// exports.findByPrice = (min, max) => {  
//     const result = products.filter(product => product.price >= min && product.price <= max)
//     return result
// }

exports.findByPrice = (min, max) => products.filter(product => product.price >= min && product.price <= max) //arrow return 





// exports.getProduct = (req, res) => { 
//     const result = products.filter(product => product.id == req.params.id)
//     if (result.length > 0) {
//         res.json(result[0])
//     } else {
//         res.status(404).json({})
//     }
// }
exports.findById = (id) => products.filter(product => product.id == id)




// exports.add = (req, res) => {
//     const { name, price, stock } = req.body //get data like json format
//     count = count + 1
//     const product = new Product(count, name, price, stock)
//     products.push(product)
//     //201=> created
//     res.status(201).json(product)
// }
exports.add = (product, file) => {
    count = count + 1
    const productAdd = new Product(count, product.name, file ? file.filename : "", product.price, product.stock)
    products.push(productAdd)
    return productAdd
}




// exports.updateProduct = (req, res) => {
//     const id = req.params.id
//     const index = products.findIndex(product => product.id == id)
//     if (index !== -1) {
//         const { name, price, stock } = req.body
//         const product = new Product(Number(id), name, "", price, stock)
//         products[index] = product
//         res.json(product)
//     } else {
//         res.status(404).json({})
//     }
// }
exports.update = (id, product,file) => {
    const index = products.findIndex(product => product.id == id)
    if (index !== -1) {
        const productUpdated = new Product(Number(id), product.name, file?file.filename :products[index].image, product.price, product.stock)
        products[index] = productUpdated
        return productUpdated
    }
    return null
}




// exports.deleteProduct = (req, res) => {
//     const id = req.params.id
//     const index = products.findIndex(product => product.id == id)
//     if (index !== -1) {
//         products.splice(index, 1)
//         res.status(204).json()   //204 no content
//     } else {
//         res.status(404).json({})
//     }
// }
exports.remove = (id) => {
    const index = products.findIndex(product => product.id == id)
    if (index !== -1) {
        products.splice(index, 1)
        return true
    }
    return false
}