import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Form from './Form/Form';


const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
 
    useEffect(() => {
        fetch(`https://nameless-plains-34320.herokuapp.com/products/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));
    }, []);
     return (
         <>
             <Navigation></Navigation>
 
             <Container className="mt-3">
                 <Row>
                     <Col xs={12} md={8} lg={8}>
                         <div className="service-img">
                             <Image width="400px" src={service?.image} thumbnail />
                          
                         </div>
                         <div className="service-info p-3">
                             <h3>{service?.name}</h3>
                             <h4>
                                 <span>Price:</span> {"$" + service?.price}
                             </h4>
                             <p>{service?.description}</p>
                         </div>
                     </Col>
                     <Col xs={12} md={4} lg={4}>
                         <h5 className="text-center">
                             Your Booking Id: {serviceId}
                         </h5>
                         {<Form service={service}></Form>}
                     </Col>
                 </Row>
             </Container>
             <Footer></Footer>
         </>
     );
 };

export default Booking;