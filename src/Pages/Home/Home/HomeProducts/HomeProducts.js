import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomeProducts.css'

const HomeProducts = (props) => {
    const {_id, name, image, price, description} = props.product;
    return (
        <Col className="p-2">
        <Card className="courseCard m-3 p-2 shadow" >
            <Card.Img variant="top" src={image} />
            <Card.Body>
               <Card.Title><h3 className="ms-3">{name}</h3></Card.Title>
                <Card.Text className="ms-3 text-secondary">
                    {description}
                </Card.Text>
            </Card.Body>

            <div className="d-flex justify-content-between">
            <div>
            <Card.Text className="courseCard ms-3"><h4 className="ms-3">Price: ${price}</h4></Card.Text>

            </div>
            <div className="me-3">
              <Link to={`/booking/${_id}`}>
              <button className="btn btn-primary rounded text-white">BUY NOW</button>
              </Link>
            </div>
            </div>
            
        </Card>
        </Col>
    );
};

export default HomeProducts;
