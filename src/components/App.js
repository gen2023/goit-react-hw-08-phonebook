import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import AppBar from "./AppBar";
import Loader from "./Loader/Loader";
import routes from "../services/routes";
import authOperations from "../redux/authorization/authorization-operations";
import PrivateRoute from "../services/PrivateRoute";
import PublicRoute from "../services/PublicRoute";

const HomePage = lazy(() => import("../pages/HomePage.js"));
const PhonebookPage = lazy(() => import("../pages/PhonebookPage.js"));
const AccountPage = lazy(() => import("../pages/AccountPage.js"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage.js"));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.homePage} component={HomePage} />
            <PrivateRoute
              path={routes.phonebookPage}
              redirectTo={routes.userRoom}
              component={PhonebookPage}
            />

            <PublicRoute
              restricted
              path={routes.userRoom}
              redirectTo={routes.phonebookPage}
              component={AccountPage}
            />

            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
