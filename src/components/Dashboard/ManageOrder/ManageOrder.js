import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const [isDelete, setIsDelete] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [orderId, setOrderId] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, [isDelete]);

  // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };

  const onSubmit = (data) => {
    console.log(data, orderId);
    fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  // handle delete order my order
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, delete this package?");
    if (proceed) {
      fetch(`http://localhost:5000/deleteOrder/${id}`, {
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
    <div className="container">
      <h1>All orders {orders.length}</h1>

      <div class="row">
        <div className="col-md-12">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Product Name</th>
                <th>Adderss</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {!Loading ? (
              orders?.map((order, index) => (
                <tbody>
                  <tr>
                    <td>{index}</td>
                    <td>{order.name}</td>
                    <td>{order.product}</td>
                    <td>{order.email}</td>
                    <td>{order.address}</td>
                    <td>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <select
                          onClick={() => handleOrderId(order?._id)}
                          {...register("status")}
                        >
                          <option value={order?.status}>{order?.status}</option>
                          <option value="approve">Pending</option>
                          <option value="approve">Approve</option>
                          <option value="done">Done</option>
                        </select>
                        <input
                          type="submit"
                          value="Update"
                          className="update-btn ms-2"
                        />
                      </form>
                    </td>
                    <div className="btn-div">
                      <span
                        onClick={() => handleDelete(order?._id)}
                        className="delete-btn me-2"
                      >
                        Delete
                      </span>
                    </div>
                  </tr>
                </tbody>
              ))
            ) : (
              <div className="spiner mx-auto pt-5">
                <Spinner className="text-center" animation="border" />
              </div>
            )}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
