import React from 'react';
import { Box } from "@chakra-ui/react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ROUTES from '../routes';
import NavBar from "./NavBar";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
  <Route {...rest} render={(props) => (
    isLoggedIn === true
      ? <Component {...props} />
      : <Redirect to='/login' />
    )} />
  );
}

const CoreLayout = () => {
  return (
    <div id="coreLayout">
      <NavBar />
      <Box w="100%" textAlign="center">
        <Switch>
          {
            ROUTES.map((route, index) => (
                !!route.protected ?
                  <PrivateRoute
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    isLoggedIn = {true}
                  /> :
                  <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
              )
            )
          }
        </Switch>
      </Box>
    </div>
  );
};

export default CoreLayout;
