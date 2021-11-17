import React from "react";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import AllOrders from "../AllOrder/AllOrder";
import MyOrder from "../MyOrder/MyOrder";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import Review from "../Review/Review";
import Payment from "../Payment/Payment";
import useAuth from "../../../hooks/useAuth";
import "./DashBoard.css";

const Dashboard = () => {
  const { user, handleLogOut, admin } = useAuth();
  console.log(admin);
  let { path, url } = useRouteMatch();
  return (
    <div className="">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row">
            <div className="col-md-3">
              <div className="bashboard-manu p-1">
                <div className="all-menu mt-5">
                  {/* user profile start here */}
                  <div className="user text-center d-flex flex-column justify-content-center align-content-center">
                    <img className="mx-auto pb-1" src={user.photoURL} alt="" />
                    <small>{user.email}</small>
                    <small>{user.displayName}</small>
                    <small>
                      <button className="logOut_btn" onClick={handleLogOut}>
                        Log Out
                      </button>
                    </small>
                  </div>
                  {/* user profile end here */}
                  <div className="all-order active">
                    <div className="icon pe-3">
                      <i className="fas fa-gift"></i>
                    </div>
                    <li className="admin-menu p-2">
                      {" "}
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#000;",
                          background: "none",
                        }}
                        to={`${url}`}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fas fa-home"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#000",
                          background: "none",
                        }}
                        to="/"
                      >
                        Home Page
                      </NavLink>
                    </li>
                  </div>
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i className="fas fa-shopping-cart"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            background: "none",
                          }}
                          to={`${url}/myOrder`}
                        >
                          All Order
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i className="fas fa-baby-carriage"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            background: "none",
                          }}
                          to={`${url}/addProduct`}
                        >
                          Add Product
                        </NavLink>
                      </li>
                    </div>
                  )}
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="fas fa-baby-carriage"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#000",
                          background: "none",
                        }}
                        to={`${url}/myOrder`}
                      >
                        My Order
                      </NavLink>
                    </li>
                  </div>

                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-user"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            background: "none",
                          }}
                          to={`${url}/makeAdmin`}
                        >
                          Make Admin
                        </NavLink>
                      </li>
                    </div>
                  )}

                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-truck"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            background: "none",
                          }}
                          to={`${url}/manageOrder`}
                        >
                          Manage Order
                        </NavLink>
                      </li>
                    </div>
                  )}
                  {admin && (
                    <div className="all-order">
                      <div className="icon pe-3">
                        <i class="fas fa-user-cog"></i>
                      </div>
                      <li className="admin-menu p-2">
                        <NavLink
                          style={{
                            textDecoration: "none",
                            color: "#000",
                            background: "none",
                          }}
                          to={`${url}/mangeProduct`}
                        >
                          Manage Product
                        </NavLink>
                      </li>
                    </div>
                  )}
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i className="fas fa-ice-cream"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#000",
                          background: "none",
                        }}
                        to={`${url}/review`}
                      >
                        Review
                      </NavLink>
                    </li>
                  </div>
                  <div className="all-order">
                    <div className="icon pe-3">
                      <i class="fab fa-cc-paypal"></i>
                    </div>
                    <li className="admin-menu p-2">
                      <NavLink
                        style={{
                          textDecoration: "none",
                          color: "#000",
                          background: "none",
                        }}
                        to={`${url}/payment`}
                      >
                        Payment
                      </NavLink>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path={`${path}/addProduct`}>
                  <AddProduct />
                </Route>
                <Route path={`${path}/allOrders`}>
                  <AllOrders />
                </Route>
                <Route path={`${path}/myOrder`}>
                  <MyOrder />
                </Route>
                <Route path={`${path}/makeAdmin`}>
                  <MakeAdmin />
                </Route>
                <Route path={`${path}/manageOrder`}>
                  <ManageOrder />
                </Route>
                <Route path={`${path}/review`}>
                  <Review />
                </Route>
                <Route path={`${path}/payment`}>
                  <Payment />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
