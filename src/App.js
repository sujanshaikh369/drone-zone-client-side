import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./components/AuthContext/AuthProvider";
import AllOrders from "./components/Dashboard/AllOrder/AllOrder";
import DashBoard from "./components/Dashboard/Dashboard/DashBoard";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import ManageOrder from "./components/Dashboard/ManageOrder/ManageOrder";
import MyOrder from "./components/Dashboard/MyOrder/MyOrder";
import Explore from "./components/Explore/Explore";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Register/Register";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <DashBoard />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
