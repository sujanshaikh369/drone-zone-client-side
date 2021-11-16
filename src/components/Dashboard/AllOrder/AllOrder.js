import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";

const AllOrders = () => {
  const [order, setOrder] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrder(data));
    setLoading(false);
  }, [isDelete]);

  //all order delete functionality
  const handleDelete = (id) => {
    // console.log(id);
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
        method: "delete",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            setIsDelete(!isDelete);
          } else {
            setIsDelete(false);
          }
        });
    }
  };

  return (
    <div responsive="sm md">
      <h1 className="allOrder py-5">All Order: {order.length}</h1>
      <Container>
        <Row lg={12} xs={12}>
          <Col className="col-md-12 col-sm-12">
            <Table striped bordered hover>
              <thead>
                <tr className="table-title">
                  <th>User Name</th>
                  <th>Product Name</th>
                  <th>Address</th>
                  <th className="text-center">Email</th>
                </tr>
              </thead>
              {!loading ? (
                order?.map((items) => (
                  <tbody className="table-title" key={items?._id}>
                    <tr>
                      <td>{items?.name}</td>
                      <td>{items?.product}</td>
                      <td>{items?.address}</td>
                      <td className="">
                        {items?.email}
                        <button
                          onClick={() => handleDelete(items?._id)}
                          className="delete-btn ms-5"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <Spinner className="text-center" animation="border" />
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AllOrders;
