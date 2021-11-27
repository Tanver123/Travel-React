import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

function Service(props) {
  const { _id, title, description, image, price } = props.service;
  return (
    <Col sm={6} xs={12} md={4}>
      <Card className="services__card">
        <div className="ml-3 p-3 image__area">
          <img src={image} alt="" />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="mt-3">{description.slice(0, 200)}</Card.Text>
          <Card.Text className="mt-3 color__primary">${price}</Card.Text>
          <Link to={`/booking/${_id}`}>
            <Button className="primary__btn mt-2" variant="primary">
              Buy Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Service;
