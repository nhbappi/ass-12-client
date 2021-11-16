import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';


const Form = (props) => {
  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const { name, image, Price, description } = props?.service;
  console.log(props.service);
  const onSubmit = (data) => {
      const { user, email, city, address, phone } = data;
      const status = "pending";
      const order = {
          name, image, Price, description, user, email, city, address, phone, status };
      fetch("https://nameless-plains-34320.herokuapp.com/books", {
          method: "POST",
          headers: {
              "content-type": "application/json",
          },
          body: JSON.stringify(order),
      })
          .then((res) => res.json())
          .then((result) => {
              if (result.insertedId) {
                  alert("Order processed Successfully");

                  reset();
              }
          });
  };
  return (
      <div>
          <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName} {...register("user")} />
                <br />
              <input
                  defaultValue={user.email}
                  {...register("email", { required: true })}
              />

              {errors.email && (
                  <span className="error">This field is required</span>
              )}
              <br />
              <input
                  placeholder="Address"
                  defaultValue=""
                  {...register("address")}
              />
              <br />
              <input placeholder="City" defaultValue="" {...register("city")} />
              <br />
              <input
                  placeholder="phone number"
                  defaultValue=""
                  {...register("phone")}
              />
              <br />

              <input className="bg-warning" type="submit" />
          </form>
      </div>
  );
};

export default Form;