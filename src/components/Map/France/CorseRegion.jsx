'use client';
import { useHover } from "@mantine/hooks";
import React from "react";
import { Colors } from "@/utils/ui/colors";

function CorseRegion() {
  const { hovered, ref } = useHover();
  return <path style={{ cursor: 'pointer' }} ref={ref} id="corse" fill={hovered ? Colors.primary : "white"} stroke={hovered ? "black" : Colors.strokeMap} strokeWidth={hovered ? "3" : "2"} d="M688.986 793.836l1.09.051.871-.74.98.129 1.078-2.492 1.85-.287.752-.658.229-1.99.908-1.682-.371-.729-.729-.17.531-2.148.672-.801 2.068-.74.26-.549-.299-.672.299-1.83 1.1-.35 1.74 1.109 1.252-.318.959-1.021.82-2.701 1.711-.141 3.838-2.01 6.801-1.461 2.039-1.037.379-1.801 3.762-4 2.682-.238 4.291 1.02 1.549 1.021 1.197 2.717.383.271.76-.199 2.189-3.771.932-2.479-.541-1.961.451-1.479-.33-1.672-1.723-2.561 1.58-2.328-.41-1.609.199-1.254 1.762-1.998-.16-.938.25-.939-1.021-2.191.15-2.238.781-.51 2.408-.014.973-.379.678.949 1.611 1.08-.619 1.922.309 1.129.652.83-.252 1.521 1.148 7.578-.1 2.432-1.969 7.752-.012 4.639-.459 1.119.898.881.25.939-.16 1.371.41.328.742 1.82 2.33 1.311.559-.42-.041-.289.25.617.314 8.842.74 1.738-.611 2.172-.189 2.98 1.672 6.51-.451 10.248.438 1.975-.389 2.629-.381.639-1.682 1.6-1.607 3.092-5.49 7.854-.58 8.77.529 5.658-.08 5.91-1.17.98-.92 1.611.371.549h.389l-.361 1.738-1.729.49-.109 1.129-2.121-.346-.711.117-.33.447.092.563-.881 1.51.143.502 1.211.59 2.91-.99.309.41-.17.92-1.258 1.42-1.711.68-1.078 1.602-.91.168-.291.551.279.99-.279.982.83 1.059-.729.99.059.721-3.498 1.859v.6l.748 1.111-.619.83-.141.811.559.367 1.711-1.229-1.027 2.828-1.119.98-2.111-1.592-4.121-1.271.521-1.656.629-.279.15-.682-.99-.891-2.09-1.123.672-1.088v-.512l-.531-.379-2.191 1.381.16-.32-.469-.561-1.051.408-.893-.898-1.699-.57-1.568-.238-.91.18-1.6-1.367-1.4-.35-.77-1.031-1.479-.221.529-.563-.262-.879-3.471-1.18.232-1.582-.191-.549-.779-.449 1.09-3.131 1.051.359 3.391-1.582.643-.688.25-1 2.211-1.92-.291-.656-1.391-.063-3.801-1.092-2.83-.277-.521-.541.459-1.418-.379-.521-1.672.008-3.168 1.014.188-.48-.398-.539-1.723-.271 1.539-.271 1.434-1.248.328-.971-.09-.939-.67-.602 2.369-.447 2.082-1.24.168-.49-.301-.779-.83-.828 1.439-.813-.5-1.631 1.459-2.512-1.619-2.209-1.318-.529-1.381.17-3.291 1.521-2.539.17-1.76.689-.182-.439.65-1.49-.342-1.287-1.24-1.473 2.26-.229 1.313-.529 1.029-1.621-.119-.529-.48-.338.314-.563 1.09-.818 3.457-1.49.381-.357.092-1.033-.422-.818-.969-.76-1.723-3.201-.84-.146-1.498.406-.711-1.27-1.107-.672-2.271-.35.141-.973-.762-.559.721-.512.172-.939-.398-.398h-1.051l.438-.34.254-.799-.24-1.051-.568-.412.23-1.049-1.57-.932.1-.303 2.129-.066 1.461-.91 2.49-.49 2.27-1.051.271-.98-1.24-1.238-2.16-1.068-.588-1.15-.57-.039-.729.643-.131-.434 1.922-1.197.051-.652-1.631-1.211-1.42.141-1.449.611-.563-1.508v-.973l-.051-.033h-.005z" />;
}

export default CorseRegion;