import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from "../Pages/Dashboard/Dashboard";
import TransactionsPage from "../Pages/Transactions/transaction";
import InventoryPage from "../Pages/InventoryPage/inventory";
import NavbarEdited from "./NavbarEdited";
import ProductsPage from "../Pages/ProductPage/product";

const AppRoutes = () => {
  return (
    <Router>
      <NavbarEdited />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/transactions" component={TransactionsPage} />
        <Route path="/inventories" component={InventoryPage} />
        <Route path="/products" component={ProductsPage}/>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
