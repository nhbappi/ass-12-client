import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import HomeProducts from '../../Home/Home/HomeProducts/HomeProducts';
import Navigation from '../../Shared/Navigation/Navigation';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://nameless-plains-34320.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <Navigation></Navigation>
        <div>
        <h1 className="d-flex justify-content-center new-pro">Best Products</h1>
        </div>
            <div>
                <Row xs={1} md={3} className="gaps">


                {
                    products.map(product => <HomeProducts
                    key={product.id}
                    product={product}>

                    </HomeProducts>)
                }
                </Row>
            </div>
    </div>
    );
};

export default AllProducts;