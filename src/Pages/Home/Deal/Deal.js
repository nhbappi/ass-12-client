import React from 'react';
import './Deal.css'
import Photo from '../../../Images/header_bike_shop_marketing_ideas.jpg';

const Deal = () => {
    return (
        <div className="d-flex container off-part">
<div className="off mb-5">
  <h3>For Couple We Provide</h3>
  <h1>25% OFF</h1>
  <h5>SPEND A BEST RIDE WITH YPUR PARTNER</h5>
  <button className="bg-warning text-dark mb-3 fs-5 rounded m-2">BOOK NOW</button>
</div>
<div className="off-photo">
     <img className="" src="https://us.123rf.com/450wm/yupiramos/yupiramos1807/yupiramos180704960/114994738-just-married-couple-in-bicycle-and-balloons-helium-with-shape-heart-vector-illustration-design.jpg?ver=6" alt="" />
</div>
</div>
    );
};

export default Deal;