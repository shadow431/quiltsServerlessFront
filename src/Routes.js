import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Admin from "./containers/Admin";
import Backpack from "./embroidery/Backpack";
import BakedPotatoBag from "./kitchen/BakedPotatoBag";
import BowlWrap from "./kitchen/BowlWrap";
import EmbroideryColors from "./embroidery/EmbroideryColors";
import EmbroideryHome from "./embroidery/EmbroideryHome";
import EmbroideryNav from "./embroidery/EmbroideryNav";
import Fabric from "./kitchen/Fabric";
import Home from "./containers/Home";
import KitchenNav from "./kitchen/KitchenNav";
import Login from "./containers/Login";
import NewProduct from "./containers/NewProduct";
import NotFound from "./containers/NotFound";
import OvenMitt from "./kitchen/OvenMitt";
import Plate from "./kitchen/Plate";
import Products from "./containers/Products";
import Quilts from "./containers/Quilts";
import Schedule from "./containers/Schedule"
import Signup from "./containers/Signup";
import Tote from "./embroidery/Tote";
import TortillaBags from "./kitchen/Tortilla";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/bowl" exact component={BowlWrap} appProps={appProps} />
      <AppliedRoute path="/embroidery" exact component={EmbroideryHome} appProps={appProps} />
      <AppliedRoute path="/embroidery/backpack" exact component={Backpack} appProps={appProps} />
      <AppliedRoute path="/embroidery/colors" exact component={EmbroideryColors} appProps={appProps} />
      <AppliedRoute path="/embroidery/prodoptions" exact component={EmbroideryNav} appProps={appProps} />
      <AppliedRoute path="/embroidery/tote" exact component={Tote} appProps={appProps} />
      <AppliedRoute path="/kitchen" exact component={KitchenNav} appProps={appProps} />
      <AppliedRoute path="/ovenmitt" exact component={OvenMitt} appProps={appProps} />
      <AppliedRoute path="/ovenmitt/fabric" exact component={Fabric} appProps={appProps} />
      <AppliedRoute path="/plate" exact component={Plate} appProps={appProps} />
      <AppliedRoute path="/potato" exact component={BakedPotatoBag} appProps={appProps} />
      <AppliedRoute path="/quilts" exact component={Quilts} appProps={appProps} />
      <AppliedRoute path="/schedule" exact component={Schedule} appProps={appProps} />
      <AppliedRoute path="/tortilla" exact component={TortillaBags} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/admin" exact component={Admin} appProps={appProps} />
      <AuthenticatedRoute path="/products/new" exact component={NewProduct} appProps={appProps} />
      <AuthenticatedRoute path="/products/:id" exact component={Products} appProps={appProps} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
