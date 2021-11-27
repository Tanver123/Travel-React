import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const axios = require("axios");

const Updatetour = () => {
  const { id } = useParams();
  const [tour, setTour] = useState({});

  //   useEffect(() => {
  //     const url = `https://grisly-monster-73892.herokuapp.com/tour/${id}`;
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setTour(data));
  //   }, []);

  axios
    .get(`https://grisly-monster-73892.herokuapp.com/orders/${id}`)
    .then(function (response) {
      // handle success
      console.log(response);
      setTour(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  // Update tour
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedtour = {
      title: updatedName,
      description: tour.description,
      price: tour.price,
      image: tour.image,
    };
    setTour(updatedtour);
  };
  console.log(tour);

  const handleDescriptionChange = (e) => {
    const updatedDescription = e.target.value;
    const updatedtour = {
      title: tour.title,
      description: updatedDescription,
      price: tour.price,
      image: tour.image,
    };
    setTour(updatedtour);
  };
  const handlePriceChange = (e) => {
    const updatedPrice = e.target.value;
    const updatedtour = {
      title: tour.title,
      description: tour.description,
      price: updatedPrice,
      image: tour.image,
    };
    setTour(updatedtour);
  };
  const handleImageChange = (e) => {
    const updatedImage = e.target.value;
    const updatedtour = {
      title: tour.title,
      description: tour.description,
      price: tour.price,
      image: updatedImage,
    };
    setTour(updatedtour);
  };

  const handleUpdatetour = (e) => {
    const url = `https://grisly-monster-73892.herokuapp.com/tour/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tour),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setTour({});
          e.target.reset();
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2>Update: {tour?.title}</h2>
      <p>
        <small>{id}</small>
      </p>
      <form onSubmit={handleUpdatetour}>
        <input
          type="text"
          onChange={handleNameChange}
          value={tour.title || ""}
        />
        <br />
        <input
          type="text"
          onChange={handleDescriptionChange}
          value={tour.description || ""}
        />
        <br />
        <input
          type="number"
          onChange={handlePriceChange}
          value={tour.price || ""}
          placeholder="Price"
        />
        <br />
        <input
          type="url"
          onChange={handleImageChange}
          value={tour.image || ""}
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Updatetour;
