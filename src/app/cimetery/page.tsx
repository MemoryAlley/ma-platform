import { Box, Container, Flex } from "@mantine/core";
import React from "react";
import SearchPannel from "@/components/SearchPanel/SearchPannel";
import "./style.css";
import Image from "next/image";


function Cimetery() {
  return <Box pos="relative">
      <Flex justify="space-around" pt={64}>
        <Image src="/assets/controls.png" width={213} height={410} alt="controls_1" />
        <Image src="/assets/controls.png" width={213} height={410} alt="controls_2" />
        <Image src="/assets/controls.png" width={213} height={410} alt="controls_3" />
      </Flex>
      <Box pos="absolute" top={0} bottom={0} left={0} right={0}>
        <Container fluid pos="relative">
          <SearchPannel />
        </Container>
      </Box>
  </Box>
}

export default Cimetery;
