import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrder, setMyOrder] = useState([]);
  const [isDelete, setIsDelete] = useState(false);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://safe-ridge-90753.herokuapp.com/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrder(data);
        setLoading(false);
      });
  }, [isDelete, user.email]);

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`https://safe-ridge-90753.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
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
      <h1 className="text-center py-5">Your Order: {myOrder.length}</h1>
      <Container>
        <Row lg={12} xs={12}>
          <Col className="col-md-12 col-sm-12">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Product Name</th>
                  <th>Address</th>
                  <th className="text-center">Email</th>
                </tr>
              </thead>
              {!Loading ? (
                myOrder?.map((items) => (
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
                        <button className="update-btn ms-2">
                          {items.status}
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))
              ) : (
                <div className="spiner mx-auto pt-5">
                  <Spinner className="text-center" animation="border" />
                </div>
              )}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyOrder;
