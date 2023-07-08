import { productsArray,getProduct } from '@/productsStore'
import {createContext,useState} from 'react'

export const CartContext = createContext({
    items:[],
    getProductQuantity:() => {},
    addOneToCart:() => {},
    removeFromCart:() => {},
    deleteFromCart:() => {},
    getTotalCost:() => {},
})

export const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([])

    const getProductQuantity = (id) => {
        const quantity = cartProducts.find(product => product?.id === id)?.quantity
        if (quantity === 0){
            return 0;
        }
        return quantity
    }

    const addOneToCart = (id) => {
        const quantity = getProductQuantity(id)
        if(quantity == 0){
            // Product is not in cart
            setCartProducts([...cartProducts,{id:id,quantity:1}])
        }else{
            // Product is already in cart
            setCartProducts(cartProducts.map(product => product.id ===id ? {...product,quantity:product.quantity+1}:product))
        }
    }

    const deleteFromCart = (id) => {
        setCartProducts(prevState => prevState.filter(currProduct => {
            return currProduct.id !=id
        }))
    }

    const removeFromCart = (id) => {
        const quantity = getProductQuantity(id)

        if(quantity==1){
            deleteFromCart(id)
        }else{
            setCartProducts(cartProducts.map(product => product.id ===id ? {...product,quantity:product.quantity-1}:product))
        }
    }

    const getTotalCost = () => {
        let totalCost = 0
        cartProducts.map((cartItem) => {
            const productData = getProduct(cartItem.id);
            totalCost+=(productData.price*cartItem.quantity)
        })
        return totalCost
    }
   

    const contextValues = {
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCost,
    }

    return <CartContext.Provider value={contextValues}>
        {children}
    </CartContext.Provider>
}

export default CartProvider