import { Rating, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Review.css';

const Review = () => {
        const [review, setReview] = useState({});
        const { user } = useAuth();
        const [users, setUsers] = useState("");
        const [value, setValue] = React.useState(2);

        const {
            register,
            handleSubmit,
            reset,
            formState: { errors },
        } = useForm();

        let updateName = "";
        const handleNameChange = (e) => {
            const Name = e.target.value;
            updateName = updateName + Name;
            setUsers(updateName);
        };

        // send users booking form data
        const onSubmit = (data) => {
            const { email, text, userName } = data;
            const rating = value;
            const review = { email, text, userName, rating };

            fetch("https://nameless-plains-34320.herokuapp.com/review", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(review),
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.insertedId) {
                        alert("Review send Successfully");
                        reset();
                    }
                });
        };

        return (
            <div>
                <div className="col-sm-12 col-md-12 booking_form">
                    <div className="row single_service_wrapper">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto booking_wrapper">
                            <div
                                style={{ width: "600px", margin: "0 auto" }}
                                className=" text-center"
                            >
                                <h2>Send A Review</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-floating mb-3 mt-4">
                                        <input
                                            {...register("userName")}
                                            defaultValue={
                                                user?.displayName || users || ""
                                            }
                                            onChange={handleNameChange}
                                            type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            required
                                            placeholder=" "
                                        />
                                        <label htmlFor="floatingInput">
                                            Full Name
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            {...register("email")}
                                            defaultValue={user.email}
                                            type="email"
                                            className="form-control"
                                            id="floatingInput"
                                            required
                                            placeholder=" "
                                        />
                                        <label htmlFor="floatingInput">
                                            Email
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea
                                            style={{ height: "160px" }}
                                            {...register("text")}
                                            type="text"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder=" "
                                        />
                                        <label htmlFor="floatingInput">
                                            Don't be shy, tell us more!
                                        </label>
                                    </div>
                                    <div style={{ textAlign: "left" }}>
                                        <Typography component="legend">
                                            Rating
                                        </Typography>
                                        <Rating
                                            name="simple-controlled"
                                            value={value}
                                            onChange={(event, newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </div>
                                    {/* <p className="text-danger">{error || userError}</p> */}
                                    <input
                                        className="work_btn"
                                        type="submit"
                                        value="Send"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};

export default Review;