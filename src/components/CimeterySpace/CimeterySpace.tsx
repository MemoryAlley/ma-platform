'use client'
import React, { useState } from "react";
import { Box, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { MomumentOverview } from "./MomumentOverview";

function CimeterySpace() {
  const [opened, setOpened] = useState(false)

  return <Box py={110}>
    <SimpleGrid cols={10} spacing={20}>
      <Image src="/assets/ground_1.png" width={128} height={128} alt="ground" />
      <Box component="div" w={256} h={256} />
      <Box component="div" w={256} h={256} />
      <Box component="div" w={256} h={256} />
      <Box component="div" w={256} h={256} />
      <Box component="div" w={256} h={256} />
      <Box component="div" w={256} h={256} />
      <Box component="div" w={256} h={256} />
      <Box component="div" w={256} h={256} />
      <Box component="div" w={256} h={256} />
      <Image src="/assets/stone_2.png" width={128} height={128} alt="ground" />
      <Image src="/assets/tree_1.png" width={384} height={384} alt="ground" />
      <div />
      <Image src="/assets/lantern_1.png" width={192} height={384} alt="ground" />
      <div />
      <div />
      <Image src="/assets/lantern_2.png" width={192} height={384} alt="ground" />
      <Image src="/assets/tree_1.png" width={384} height={384} alt="ground" />
      <div />
      <Image src="/assets/stone_1.png" width={256} height={256} alt="ground" />
      <Box component="div" w={256} h={256} />

      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/ground_3.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <div />
      <Image src="/assets/splash.png" width={128} height={128} alt="ground" />
      <Box pos="relative">
        <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)} />
      <MomumentOverview opened={opened} />
      </Box>
      <Image src="/assets/ground_4.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <div />
      <div />
      <Image src="/assets/grave.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/ground_5.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave.svg" width={128} height={128} alt="grave" />
      <div />
      <div />
      <Image src="/assets/grave.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/ground_6.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave.svg" width={128} height={128} alt="grave" />
      <Box component="div" w={256} h={256} />


      <Box component="div" w={256} h={256} />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/lantern_1.png" width={192} height={384} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/splash.png" width={128} height={128} alt="ground" />
      <div />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/lantern_2.png" width={192} height={384} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Box component="div" w={256} h={256} />


      <Image src="/assets/splash.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/ground_8.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <div />
      <div />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/ground_9.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Box component="div" w={256} h={256} />

      <Image src="/assets/bench_1.png" style={{rotate: '90deg'}} width={150} height={200} alt="grave" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/ground_10.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <div />
      <div />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/bush.png" width={128} height={128} alt="ground" />
      <Image src="/assets/grave_2.svg" width={128} height={128} alt="grave" />
      <Image src="/assets/bench_1.png" style={{rotate: '90deg'}} width={150} height={200} alt="grave" />
    </SimpleGrid>
  </Box>
}

export default CimeterySpace;
