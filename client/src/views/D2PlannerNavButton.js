import React from 'react';
import { Button } from "@chakra-ui/react";

const D2PlannerNavButton = ({ children, isActive }) => {
  return (
    <Button bg="#1F0403" size="md"
      mr="1em" mb="1em"
      isActive = { isActive }
      _hover={{ bg: "red.700", color: "black" }}
      _active={{ bg: "red.700", color: "black", boxShadow: "none" }}
      color="white"
    >
      { children }
    </Button>
  );
};

export default D2PlannerNavButton;
