'use client'

import { CartContext } from "@/context/cartContext"
import { useContext } from "react"
import { Button, Card, Col, Form, Row } from "react-bootstrap"

const ProductCard = ({product}) => {

  const cart = useContext(CartContext)
  const productQuantity = cart.getProductQuantity(product.id)

  return (
    <Card>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>${product.price}</Card.Text>
            {productQuantity>0 ?
             <>
                <Form as={Row}>
                  <Form.Label column="true" sm="6">In Cart:{productQuantity}</Form.Label>
                  <Col sm="6">
                    <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(product.id)}>+</Button>
                    <Button sm="6" className="mx-2" variant="danger" onClick={() => cart.removeFromCart(product.id)}>-</Button>
                  </Col>
                </Form>
                <Button className="my-2" variant="danger" onClick={() => cart.deleteFromCart(product.id)}>Remove From Cart</Button>
             </>
             :
             <></>
            }
            <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default ProductCard