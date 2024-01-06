import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Upload from "../pages/Upload";

const Routes = () => {
  return (
    <Switch>
      <Route path="/console" exact component={Dashboard} />
      <Route path="/console/customers" component={Customers} />
      <Route path="/console/upload" component={Upload} />
      <Route path="/loghome" component={() => {window.location.href = "http://localhost:3000/"; return null;}}/>
    </Switch>
  );
};

export default Routes;
