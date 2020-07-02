import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import AboutUs from "./containers/AboutUs";
import ContactUs from "./containers/ContactUs";
import DeleteProduct from "./products/DeleteProduct";
import Designs from "./embroidery/Designs";
import EditDesign from "./Design/EditDesign";
import EditProduct from "./products/EditProduct";
import EditSchedule from "./schedule/EditSchedule";
import EmbroideryHome from "./embroidery/EmbroideryHome";
import Fabrics from "./kitchen/Fabrics";
import Home from "./containers/Home";
import KitchenHome from "./kitchen/KitchenHome";
import Login from "./containers/Login";
import NewDesign from "./Design/NewDesign";
import NewFabric from "./Fabric/NewFabric";
import NewItems from "./containers/NewItems";
import NewProduct from "./products/NewProduct";
import NewSchedule from "./schedule/NewSchedule";
import NotFound from "./containers/NotFound";
import Schedule from "./schedule/Schedule"
import Signup from "./containers/Signup";
import Sandbox from "./containers/Sandbox";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/about" exact component={AboutUs} appProps={appProps} />
      <AppliedRoute path="/contact" exact component={ContactUs} appProps={appProps} />
      <AppliedRoute path="/designs" exact component={Designs} appProps={appProps} />
      <AppliedRoute path="/embroidery" exact component={EmbroideryHome} appProps={appProps} />
      <AppliedRoute path="/fabrics" exact component={Fabrics} appProps={appProps} />
      <AppliedRoute path="/kitchen" exact component={KitchenHome} appProps={appProps} />
      <AppliedRoute path="/newitems" exact component={NewItems} appProps={appProps} />
      <AppliedRoute path="/schedule" exact component={Schedule} appProps={appProps} />
      <AppliedRoute path="/sandbox" exact component={Sandbox} appProps={appProps} />
      <UnauthenticatedRoute path="/admin" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/admin/design/new" exact component={NewDesign} appProps={appProps} />
      <AuthenticatedRoute path="/admin/design/edit" exact component={EditDesign} appProps={appProps} />
      <AuthenticatedRoute path="/admin/fabric/new" exact component={NewFabric} appProps={appProps} />
      <AuthenticatedRoute path="/admin/schedule/new" exact component={NewSchedule} appProps={appProps} />
      <AuthenticatedRoute path="/admin/schedule/edit" exact component={EditSchedule} appProps={appProps} />
      <AuthenticatedRoute path="/admin/products/new" exact component={NewProduct} appProps={appProps} />
      <AuthenticatedRoute path="/admin/product/delete" exact component={DeleteProduct} appProps={appProps} />
      <AuthenticatedRoute path="/admin/product/edit" exact component={EditProduct} appProps={appProps} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
