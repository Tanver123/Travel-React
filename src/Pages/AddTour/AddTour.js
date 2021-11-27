import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddTour.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://grisly-monster-73892.herokuapp.com/tour", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div className="add-service">
      <h2 className="fs-1 p-5 text-center">Please Add a Service</h2>
      <form className="mx-auto w-100" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          {...register("title", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <br />
        <textarea
          className="mb-3"
          {...register("description")}
          placeholder="Description"
        />
        <br />
        <input
          className="mb-3"
          type="number"
          {...register("price")}
          placeholder="Price"
        />
        <br />
        <input
          className="mb-3"
          type="url"
          {...register("image")}
          placeholder="Image URL"
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
