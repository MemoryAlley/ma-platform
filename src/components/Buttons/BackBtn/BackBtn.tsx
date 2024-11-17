'use client';
import { Box, Tooltip } from "@mantine/core";
import React from "react";
import LetterBtn from "../LetterBtn/LetterBtn";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function BackBtn() {
  const router = useRouter();
  return <Tooltip label="Retour">
      <Box pos="fixed" top={30} left={50} style={{ zIndex: 999 }}>
      <LetterBtn Icon={IconArrowLeft} action={router.back} />
    </Box>
  </Tooltip>
}

export default BackBtn;
