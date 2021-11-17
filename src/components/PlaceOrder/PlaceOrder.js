import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const PlaceOrder = () => {
  const [dData, setDData] = useState([]);
  console.log(dData);
  const { user } = useAuth();

  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://safe-ridge-90753.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleProduct(data);
      });
  }, [id]);
  console.log(singleProduct);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://safe-ridge-90753.herokuapp.com/order`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setDData();
        }
      });
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={singleProduct?.img} alt="" />
            <h3>{singleProduct.model}</h3>
            <stong>Price: {singleProduct?.price}</stong>
            <p> {singleProduct?.des}</p>
          </div>
          <div className="col-md-6">
            <div className="order text-center py-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  defaultValue={user.displayName}
                  placeholder="name"
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("email")}
                  defaultValue={user.email}
                  placeholder="email"
                  className="p-2 m-2 w-50"
                />
                <br />
                <input
                  {...register("address")}
                  placeholder="address"
                  type="address"
                  className="p-2 m-2 w-50"
                />
                <br />
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("price")}
                  placeholder="price"
                  defaultValue={user?.price}
                  className="p-2 m-2 w-50"
                />
                <input
                  {...register("product")}
                  placeholder="Package Name"
                  className="p-2 m-2 w-50"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Book Now"
                  className="btn btn-success w-25"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
