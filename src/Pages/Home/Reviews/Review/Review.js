import { Rating } from '@mui/material';
import React from 'react';

const Review = ({ review } ) => {
    const { userName, text, email, rating, image } = review;
    return (
        <div className="course-wrapper shadow border rounded p-5 mb-5">
            <div className="pic-div">
                <img src={email} alt="" />
            </div>
            <div className="course-card-info">
                <img src={image} alt="" />
                <h1 className="course-price">{userName}</h1>
                <p className="course-small-parse">
                    <span className="course-people">
                        {text}
                    </span>
                   
                    <p className="course-rating">
                        <Rating
                            name="half-rating-read"
                            defaultValue={rating}
                            precision={0.5}
                            readOnly
                        />
                    </p>
                </p>
            </div>
        </div>
    );
};

export default Review;