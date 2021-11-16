import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <Carousel className="mb-5 pb-5">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ridestyle.7uptheme.net/wp-content/uploads/2019/02/slide1-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="fs-1 fw-bold">RIDESIDE SHOPPING</h1>
            <p className="fs-1 fw-bold">We provide a best service in your are</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ridestyle.7uptheme.net/wp-content/uploads/2019/03/slide1-3.jpg"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3 className="fs-1 fw-bold">Mountain Cycle</h3>
            <p className="fs-1 fw-bold">This is fast in your life</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ridestyle.7uptheme.net/wp-content/uploads/2019/02/slide1-2.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3 className="fs-1 fw-bold">Dart Cycle</h3>
            <p className="fs-1 fw-bold">Feel you like a ai plane</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Header;