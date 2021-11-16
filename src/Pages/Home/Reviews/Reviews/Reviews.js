import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Review from "../Review/Review"

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://nameless-plains-34320.herokuapp.com/review")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);


    return (
        <div className="container mt-5">
            <Row className="">
                <Col xs={1} md={2}></Col>
                <Col xs={12} md={7}>
                    <h1 className="mt-5 text-center">
                        OUR{" "}
                        <span className="text-info heading">
                            Cycle Reviews
                        </span>{" "}
                    </h1>
                    <h4 className="text-info text-center">
                        Our Cycle are specialized in their field and have more
                        than 10 years of experiences. Aenean massa cum sociis
                        Theme natoque.
                    </h4>
                </Col>
                <Col xs={1} md={3}></Col>
            </Row>

            <Row xs={1} md={3} xxl={4} className="g-4  mt-5 text-center">
                {reviews.map((review) => (
                    <Review key={review.id} review={review}></Review>
                ))}
            </Row>
        </div>

    );
};

export default Reviews;