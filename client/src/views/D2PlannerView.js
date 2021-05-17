import React from 'react';
import { Box, Flex } from "@chakra-ui/react";
import {
  Route,
  Switch,
  useParams,
  useRouteMatch
} from "react-router-dom";
import CharView from './D2Planner/D2PlannerCharView';
import ButtonGroup from './D2PlannerButtonGroup';

const D2PlannerView = () => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <Box className="D2Planner" mt="15em">
        <Flex
          className="button-box"
          align="center"
          justify="center"
          wrap="wrap"
          w="100%"
        >
          <ButtonGroup url={url} />
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
    <CharView charClass={charClass}/>
  );
}

export default D2PlannerView;
