import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./CommonComponents/Navbar";
import Sidebar from "./CommonComponents/Sidebar";
import AddProduct from "./AddProduct/AddProduct";
import ProductList from "./ProductList/ProductList";
import OrdersList from "./OrdersList/OrdersList";
import BannersList from "./Banners/BannersList";
import EditProduct from "./EditProduct/EditProduct";
import CategoriesPage from "./CategoriesPage/CategoriesPage";
import Promos_Discounts from "./Promos_Discounts/PromosPage";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import Authors from "./Author/Author";
import Settings from "./Settings/Settings";
import Materials from "./Materials/Materials";
import Languages from "./Languages/Languages";
import Pages from "./Pages/Pages";
import Vendors from "./Vendors/Vendor";
import OrderStatus from "./OrderStatus/OrderStatus";
import addMaterail from "./Add Material/addMaterail";
import "./App.css";
import Addimage from "./Add Image/Addimage";
import print from "./Printing/print";
import Uniqueid from "./UniqueId/uniqueid";
import SpreadSheet from "./Upload Bulk/SpreadSheet";

function App() {
  return (
    <Router>
      <div className="app">
        <div>
          <Navbar classNAme="navbar" />
        </div>
        <div className="content">
          <div>
            <Sidebar className="sidebar" />
          </div>
          <div className="main__content">
            <Switch>
              <Route path="/" exact component={AddProduct} />
              <Route path="/products" component={ProductList} />
              <Route path="/orders" component={OrdersList} />
              <Route path="/banners" component={BannersList} />
              <Route path="/edit/:productId" component={EditProduct} />
              <Route path="/categories" component={CategoriesPage} />
              <Route path="/promos" component={Promos_Discounts} />
              <Route path="/authors" component={Authors} />
              <Route path="/messages" component={Messages} />
              <Route path="/users" component={Users} />
              <Route path="/settings" component={Settings} />
              <Route path="/materials" component={Materials} />
              <Route path="/languages" component={Languages} />
              <Route path="/pages" component={Pages} />
              <Route path ="/order__status" component = {OrderStatus} />
              <Route path ="/vendors" component = {Vendors} />
              <Route path ="/addmaterial" component = {addMaterail} />
              <Route path ="/addimage" component = {Addimage} />
              <Route path ="/print" component = {print} />
              <Route path ="/uniqueid" component = {Uniqueid} />
              <Route path ="/uploadBulk" component = {SpreadSheet} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
