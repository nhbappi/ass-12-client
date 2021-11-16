import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit , reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://nameless-plains-34320.herokuapp.com/products', data)
        .then(res => {
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        <div className="add-service">
            <h2 className="text-center new-pro">ADD A PRODUCT</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
      <textarea {...register("description")} placeholder="Description"/>
      <input type="number" {...register("Cost")} placeholder="Cost" />
      <input {...register("image")}placeholder="Image url" />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;