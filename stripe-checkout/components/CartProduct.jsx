import { CartContext } from "@/context/cartContext"
import { getProduct } from "@/productsStore"
import { useContext } from "react"
import { Button } from "react-bootstrap"


const CartProduct = ({id,quantity}) => {
    const carts = useContext(CartContext)
    const product = getProduct(id)
  return (
    <div>
        <h3>{product.title}</h3>
        <p>{quantity} total</p>
        <p>${(product.price * quantity).toFixed(2)}</p>
        <Button size="sm" onClick={() => carts.deleteFromCart(id)} variant="danger">Remove</Button>
        <hr />
    </div>
  )
}

export default CartProduct