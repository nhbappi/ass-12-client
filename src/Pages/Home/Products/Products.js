import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeProducts from '../Home/HomeProducts/HomeProducts';
import './Product.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://nameless-plains-34320.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, []);
    return (
        <div className="back">
        <div className="new-pro">
        <h1 className="d-flex justify-content-center new-pro">New Arrival Products</h1>
        </div>
             <div className="m-4 p-4">
<Row xs={1} md={3} className="gaps">


 {
     products.slice(0,6).map(product => <HomeProducts
     key={product.id}
     product={product}>

     </HomeProducts>)
 }
 </Row>
</div>
    </div>
    );
};

export default Products;