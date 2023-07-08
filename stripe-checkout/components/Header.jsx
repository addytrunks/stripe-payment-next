'use client'

import { CartContext } from "@/context/cartContext"
import { useContext, useState } from "react"
import { Button,Container,Navbar,Modal } from "react-bootstrap"

export const Header = () => {

  const cart = useContext(CartContext)

  const [show,setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productsCount = cart.items.reduce((sum,product) => sum+product.quantity,0)

  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle/>

        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart ({productsCount}) Items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Modal Body</h1>
        </Modal.Body>
      </Modal>
    </div>
  )
}
