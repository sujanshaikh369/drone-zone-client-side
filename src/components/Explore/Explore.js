import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../Shared/Navigation/Navigation";

const Explore = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://safe-ridge-90753.herokuapp.com/product")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="package">
      <Navigation />
      <Container className="py-5">
        <div className="text-center title pb-5">
          <h1>Our Best Services</h1>
        </div>
        <Row lg={3} xs={1} className="g-4">
          {!loading ? (
            items.map((items) => (
              <Col key={items._id}>
                <CardGroup className="cardGroup">
                  <Card className="card">
                    <Card.Img
                      variant="top"
                      className="card-image"
                      src={items.img}
                    />
                    <Card.Body>
                      <Card.Title>{items.model}</Card.Title>
                    </Card.Body>
                    <Card.Body className="py-0 description">
                      <Card.Title>{items?.des?.slice(0, 90)}</Card.Title>
                    </Card.Body>
                    <Card.Body>
                      <Card.Body className="d-flex justify-content-between py-1">
                        <div className="pack-icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                      </Card.Body>
                    </Card.Body>
                    <Card.Body className="py-1 d-flex justify-content-between">
                      <Card.Title>
                        Price: <span className="price">${items.price}</span>
                      </Card.Title>
                    </Card.Body>
                    <Card.Footer className="card-footer mx-auto">
                      <Link to={`/placeOrder/${items._id}`}>
                        <button className="service-btn">Take Service</button>
                      </Link>
                    </Card.Footer>
                  </Card>
                </CardGroup>
              </Col>
            ))
          ) : (
            <div className="mx-auto">
              <Spinner
                className="text-center"
                animation="border"
                variant="danger"
              />
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Explore;
