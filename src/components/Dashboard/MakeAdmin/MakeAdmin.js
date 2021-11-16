import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setEmail(data);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="make_admin">
      <h1 className="text-center py-5 mt-5">Make Admin</h1>
      <form onSubmit={handleAdminSubmit}>
        <div className="input-group mb-3 w-50 mx-auto d-flex justify-content-center align-items-center">
          <input
            onBlur={handleOnBlur}
            type="email"
            className="form-control"
            placeholder="Email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <button type="submit" className="common-btn" id="basic-addon2">
            Add Admin
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
