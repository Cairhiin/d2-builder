import React from 'react';
import { Flex } from "@chakra-ui/react";

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={5}
      bg={["transparent", "transparent", "blue.900", "blue.900"]}
      color={["blue.900", "blue.900", "white", "white"]}
      {...props}
    >
      {children}
    </Flex>
  )
}

export default NavBarContainer;
