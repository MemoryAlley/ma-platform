'use client';
import React from "react";
import MemorialBtn from "../Buttons/MemorialBtn/MemorialBtn";
import PrimaryLetter from "../Buttons/PrimaryLetter/PrimaryLetter";
import LetterBtn from "../Buttons/LetterBtn/LetterBtn";
import { Box, SimpleGrid, Stack } from "@mantine/core";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function SearchPannel() {
  const [activeLetter, setActiveLetter] = React.useState<string | undefined>();
  const handleClickOnLetter = (v: string | undefined) => {
    setActiveLetter(v);
  }
  return <Box pos="absolute" right={0}>
    <Stack px={20} py={40} align="center" justify="center">
      <PrimaryLetter />
      <SimpleGrid cols={2} spacing={10}>
        {
          alphabet.map((letter, i) => <LetterBtn
              key={i}
              label={letter}
              isActive={letter === activeLetter}
              action={handleClickOnLetter}
            />
          )
        }
      </SimpleGrid>
      <LetterBtn action={() => console.log('Search...')} />
      <Box mt={20}>
        <MemorialBtn label="Créer" />
      </Box>
    </Stack>
  </Box>;
}

export default SearchPannel;
