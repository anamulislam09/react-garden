import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componant/Home";
import About from "./componant/About";
import Contact from "./componant/Contact";
//service link start here
import Services from "./componant/Services/Services";
import ServiceDetails1 from "./componant/Services/ServiceDetails1";
import OrderForm from "./componant/Services/OrderForm";

//service link Ends here
import Projects from "./componant/Projects";
import Features from "./componant/Features";
import FreeQuote from "./componant/FreeQuote";
import Team from "./componant/Team";
import Testimonial from "./componant/Testimonial";

import Addmain from "./componant/Admin/Addmain";
import Addhome from "./componant/Admin/Addhome";
import Users from "./componant/Admin/Users/Users";
import Insert from "./componant/Admin/Users/Insert";
import Edit from "./componant/Admin/Users/Edit";
import Products from "./componant/Admin/Product/Products";
import AddProduct from "./componant/Admin/Product/addProduct";
import EditProduct from "./componant/Admin/Product/EditProduct";
import MainTemplate from "./componant/MainTemplate";
import Sidebar from "./componant/Admin/Sidebar";
import Orders from "./componant/Orders/Orders";
// user reg start here
import UserLogin from "./componant/Form/UserLogin";
import UserRegistration from "./componant/Form/UserRegistration";
import AdminLogin from "./componant/Form/AdminLogin";
import AdminRegistration from "./componant/Form/AdminRegistration";
import Cart from "./componant/Services/Cart";
import Services3 from "./componant/Services/Services3";
import Services1 from "./componant/Services/Services1";
import Services2 from "./componant/Services/Services2";
import Services4 from "./componant/Services/Services4";
import Services5 from "./componant/Services/Services5";
import Services6 from "./componant/Services/Services6";
// user reg start here
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="servicedetails1" element={<ServiceDetails1 />} />
          <Route path="services3" element={<Services3 />} />
          <Route path="services1" element={<Services1 />} />
          <Route path="services2" element={<Services2 />} />
          <Route path="services4" element={<Services4 />} />
          <Route path="services5" element={<Services5 />} />
          <Route path="services6" element={<Services6 />} />
          <Route path="orderform" element={<OrderForm />} />

          <Route path="sart" element={<Cart />} />

          <Route path="projects" element={<Projects />} />
          <Route path="features" element={<Features />} />
          <Route path="freeQuote" element={<FreeQuote />} />
          <Route path="team" element={<Team />} />
          <Route path="testimonial" element={<Testimonial />} />

          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="adminregistration" element={<AdminRegistration />} />

          <Route path="userregistration" element={<UserRegistration />} />
          <Route path="userlogin" element={<UserLogin />} />
        </Route>

        <Route path="admin" element={<Addmain />}>
          <Route index element={<Addhome />} />
          <Route path="users" element={<Users />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="insert" element={<Insert />} />
          <Route path="users/edit:ids" element={<Edit />} />
          <Route path="Orders" element={<Orders />} />

          <Route path="products" element={<Products />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="products/editproduct:pid" element={<EditProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
