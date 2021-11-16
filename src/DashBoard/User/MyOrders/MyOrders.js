import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://nameless-plains-34320.herokuapp.com/books?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, [user.email, token]);

    // manage DELETE
    const handleDelete = (id) => {
        fetch(`https://nameless-plains-34320.herokuapp.com/books/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    window.confirm("Are You sure, You want to delete");
                    const remaining = orders.filter(
                        (order) => order._id !== id
                    );
                    setOrders(remaining);
                    alert("Deleted Successfully");
                }
            });
    };
    return (
        <div className="float-right">
            {!user.email ? (
                <div style={{ textAlign: "center" }}>
                    <CircularProgress sx={{ mt: 15 }} />
                </div>
            ) : (
                <div>
                    <h3 style={{ textAlign: "center" }}>
                        My Order: {orders.length}
                    </h3>
                    {orders.map((order) => (
                        <Container key={order._id} order={order}>
                            <Row>
                                <Col xs={12} md={6} lg={5}>
                                    <Image
                                        width="400px"
                                        src={order.image}
                                        thumbnail
                                    />
                                </Col>

                                <Col xs={12} md={12} lg={5}>
                                    <Card.Body>
                                        <h4>{order.name}</h4>
                                        <Card.Text>
                                            {order.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>

                                <Col xs={12} md={6} lg={2}>
                                    <h5>{order.Price}</h5>
                                    <button
                                        onClick={() => handleDelete(order._id)}
                                        className="btn btn-danger"
                                    >
                                        Delete
                                    </button>
                                </Col>
                            </Row>
                        </Container>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;