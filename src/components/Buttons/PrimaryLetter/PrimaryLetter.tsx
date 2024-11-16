import React from "react";
import { Box, Button } from "@mantine/core";
import classes from "./PrimaryLetter.module.css";
import { Chain1, Chain2, LetterA } from "@/components/Graves/Cross";

function PrimaryLetter() {
  return <Box pos="relative">
    <Box pos="absolute" top={-40} left={-30}>
      <Chain2 />
    </Box>
    <Box pos="absolute" top={-40} left={60}>
      <Chain1 />
    </Box>
    <Button disabled classNames={classes}>
      <LetterA />
    </Button>;
  </Box>
}

export default PrimaryLetter;
