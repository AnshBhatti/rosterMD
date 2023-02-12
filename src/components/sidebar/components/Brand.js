import React from "react";
import { IconButton, Image } from "@chakra-ui/react";
// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "../../icons/Icons";

import { HSeparator } from "../../separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <IconButton h='200px' w='100%' my='0px' icon={<Image src={require('../../../Logo.png')} style={{width: "100%", height: "100%"}} alt="RosterM.D."/>} />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
