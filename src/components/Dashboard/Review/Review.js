import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  // console.log(review);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://safe-ridge-90753.herokuapp.com/review", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
        }
      });
  };
  return (
    <div className="order text-center py-5">
      <h2 className="text-center pb-4">Add Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          defaultValue={user.displayName}
          placeholder="Name"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("reveiw")}
          placeholder="Reveiw Rating"
          type="number"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("description")}
          placeholder="Your Comment"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("image")}
          defaultValue={user.photoURL}
          placeholder="ImageUrl"
          className="p-2 m-2 w-50"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" value="Add Review" className="common-btn" />
      </form>
    </div>
  );
};

export default Review;
