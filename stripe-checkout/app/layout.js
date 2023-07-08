'use client'

import { Header } from '@/components/Header'
import CartProvider from '@/context/cartContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/app/globals.css'
import { Container } from 'react-bootstrap'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ecommerce App</title>
      </head>
      <body>
        <CartProvider>
          <Container>
            <Header/>
            {children}
          </Container>
        </CartProvider>
      </body>
    </html>
  )
}
