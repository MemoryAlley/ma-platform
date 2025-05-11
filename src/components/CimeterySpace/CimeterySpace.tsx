'use client'
import React from "react";
import { Box, SimpleGrid } from "@mantine/core";
import Image from "next/image";
import { MomumentOverview } from "./MomumentOverview";
import { originalGravesData,cimmetryLayoutMock ,generateCimmetryLayout} from "./cimmetryLayout";



function CimeterySpace() {


  return <Box py={110}>
    <SimpleGrid cols={10} spacing={20}>


      {generateCimmetryLayout(originalGravesData, cimmetryLayoutMock).map((item, index) =>
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
    </SimpleGrid>
  </Box>
}

export default CimeterySpace;
