import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Admin from "./containers/Admin";
import Backpack from "./embroidery/Backpack";
import BowlWrap from "./kitchen/BowlWrap";
import CompBrief from "./embroidery/CompBrief";
import DeleteProduct from "./products/DeleteProduct";
import EditProduct from "./products/EditProduct";
import EditSchedule from "./schedule/EditSchedule";
import EmbroideryColors from "./embroidery/EmbroideryColors";
import EmbroideryHome from "./embroidery/EmbroideryHome";
import EmbroideryNav from "./components/EmbroideryNav";
import Home from "./containers/Home";
import Hoodies from "./embroidery/Hoodies";
import KitchenHome from "./kitchen/KitchenHome";
import KitchenTowel from "./embroidery/KitTowel";
import Login from "./containers/Login";
import NewFabric from "./Fabric/NewFabric";
import NewProduct from "./products/NewProduct";
import NewSchedule from "./schedule/NewSchedule";
import NotFound from "./containers/NotFound";
import Quilts from "./containers/Quilts";
import Schedule from "./schedule/Schedule"
import Signup from "./containers/Signup";
import Sling from "./embroidery/Sling";
import SweatShirt from "./embroidery/SweatShirt";
import Tote from "./embroidery/Tote";
import ToteZip from "./embroidery/ToteZip";
import TShirt from "./embroidery/TShirt";
import TShirtLong from "./embroidery/TShirtLong";
import Vest from "./embroidery/Vest";
import Sandbox from "./containers/Sandbox";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/kitchen/bowl" exact component={BowlWrap} appProps={appProps} />
      <AppliedRoute path="/embroidery" exact component={EmbroideryHome} appProps={appProps} />
      <AppliedRoute path="/embroidery/backpack" exact component={Backpack} appProps={appProps} />
      <AppliedRoute path="/embroidery/colors" exact component={EmbroideryColors} appProps={appProps} />
      <AppliedRoute path="/embroidery/compbrief" exact component={CompBrief} appProps={appProps} />
      <AppliedRoute path="/embroidery/hoodies" exact component={Hoodies} appProps={appProps} />
      <AppliedRoute path="/embroidery/kittowel" exact component={KitchenTowel} appProps={appProps} />
      <AppliedRoute path="/embroidery/prodoptions" exact component={EmbroideryNav} appProps={appProps} />
      <AppliedRoute path="/embroidery/sling" exact component={Sling} appProps={appProps} />
      <AppliedRoute path="/embroidery/sweatshirt" exact component={SweatShirt} appProps={appProps} />
      <AppliedRoute path="/embroidery/tote" exact component={Tote} appProps={appProps} />
      <AppliedRoute path="/embroidery/totezip" exact component={ToteZip} appProps={appProps} />
      <AppliedRoute path="/embroidery/tshirt" exact component={TShirt} appProps={appProps} />
      <AppliedRoute path="/embroidery/tshirtlong" exact component={TShirtLong} appProps={appProps} />
      <AppliedRoute path="/embroidery/vest" exact component={Vest} appProps={appProps} />
      <AppliedRoute path="/kitchen" exact component={KitchenHome} appProps={appProps} />
      <AppliedRoute path="/quilts" exact component={Quilts} appProps={appProps} />
      <AppliedRoute path="/schedule" exact component={Schedule} appProps={appProps} />
      <AppliedRoute path="/sandbox" exact component={Sandbox} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/admin" exact component={Admin} appProps={appProps} />
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
