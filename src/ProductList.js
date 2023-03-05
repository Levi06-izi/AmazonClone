import React from "react";

function ProductList1() {
    const products =[
      {
        id: 1,
        title: 'Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free',
        image: 'https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg',
        price: 19.99,
        rating: 5
      },
      {
        id: 2,
        title: 'Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free',
        image: 'https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg',
        price: 19.99,
        rating: 5
      },
      {
        id: 3,
        title: 'Scout Regiment Jacket - Full sleeve available for all sizes and home delivery is free',
        image: 'https://www.hjacket.com/wp-content/uploads/2021/08/attack-on-titan-jacket.jpg',
        price: 19.99,
        rating: 5
      }
    ]
    const ProductList1 = products.map(product => <Product key={product.id})
  }