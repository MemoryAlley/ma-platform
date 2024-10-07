'use client';
import { useClickOutside, useDisclosure, useHover } from "@mantine/hooks";
import React from "react";
import { Colors } from "@/utils/ui/colors";
import MapPopup from "../Popup/MapPopup";


function NouvelleCaledonie() {
  const { hovered, ref } = useHover();
  const [opened, handlers] = useDisclosure(false)
  const refPopup = useClickOutside(() => handlers.close());

  return <MapPopup refPop={refPopup} regionName="Nouvelle Caledonie">
    <path onClickCapture={handlers.open} ref={ref} style={{ cursor: 'pointer' }} fill={hovered || opened ? Colors.primary : "white"} stroke={hovered || opened ? "black" : Colors.strokeMap} id="nouvelle-caledonie" strokeWidth={hovered || opened ? "3" : "2"} d="M502.598 1056.623l-2.735 1.31 13.959 13.827 9.528 12.654 15.264 12.398 8.479 10.959 15.397 11.354 23.354 12.527 13.967 11.092 13.955-5.616-1.301-11.221-9.788-4.177-9.657-8.346-26.484-13.703-8.219-8.482-8.351-11.083-8.483-2.876-12.396-6.785-11.221-8.482-15.268-5.35zm100.209 11.092h-8.352v11.094l8.352-2.614v-8.48zm16.569 9.525h-4.303v9.787l-1.437 2.873 7.047 10.954 5.484-4.042v-8.217l-4.18-4.438-2.611-6.917zm19.312 25.18v8.354l6.917 4.309 7.047-6.914-5.481-1.697-8.483-4.052zm-8.22 36.144l-4.174-1.434-1.305 9.787h6.918l-1.439-8.353z" />
  </MapPopup>;
}

export default NouvelleCaledonie;
