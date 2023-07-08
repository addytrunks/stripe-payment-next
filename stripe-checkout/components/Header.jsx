'use client'

import { useState } from "react"
import { Button,Container,Navbar,Modal } from "react-bootstrap"

export const Header = () => {

  const [show,setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href='/'>Ecommerce Store</Navbar.Brand>
        <Navbar.Toggle/>

        <Navbar.Collapse className="justify-content-end">
            <Button onClick={handleShow}>Cart 0 Items</Button>
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
