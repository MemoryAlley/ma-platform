import { Flex, Popover, Stack, Text, Title } from "@mantine/core";
import React from "react";
import classes from "./MapPopup.module.css"

type Props = {
  children: React.ReactNode;
  regionName: string;
  refPop: React.RefObject<HTMLDivElement>;
  memory?: {
    nbRegion: number;
    nbCity: number;
    nbCemetery: number;
    nbMonument: number;
  }
}

function MapPopup({ children, regionName, memory, refPop }: Props) {
  return <Popover>
    <Popover.Target>
      {children}
    </Popover.Target>
    <Popover.Dropdown classNames={classes} ref={refPop}>
      <Stack gap={12}>
        <Title order={6}>{regionName}</Title>
        <Flex align="center" columnGap={4}>
          <Text size="sm" c="memoryAlley">{memory?.nbRegion ?? "2"}</Text>
          <Text size="sm">Régions</Text>
        </Flex>
        <Flex align="center" columnGap={4}>
          <Text size="sm" c="memoryAlley">{memory?.nbCity ?? "12"}</Text>
          <Text size="sm">Villes</Text>
        </Flex>
        <Flex align="center" columnGap={4}>
          <Text size="sm" c="memoryAlley">{memory?.nbCemetery ?? "13"}</Text>
          <Text size="sm">Cimétières</Text>
        </Flex>
        <Flex align="center" columnGap={4}>
          <Text size="sm" c="memoryAlley">{memory?.nbMonument ?? "147"}</Text>
          <Text size="sm">Momuments</Text>
        </Flex>
      </Stack>
    </Popover.Dropdown>
  </Popover>;
}

export default MapPopup;
