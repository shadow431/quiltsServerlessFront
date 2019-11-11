import React from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Admin from "./containers/Admin";
import Backpack from "./embroidery/Backpack";
import BakedPotatoBag from "./kitchen/BakedPotatoBag";
import BowlWrap from "./kitchen/BowlWrap";
import CompBrief from "./embroidery/CompBrief";
import EmbroideryColors from "./embroidery/EmbroideryColors";
import EmbroideryHome from "./embroidery/EmbroideryHome";
import EmbroideryNav from "./embroidery/EmbroideryNav";
import Fabric from "./kitchen/Fabric";
import Home from "./containers/Home";
import Hoodies from "./embroidery/Hoodies";
import KitchenNav from "./kitchen/KitchenNav";
import KitchenTowel from "./embroidery/KitchenTowel";
import Login from "./containers/Login";
import NewProduct from "./containers/NewProduct";
import NotFound from "./containers/NotFound";
import OvenMitt from "./kitchen/OvenMitt";
import Plate from "./kitchen/Plate";
import Products from "./containers/Products";
import Quilts from "./containers/Quilts";
import Schedule from "./containers/Schedule"
import Signup from "./containers/Signup";
import Sling from "./embroidery/Sling";
import SweatShirt from "./embroidery/SweatShirt";
import TortillaBags from "./kitchen/Tortilla";
import Tote from "./embroidery/Tote";
import ToteZip from "./embroidery/ToteZip";
import TShirt from "./embroidery/TShirt";
import TShirtLong from "./embroidery/TShirtLong";
import Vest from "./embroidery/Vest";
import NewSchedule from "./containers/NewSchedule";

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
      <AppliedRoute path="/embroidery/kitchentowel" exact component={KitchenTowel} appProps={appProps} />
      <AppliedRoute path="/embroidery/prodoptions" exact component={EmbroideryNav} appProps={appProps} />
      <AppliedRoute path="/embroidery/sling" exact component={Sling} appProps={appProps} />
      <AppliedRoute path="/embroidery/sweatshirt" exact component={SweatShirt} appProps={appProps} />
      <AppliedRoute path="/embroidery/tote" exact component={Tote} appProps={appProps} />
      <AppliedRoute path="/embroidery/totezip" exact component={ToteZip} appProps={appProps} />
      <AppliedRoute path="/embroidery/tshirt" exact component={TShirt} appProps={appProps} />
      <AppliedRoute path="/embroidery/tshirtlong" exact component={TShirtLong} appProps={appProps} />
      <AppliedRoute path="/embroidery/vest" exact component={Vest} appProps={appProps} />
      <AppliedRoute path="/kitchen" exact component={KitchenNav} appProps={appProps} />
      <AppliedRoute path="/kitchen/ovenmitt" exact component={OvenMitt} appProps={appProps} />
      <AppliedRoute path="/kitchen/ovenmitt/fabric" exact component={Fabric} appProps={appProps} />
      <AppliedRoute path="/kitchen/plate" exact component={Plate} appProps={appProps} />
      <AppliedRoute path="/kitchen/potato" exact component={BakedPotatoBag} appProps={appProps} />
      <AppliedRoute path="/quilts" exact component={Quilts} appProps={appProps} />
      <AppliedRoute path="/schedule" exact component={Schedule} appProps={appProps} />
      <AppliedRoute path="/kitchen/tortilla" exact component={TortillaBags} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/admin" exact component={Admin} appProps={appProps} />
      <AuthenticatedRoute path="/products/new" exact component={NewProduct} appProps={appProps} />
      <AuthenticatedRoute path="/products/:id" exact component={Products} appProps={appProps} />
      <AuthenticatedRoute path="/schedule/new" exact component={NewSchedule} appProps={appProps} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
