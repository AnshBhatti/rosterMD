import { Flex } from "@chakra-ui/react";
import React from "react";

const HSeparator = (props) => {
  const { variant, children, ...rest } = props;
  return <Flex h='3px' w='80%' bg='rgba(243, 102, 57, 1)' {...rest}></Flex>;
};

const VSeparator = (props) => {
  const { variant, children, ...rest } = props;
  return <Flex w='10px' bg='rgba(255, 255, 255, 1)' {...rest}></Flex>;
};

export { HSeparator, VSeparator };
