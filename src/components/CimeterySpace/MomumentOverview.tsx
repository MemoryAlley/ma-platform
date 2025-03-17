import { Box, Button, Flex, Image as MantineImage, Popover, Stack, Text, Title } from "@mantine/core";
import classes from "./MomumentOverview.module.css"
import Image from "next/image";
import persona from '/public/persona.png'
import { PropsWithChildren } from "react";
import { Monument } from "@/types/monument";

const momumentPlaceholder: Monument = {
  name: 'Hugh Aackman',
  description: 'Une épitaphe est une inscription funéraire, placée sur une pièrre tombale.',
  years: '1984 - 2021',
  position: {
    x: 0,
    y: 0
  },
  id: 1,
}

export function MomumentOverview({ momumentDes = momumentPlaceholder, opened=false }: PropsWithChildren<{momumentDes?: Monument, opened: boolean}>) {
  return <Popover opened={opened}>
    <Popover.Dropdown className={classes.momument_container}>
      <Stack gap={12}>
        <MantineImage className={classes.monument_image} component={Image} src={persona} alt="persona" />
        <Box component="div">
          <Flex align="center" justify="space-between">
            <Title order={4}>{momumentDes.name}</Title>
            <Text>{momumentDes.years}</Text>
          </Flex>
          <Box component="p">
            {momumentDes.description}
          </Box>
        </Box>
        <Flex align="center" justify="space-between">
          <Button size="lg" w="120">Visiter</Button>
          <Button size="lg" w="120" variant="outline">Fleurir</Button>
        </Flex>
      </Stack>
    </Popover.Dropdown>
  </Popover>;
}