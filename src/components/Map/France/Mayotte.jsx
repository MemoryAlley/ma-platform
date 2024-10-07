'use client';
import { useClickOutside, useDisclosure, useHover } from "@mantine/hooks";
import React from "react";
import { Colors } from "@/utils/ui/colors";
import MapPopup from "../Popup/MapPopup";

function Mayotte() {
  const { hovered, ref } = useHover();
  const [opened, handlers] = useDisclosure(false)
  const refPopup = useClickOutside(() => handlers.close());

  return <MapPopup refPop={refPopup} regionName="Mayotte">
    <path onClickCapture={handlers.open} ref={ref} style={{ cursor: 'pointer' }} fill={hovered || opened ? Colors.primary : "white"} stroke={hovered || opened ? "black" : Colors.strokeMap} id="mayotte" strokeWidth={hovered || opened ? "3" : "2"} d="M508.229 937.342h-.685l-2.671-8.4 3.503-3.638 1.15 2.869.318 2.952-.502 3.013-1.112 3.213v-.009h-.001zm-40.848-30.866l-1.374.991-.184.61 2.098.475.794 1.176 2.885 2.49 3.873 4.693 2.156 1.719 3.294.821 6.558-.052 3.45 1.032 3.438 2.323 1.39 2.315.025 2.814-.899 3.771-4.907 7.288-2.021 1.584.187 2.793 1.376 2.56 3.713 2.478-.394 2.537-4.062 8.543-3.435 4.098-1.604 4.6 3.742 5.566-1.519 2.263-2.022 1.411-1.006-1.823-.543-.264-1.453.223-2.022 1.378-2.421.685-2.152-.582-2.976-1.774-1.64.547.155-2.496-1.112-2.396-2.302-1.032-2.538.233v-.417l3.846-2.14.385-3.572-1.97-3.743-3.74-2.101.289-.585 1.403-.898 2.048-.187 1.073.662 3.741 4.459 3.718 2.247 2.495-.976.792-3.224-1.002-3.836-1.813-2.897-2.301-2.617-5.58-4.748 3.424-1.005.478-.53-.093-1.788-1.203-1.781-.897-3.084-.73-6.283-.793-3.161-2.077-1.64-2.475-.818-2.101-1.359-2.303-3.756-.539-5.49 9.663-10.498.794 1.705-1.086.45.006.013h0z" />
  </MapPopup>;
}

export default Mayotte;
