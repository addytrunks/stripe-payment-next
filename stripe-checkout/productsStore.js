const productsArray = [
    {
        id:"price_1NRUZuH6wvRonDbGxIitsVeb",
        title:'Cofee',
        price:4.99
    },
    {
        id:"price_1NRUbiH6wvRonDbGNp9jYLFp",
        title:'Tea',
        price:5.99
    },
    {
        id:"price_1NRUcIH6wvRonDbGeo5wP0Rq",
        title:'Milk',
        price:3.99
    }
]

const getProduct = (id) => {
    let productData = productsArray.find(product => product.id === id)
    return productData
}

export {productsArray,getProduct}