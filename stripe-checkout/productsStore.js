const productsArray = [
    {
        id:"1",
        title:'Cofee',
        price:4.99
    },
    {
        id:"2",
        title:'Tea',
        price:5.99
    },
    {
        id:"3",
        title:'Milk',
        price:3.99
    }
]

const getProduct = (id) => {
    let productData = productsArray.find(product => product.id === id)
    return productData
}

export {productsArray,getProduct}