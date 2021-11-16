import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Blogs = () => {
    return (
      <div className="mt-5">
      <div>
      <h1 className=" text-center new-pro mb-5">Blogs</h1>

      </div>
      
      <CardGroup>
        <Card className="ms-3 me-3 shadow">
          <Card.Img variant="top" src="https://789378.smushcdn.com/1504755/wp-content/uploads/2021/03/Biking-as-Physical-and-Spiritual-Disciplines.jpg?lossy=1&strip=1&webp=1" />
          <Card.Body>
            <Card.Title className="fs-4">Cycle Life</Card.Title>
            <Card.Text>
              This is a wider cycle with supporting us below as a natural lead-in to
              additional life. This cycle is a little bit longer.
            </Card.Text>
          </Card.Body>
          <div className="btn-blog" >
          <button className="bg-warning text-dark fs-5 m-2 rounded ms-3 mb-3">Read More</button>
          </div>
        </Card >
        <Card className="ms-3 me-3 shadow">
          <Card.Img variant="top" src="https://www.changicitypoint.com.sg/files/images/anchor-body.png" />
          <Card.Body>
            <Card.Title className="fs-4">Travel Mania</Card.Title>
            <Card.Text>
            This is a wider cycle with supporting us below as a natural lead-in to
            additional life. This cycle is a little bit longer.
            </Card.Text>
          </Card.Body>
          <div className="btn-blog" >
          <button className="bg-warning text-dark fs-5 m-2 rounded ms-3 mb-3">Read More</button>
          </div>
        </Card>
        <Card className="ms-3 me-3 shadow">
          <Card.Img variant="top" src="https://i.pinimg.com/originals/0d/15/d8/0d15d8744fe267e05e703bfe1c6ece74.jpg" />
          <Card.Body>
            <Card.Title className="fs-4">Jangle Cycle</Card.Title>
            <Card.Text>
            This is a wider cycle with supporting us below as a natural lead-in to
            additional life. This cycle is a little bit longer.
            </Card.Text>
          </Card.Body>
          <div className="btn-blog" >
          <button className="bg-warning text-dark fs-5 m-2 rounded ms-3 mb-3">Read More</button>
          </div>
          
        </Card>
      </CardGroup>
      </div>  
    );
};

export default Blogs;