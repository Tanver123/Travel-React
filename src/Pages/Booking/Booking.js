import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { Card, Col, Button } from "react-bootstrap";
import "./Booking.css";
import useAuth from "../../Hooks/useAuth";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Container } from "@chakra-ui/react";

function Booking() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const history = useHistory();
  const [alert, setAlert] = useState(false);
  const { user } = useAuth();
  const { tourId } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    const url = `https://grisly-monster-73892.herokuapp.com/tour/${tourId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const onSubmit = (data) => {
    data.email = user.email;
    data.id = service._id;
    data.title = service.title;
    data.price = service.price;
    data.status = "Pending";
    console.log(data.address);

    fetch("https://grisly-monster-73892.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          setAlert(true);
          setTimeout(() => {
            history.push("/myOrders");
          }, 1000);
        }
      });
  };

  return (
    <div className="mx-auto">
      {alert ? (
        <Container>
          <Alert className="m-5" status="success">
            <AlertIcon />
            Order processed Successfully!
          </Alert>
        </Container>
      ) : (
        <>
          <h1 className="text-center fs-1 p-3">Puchase Package</h1>
          <div className="mx-auto d-flex justify-content-center align-items-center">
            <Col sm={6} xs={12} md={6}>
              <Card className="services__card">
                <div className="ml-3 p-3 image__area">
                  <img width="100%" height="400px" src={service.image} alt="" />
                </div>
              </Card>
            </Col>
            <Col sm={6} xs={12} md={6}>
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text className="mt-3">{service.description}</Card.Text>
                <Card.Text className="mt-3 color__primary">
                  ${service.price}
                </Card.Text>
                <Card.Title className="my-2">Shipping Info</Card.Title>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue="Name" {...register("Name")} />
                  <br />
                  <input
                    defaultValue="Address"
                    {...register("Address", { required: true })}
                  />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  <br />
                  <input className="submit__btn" type="submit" />
                </form>
              </Card.Body>
            </Col>
          </div>
        </>
      )}
    </div>
  );
}

export default Booking;
