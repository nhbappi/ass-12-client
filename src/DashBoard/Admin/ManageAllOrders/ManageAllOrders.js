import React from 'react';
import { Button, Card, Col, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

// import useCart from '../../../hooks/useCart';
// import './allorders.css'

const ManageAllOrders = (props) => {
    const { product, setProduct } = useAuth();
    const { _id, name, description, user, image, price, address, phone, approval } = props;
    const handelApproveIteam = id => {
        const procced = window.confirm('are you really want to approve this Order?');
        const approvedPakage = product.filter(pakage => pakage._id === id)
        const url = `https://nameless-plains-34320.herokuapp.com/books/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(approvedPakage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated data sucessfully');

                }
            })
    }
    const handelRemoveiteam = _id => {
        const procced = window.confirm('are you really want to cancel this Order?');
        if (procced) {
            const url = `https://nameless-plains-34320.herokuapp.com/products/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingCart = product.filter(product => product._id !== _id)
                        setProduct(remainingCart);
                        alert('Your order Canceled Successfully');
                    }
                })
        }
    }
    return (

        <Col>
            <Card className="allorders-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>Product Name:{product.name}</Card.Title>
                    <Card.Title>User Name:{user}</Card.Title>
                    <Card.Text>
                        Price :{product.price}$
                    </Card.Text>
                    <Card.Text>
                        {product.description}
                    </Card.Text>
                    {
                        approval === "Pending" ? <Card.Text>
                            Approval: {approval} {<Spinner className="spinner-animation" animation="grow" variant="danger" />}
                        </Card.Text> : <Card.Text>
                            Approval: {approval} {<Spinner className="spinner-animation" animation="grow" variant="success" />}
                        </Card.Text>
                    }
                    <Card.Text>
                        Address :{address}
                    </Card.Text> <Card.Text>
                        Phone :{phone}
                    </Card.Text>

                </Card.Body>
                {
                    approval !== 'Approved' && <Button style={{ 'margin': '25px 0' }} onClick={() => handelApproveIteam(_id)} variant="primary" >Approve</Button>
                }

                <Button onClick={() => handelRemoveiteam(_id)} variant="primary" > Cancel Order</Button>
            </Card>
        </Col >

    );
};

export default ManageAllOrders;