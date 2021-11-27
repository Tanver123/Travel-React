import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import Booking from "./Pages/Booking/Booking";
import Footer from "./Pages/Shared/Footer/Footer";
import PrivateRoute from "./Pages/Shared/PrivateRoute/PrivateRoute";
import Orders from "./Pages/Orders/Orders";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Tour from "./Pages/Tour/Tour";
import Notfound from "./Pages/NotFound/NotFound";
import AddService from "./Pages/AddTour/AddTour";
import Updatetour from "./Pages/UpdateTour/UpdateTour";

function App() {
  return (
    <AuthProvider>
      <ChakraProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <Route path="/tour">
              <Tour></Tour>
            </Route>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/booking/:tourId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/updateService/:id">
              <Updatetour></Updatetour>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </ChakraProvider>
    </AuthProvider>
  );
}

export default App;
