'use client'

import { Header } from '@/components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import { Container } from 'react-bootstrap'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ecommerce App</title>
      </head>
      <body>
        <Container>
          <Header/>
          {children}
        </Container>
      </body>
    </html>
  )
}
