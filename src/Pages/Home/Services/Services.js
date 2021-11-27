import React from "react";
import { Container, Row } from "react-bootstrap";
import useTour from "../../../Hooks/useTour";
import Service from "../Service/Service";

function Services() {
  const { tour } = useTour();

  return (
    <Container id="services">
      <div className="services__area text-center">
        <p className="mt-5 ">Destinations List</p>
        <h2 className="mb-5 text-bold">
          We Offer Different Tour Services
          <br /> To make your travel easier.
        </h2>
      </div>
      <Row className="g-4 mt-3">
        {tour?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </Row>
    </Container>
  );
}

export default Services;
