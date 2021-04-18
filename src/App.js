import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./Component/Home/Home/Home";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Book from "./Component/Book/Book/Book";
import Orders from "./Component/Book/Orders/Orders";
import OrderList from "./Component/Book/OrderList/OrderList";
import Review from "./Component/Book/Review/Review";
import AddService from "./Component/Book/AddService/AddService";
import ManageService from "./Component/Book/ManageService/ManageService";
import BookingList from "./Component/Book/BookingList/BookingList";
import AddAdmin from "./Component/Book/AddAdmin/AddAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <Switch>
        <Route  path = "/home">
            <Home></Home>
          </Route>
          <Route exact path = "/">
            <Home />
          </Route>
         
          <PrivateRoute path='/booksPay/:name'>
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path='/bookingList'>
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path='/review'>
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path='/orderList'>
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path='/addAdmin'>
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path='/manageService'>
            <ManageService></ManageService>
          </PrivateRoute>
          <Route exact path = "/login">
            <Login />
          </Route>
          <Route path='*'>
            <h4>404, error!!</h4>
          </Route>
        </Switch>
      </Router>
       
    </UserContext.Provider>
  );
}

export default App;
