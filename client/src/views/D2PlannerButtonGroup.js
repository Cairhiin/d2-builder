import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from "./D2PlannerNavButton";

const D2PlannerButtonGroup = ({ url }) => {
  const [active, setActive] = useState(0);
  return (
    <div>
    <Link to={`${url}/amazon`} onClick={ () => setActive(1) }>
      <Button isActive={ active === 1 && true }>
          Amazon
      </Button>
    </Link>
    <Link to={`${url}/assassin`} onClick={ () => setActive(2) }>
      <Button isActive={ active === 2 && true }>
          Assassin
      </Button>
    </Link>
    <Link to={`${url}/barbarian`} onClick={ () => setActive(3) }>
      <Button isActive={ active === 3 && true }>
          Barbarian
      </Button>
    </Link>
    <Link to={`${url}/druid`} onClick={ () => setActive(4) }>
      <Button isActive={ active === 4 && true }>
          Druid
      </Button>
    </Link>
    <Link to={`${url}/necromancer`} onClick={ () => setActive(5) }>
      <Button isActive={ active === 5 && true }>
          Necromancer
      </Button>
    </Link>
    <Link to={`${url}/paladin`} onClick={ () => setActive(6) }>
      <Button isActive={ active === 6 && true }>
          Paladin
      </Button>
    </Link>
    <Link to={`${url}/sorceress`} onClick={ () => setActive(7) }>
      <Button isActive={ active === 7 && true }>
          Sorceress
      </Button>
    </Link>
    </div>
  );
};

export default D2PlannerButtonGroup;
