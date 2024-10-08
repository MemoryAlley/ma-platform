'use client';
import { useClickOutside, useDisclosure, useHover } from "@mantine/hooks";
import React from "react";
import { Colors } from "@/utils/ui/colors";
import MapPopup from "../Popup/MapPopup";


function PolynesieFrancaise() {
  const { hovered, ref } = useHover();
  const [opened, handlers] = useDisclosure(false)
  const refPopup = useClickOutside(() => handlers.close());

  return <MapPopup refPop={refPopup} regionName="Polynesie Française">
    <path onClickCapture={handlers.open} ref={ref} style={{ cursor: 'pointer' }} fill={hovered || opened ? Colors.primary : "white"} stroke={hovered || opened ? "black" : Colors.strokeMap} id="polynesie-francaise" strokeWidth={hovered || opened ? "3" : "2"} d="M427.184 1069.176h3.784v-3.131h-4.698l.914 3.131zm-4.829-3.131v-4.699h-13.31l2.866 5.874 1.961 1.041h5.613l2.87-2.216zm-1.959 25.182h-2.738l.915 3.916h1.823v-3.916zm-2.739-12.396l.915-2.087-2.87-.912v1.955l1.955 1.044zm18.789 2.743l2.216-.917 1.568-1.044-2.87-.782-2.74-4.043-5.871 4.043 2.999 3.654 1.826-1.828 1.175.521 1.697.396zm3.913 3.907l-.914 2.873 2.74-.909v-1.964h-1.826zm-.914 28.969l-2.873-2.864h-4.563l-4.825-4.962h-4.962l-2.735 2.611h-4.183l-6.258 6.391 5.739 12.53.917 3.779 9.521 2.872v-3.257h9.002l3.787 3.778-1.439 6.394 2.873 2.869h12.791v-8.348l-3.395-3.263h-5.088l-4.309-3.781v-14.749zm-50.229-47.23v-2.087h-2.87v4.045l2.87-1.958zm-6.797-8.101h1.324v1.323h-1.324v-1.323zm-9.513-.645l-2.611.917v1.955h2.611v-2.872zm2.214 5.742v3.004l2.611.912v-2.087l-2.611-1.829zm-2.999 28.843h-3.655v-7.577l-6.782-.906v6.657l2.869 12.521h3.913l2.741-4.698 1.04-4.435-.126-1.562zm-29.619-13.835c0-.788-.262-1.305-.654-1.437h-9.521v1.832l.909 6.914 6.785.912.915.782c.524.267.911.138.911-.782l.912-6.786-.257-1.435h0zm2.213 17.877l-4.693-5.871-2.084 4.951 3.001 15.529c.127.782.522.917 1.302.527l1.439-.527 2.867-4.827 3.91-1.959-1.173-3.913-4.569-3.91h0zm58.589 12.657l-.912-6.915h-5.739l-1.047 1.952-9.26 1.044-5.742-1.044v4.045l2.87 5.613 4.822 2.873 2.743 5.865h3.784l5.742-7.691 2.739-5.742zm-85.982-61.981h-3.787l-.911 3.652 4.698-.782v-2.87zm.909 27.011l2.74 4.825v-5.61l-2.74-6.783-2.999 10.567 1.044 1.826 1.955-4.825z" />
  </MapPopup>;
}

export default PolynesieFrancaise;
