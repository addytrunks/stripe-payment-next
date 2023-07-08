'use client'

import ProductCard from "@/components/ProductCard"
import {productsArray} from "@/productsStore"
import { Col, Row } from "react-bootstrap"

export default function Home() {
  return (
    <div>
      <h1 align='center' className="p-3">Welcome to Store</h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray?.map((product,id) => (
          <ProductCard key={id} product={product}/>
        ))}
      </Row>
    </div>
  )
}
