'use client'
import React from "react";
import { Box, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { MomumentOverview } from "./MomumentOverview";
import { originalGravesData,cimmetryLayoutMock,injectGravesIntoLayout } from "./cimmetryLayout";



function CimeterySpace() {


  return <Box py={110}>
    <SimpleGrid cols={10} spacing={20}>


      {injectGravesIntoLayout(originalGravesData, cimmetryLayoutMock).map((item, index) =>
        (item?.isPlaceholder || item?.isSimplePlaceholder) ? <Box component="div" key={index} h={item?.isPlaceholder ? 256 : 0} w={item?.isPlaceholder ? 256 : 0} /> :
          <Box key={index} id={item?.grave ? `grave-${index + 1}` : ""} className={item?.grave ? "grave" : ""} style={{ height: "fit-content", width: "fit-content", position: "relative" }}>
            <Image

              src={item?.imgSrc || ""}
              width={item.isSmall ? 128 : item.isMedium ? 256 : item.isMidLarge ? 192 : 384}
              height={item.isSmall ? 128 : item.isMedium ? 256 : item.isMidLarge ? 384 : 384}
              alt="item"
              style={item.rotate ? { rotate:item?.rotateRatio || '90deg' } : undefined}
            />
            {item?.grave && <MomumentOverview momumentDes={{id:0,name:item?.name || "",years:item?.years || "",description:item?.description || "",image:item?.image || ""}} opened={true} monumentId={`monument${index + 1}`} />}
          </Box>
      )}
      {/* <Image src="/assets/ground_1.png" width={128} height={128} alt="ground" />

     { [...Array(9)].map((item)=>
      <Box key={item} component="div" w={256} h={256} />
    )}

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
      <Image src="/assets/bench_1.png" style={{rotate: '90deg'}} width={150} height={200} alt="grave" /> */}
    </SimpleGrid>
  </Box>
}

export default CimeterySpace;
