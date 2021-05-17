import React from 'react';
import { Box } from "@chakra-ui/react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ROUTES from '../routes';
import NavBar from "./NavBar";
import './CoreLayout.css';

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
      <NavBar id="header" />
      <Box w="100%" textAlign="center" id="main">
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
      <Box w="100%" textAlign="center" id="footer">
        <img src='/images/Diablo-2-Resurrected-Logo.png' alt="Diablo 2 Resurrected Logo" width="20%" />
      </Box>
    </div>
  );
};

export default CoreLayout;
