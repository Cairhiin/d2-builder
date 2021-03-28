import React from 'react';
import { Box, Flex, Button } from "@chakra-ui/react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom";
import D2PlannerCharView from './D2Planner/D2PlannerCharView';
import './D2PlannerView.css';

const D2PlannerView = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Box>
        <Flex
          className="button-box"
          align="center"
          justify="center"
          wrap="wrap"
          w="100%"
        >
          <Button colorScheme="teal" size="md">
            <Link to={`${url}/amazon`}>
              Amazon
            </Link>
          </Button>
          <Button colorScheme="teal" size="md">
            <Link to={`${url}/assassin`}>
              Assassin
            </Link>
          </Button>
          <Button colorScheme="teal" size="md">
            <Link to={`${url}/barbarian`}>
              Barbarian
            </Link>
          </Button>
          <Button colorScheme="teal" size="md">
            <Link to={`${url}/druid`}>
              Druid
            </Link>
          </Button>
          <Button colorScheme="teal" size="md">
            <Link to={`${url}/necromancer`}>
              Necromancer
            </Link>
          </Button>
          <Button colorScheme="teal" size="md">
            <Link to={`${url}/paladin`}>
              Paladin
            </Link>
          </Button>
          <Button colorScheme="teal" size="md">
            <Link to={`${url}/sorceress`}>
              Sorceress
            </Link>
          </Button>
        </Flex>
      </Box>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:charClass`}>
          <CharClassView />
        </Route>
      </Switch>
    </div>
  );
};

function CharClassView() {
  let { charClass } = useParams();
  return (
    <D2PlannerCharView charClass={charClass}/>
  );
}

export default D2PlannerView;
