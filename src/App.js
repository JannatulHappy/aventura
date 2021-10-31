import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Pages/Context/AuthProvider";
import DestinationBooking from "./Pages/DestinationBooking/DestinationBooking";
import Error from "./Pages/Error/Error";
import Destinations from "./Pages/Home/Destinations/Destinations";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/destinations">
              <Destinations></Destinations>
            </PrivateRoute>
            <PrivateRoute path="/destination/:destinationId">
              <DestinationBooking></DestinationBooking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
