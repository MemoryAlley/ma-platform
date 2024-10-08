'use client';
import { useClickOutside, useDisclosure, useHover } from "@mantine/hooks";
import React from "react";
import { Colors } from "@/utils/ui/colors";
import MapPopup from "../Popup/MapPopup";

function Guadeloupe() {
  const { hovered, ref } = useHover();
  const [opened, handlers] = useDisclosure(false)
  const refPopup = useClickOutside(() => handlers.close());

  return <MapPopup refPop={refPopup} regionName="Guadeloupe">
    <path onClickCapture={handlers.open} ref={ref} style={{ cursor: 'pointer' }} fill={hovered || opened ? Colors.primary : "white"} stroke={hovered || opened ? "black" : Colors.strokeMap} id="guadeloupe" strokeWidth={hovered || opened ? "3" : "2"} d="M265.989 929.966l3.001-2.567 1.731-.703.858.264-3.175 2.12-2.404.886h-.011 0zm-38.072 2.156l1.319-4.35.596-.73 1.654-.533.438-1.31-.188-1.728-2.166-1.244-.811-4.075 2.198-2.99 3.267-1.928 3.795 3.119.886 1.615.323 5.382 2.416 3.595 2.343 1.472.939-.437 3.095.476 8.213 5.791 1.549.465-.738.252-4.377-1.191-14.415 3.309-4.085 1.437-3.146-.87-2.342-1.615-1.03-1.793.318-2.114-.051-.005h0zm17.495 29.858l1.72-3.479 1.387-1.584 1.532-.862 1.67.373 1.429 1.23.899 2.313 1.244 1.244.173 1.812-1.482 1.829-1.944.978-2.631.646-2.09-.346-1.907-4.154h0zm-29.979-2.103l-.343-.868.46-.969-.581-1.135-2.578-2.155-1.151-2.642-.749-.602-.913-2.763-.067-6.623-1.176-3.068.33-1.431-1.44-2.801.063-4.921 1.997-2.963 1.021-.871 1.176-.305 1.985 1.519 5.075 1.456 2.673 1.428.898 1.099-.53.235.018.965 1.148.106.952.994.858-.159.926-1.282.619-.104.346.437-.464 1.722.438 1.483-1.773.555-.637 1.175.176 3.955 1.058 3.081.541 4.525-.647 4.284-2.423 2.946-3.651 2.186-3.623 1.547-.012-.036h0zm9.323 7.195l.118-.25.21-.017-.157.146-.171.121h0zm-4.031.807l.223.36-.358.417-.25-.156.395-.632-.01.011z" />
  </MapPopup>;
}

export default Guadeloupe;
