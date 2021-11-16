import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import './ManagaProducts.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://nameless-plains-34320.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // manage DELETE
    const handleDelete = (id) => {
        fetch(`https://nameless-plains-34320.herokuapp.com/products/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    window.confirm("Are You sure, You want to delete");
                    const remaining = products.filter(
                        (product) => product._id !== id
                    );
                    setProducts(remaining);
                    alert("Deleted Successfully");
                }
            });
    };
    return (
        // <div className="manage_products_container container w-100%">
        //     <h1 className="text-center text-danger m-3 me-5">Manage products</h1>
        //     <div className="product-container container">
        //         {products.map((product) => (
        //             <div className="single-product">
        //                 <div className="product-img">
        //                     <img src={product.image} alt="" />
        //                 </div>
        //                 <div className="product-info">
        //                     <h4>{product.name}</h4>
        //                     <p>{product.description}</p>
        //                     <h4>Price: {product.price}</h4>

        //                     <div
        //                         className="mb-3 d-flex justify-content-evenly"
        //                         style={{ textAlign: "center" }}
        //                     >
                                // <button
                                //     onClick={() => handleDelete(product._id)}
                                //     className="btn btn-danger"
                                // >
                                //     Delete
                                // </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>

        <div className="manage_products_container container w-100%">
            <h1 className="text-center text-danger m-3 me-5">Manage products</h1>

        {products.map((product) => (

            <Col className="p-2">
            <Card className="courseCard m-3 p-2 shadow" >
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                   <Card.Title><h3 className="ms-3">{product.name}</h3></Card.Title>
                    <Card.Text className="ms-3 text-secondary">
                        {product.description}
                    </Card.Text>
                </Card.Body>
    
                <div className="d-flex justify-content-between">
                <div>
                <Card.Text className="courseCard ms-3"><h4 className="ms-3">Price: ${product.price}</h4></Card.Text>
    
                </div>
                <div className="me-3">
                  <button
                                    onClick={() => handleDelete(product._id)}
                                    className="btn btn-danger"
                                >
                                    Delete
                    </button>
                </div>
                </div>
                
            </Card>
            </Col>


            ))}
            </div>







        
    );
};
export default ManageProducts;