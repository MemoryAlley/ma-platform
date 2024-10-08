'use client';
import { useClickOutside, useDisclosure, useHover } from "@mantine/hooks";
import React from "react";
import { Colors } from "@/utils/ui/colors";
import MapPopup from "../Popup/MapPopup";


function Reunion() {
  const { hovered, ref } = useHover();
  const [opened, handlers] = useDisclosure(false)
  const refPopup = useClickOutside(() => handlers.close());

  return <MapPopup refPop={refPopup} regionName="Reunion">
    <path onClickCapture={handlers.open} ref={ref} style={{ cursor: 'pointer' }} fill={hovered || opened ? Colors.primary : "white"} stroke={hovered || opened ? "black" : Colors.strokeMap} id="reunion" strokeWidth={hovered || opened ? "3" : "2"} d="M112.923 913.935l1.426.25 1.482-.527 1.604.527 3.661-.039 2.867 1.508 4.642 1.085 1.271.741 3.175 3.251.714 1.442.426 3.754.673 1.441 2.51 2.669 1.029 4.922 2.634 1.508 1.89 3.355 5.212 2.567 1.112 1.109.423 1.903-1.43 3.686-1.731 8.375-.356 6.759-.793 1.708-1.878.711-5.604.211-3.389 1.797-2.313.356-2.303-.132-1.61-.646-2.092.618-2.523.104-4.789-.739-5.009-3.295-7.564-2.537-1.627-1.017-2.313-2.861-4.524-.354-4.656-6.006-1.201-2.101-.834-6.434-4.404-5.91-2.119-4.6v-1.933l.566-2.115.994-1.628 3.369-1.415 1.523-1.902.569-2.238-.438-1.612.729-1.109-.411-1.164.82-.371 3.661-.12 7.405-4.614h6.51l2.959 1.099.055-.037h0z" />
  </MapPopup>;
}

export default Reunion;
