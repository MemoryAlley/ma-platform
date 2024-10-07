'use client';
import { useClickOutside, useDisclosure, useHover } from "@mantine/hooks";
import React from "react";
import { Colors } from "@/utils/ui/colors";
import MapPopup from "../Popup/MapPopup";


function WallisEtfutuna() {
  const { hovered, ref } = useHover();
  const [opened, handlers] = useDisclosure(false)
  const refPopup = useClickOutside(() => handlers.close());

  return <MapPopup refPop={refPopup} regionName="Wallis et Futuna">
    <path onClickCapture={handlers.open} ref={ref} style={{ cursor: 'pointer' }} fill={hovered || opened ? Colors.primary : "white"} stroke={hovered || opened ? "black" : Colors.strokeMap} id="wallis-et-futuna" strokeWidth={hovered || opened ? "3" : "2"} d="M150.059 1057.354l-4.18-7.176-6.648-8.088-2.219.654-4.438 3.262c-.65.385-1.175 1.305-1.434 2.349l-1.178 6.129c-.129.788 0 1.955.264 3.787v4.04l-2.606 2.087-6.398 2.087 1.308 6.653 6.132 2.606 2.867 3.658 1.046 2.732-.261 2.875 4.306 1.304 2.609-2.219c.39-.132 1.175.132 1.96.915l1.437 1.304 1.694-.911 2.214-1.563-.654-.788c-.384-.648-1.172-.915-2.477-.915-1.176-.129-1.958-.387-1.958-.908l-.261-3.916 1.563-5.742h1.565l.264-1.302-.264-.917-.391-1.821 3.002-3.004 3.136-7.172h0zm-57.279 49.191l-2.09.131-1.437-2.219-1.957.264-4.172-2.872-1.697.909-.656 3.528 4.174 10.825 3.134 2.087.526 2.22 8.739 3.396 14.611-.264 6.265.914 3.001-1.304 2.087-1.439-4.042.132-2.351-1.826-4.96-.653-4.303-2.738-8.09-8.222-6.782-2.869zm38.094 22.183l-3.522-.393-5.998.78-3.392 2.614-1.57 3.781 2.222 1.958 2.219-.648 4.045 2.084.521 1.824h2.219l12.913-8.612-7.435-1.434-2.222-1.954z" />
  </MapPopup>;
}

export default WallisEtfutuna;
