'use client';
import { useHover } from "@mantine/hooks";
import React from "react";
import { Colors } from "@/utils/ui/colors";

function NouvelleAquitaine() {
  const { hovered, ref } = useHover();
  return <path ref={ref} style={{ cursor: 'pointer' }} fill={hovered ? Colors.primary : "white"} stroke={hovered ? "black" : Colors.strokeMap} id="nouvelle-aquitaine" strokeWidth={hovered ? "3" : "2"} d="M204.818 697.289l.603.439.56-.09.399-.539.979-.41 5.65-1.041 1.368-1.951 2.562-1.646 2.16-4.342 5.18-7.277.48-2.801 1.479-4.84 2.512-13.883 1.46-4.879 2.147-11.041 3.951-24.16 1.678-12.027.422-5.354-.619-4.316 1.602-2.344 1.5-5.51 1.051-1.309 1.299-.051 3.851.93 2.33-.4 1.41-1.211.021-1.309-1.041-1.26.319-.521-.688-1.35-4.629-4.369-1.812-1.021-.933.42-.799 1.756-2.75 4.195-.521 2.65 3.34-38.189 2.552-13.791 1.09-18.35.358-1.211 2.862-5.43.697-.271.352.17-.279 3.119 1.43 2.299 4.222 3.313 3.509 1.762 7.329 8.191 1.661 2.479 1.658 7.508 1.41 9.131 2.121 5.133 2.121 2.777 2.348 2.289 2.451 1.709.528 1.672-.169 1.4.35 3.639.529 1.479.961.811.459.021.18-.418-.817-4.662.54-2.459-.791-2.02-1.568-1.541 1.818.354 2.682 1.787h.51l.092-.5-1.71-2.891-5.08-2.084-2.052-1.6-1.062-2.137-.76-2.693-2.319-16.639-.812-3.408-2.07-5.582-2.649-4.719-2.898-3.33-8.609-6.281-.479-2.041-2.471-1.178-3.221-3.223-4.039-1.648-2.761-2.75-2.358.371-.689-.281.999-6.699 3.721-1.148.95.039 3.789 4.488 1.46 1.191 4.399 2.082.49-.121-.021-.502-1.381-1.561-5.521-4.488-1.521-1.82-.648-3.039-.76-1.91 2.089-2.26.853-.52 1.107-.01.592-.461.189-2.07-1.021-2.063.949-.939-.021-.646-.928-.621-1.132-2.828.552.309 1.317-.039.91-.859.683-1.49-.029-.93-1.09-1.221-1.092-.43-.722-3.76-1.938-1.361.609-.617-.04-.602-1.979-1.27.069-.73-.379-.538-2.85-.229-.399-.436.278-1.219 1.23-1.43-.303-1.551.551-.949 4.289-2.764.5-1.129-.02-.896-.45-2.031-.438-.709 1.198-1.82.853-.59 4.979-1.059 1.7-.652.438.441-.06.438-1.001 1.799.35.652.631.359 2.021-.104 4.85-1.107 1.449.238 4.451 2.682 3.789-1.99 2.861-.219 2.34-2.363 2.77-.389.842-1.391-.23-1.041-.698-.855-2.149-1.764-1.311.15-.18-.219-.213-1.111.592-3.438-.971-4.74 1.471-2.941-.658-5.238-1.621-3.29-.599-3.688-3.791-7.461-.06-.83.809-2.33-.77-1.358-1.392-1.271-3.528-2.239-.492-.642-.89-2.289-.409-2.78-.91-1.229-1.529-.9-2.219-3.549-2.092-1.521.16-.761 1.438.261 2.4 1.58 1.35.448 4.311-.648 1.74.5 3.38.291 4-.393 1.3-.488 1.371-1.2 2.729-1.438.328-1.239-.817-1.61 1.021-1.05 1.711-.479 2.148.858 4.318-1.2 1.66-.771 6.439-.81 5.85-.142.57.489 1 2.58 1.719.63.479-.199 1.48-2.431 2.502-1.062.998-2.851 1.9-2.43.881-.291 2.945.569 1.475 2.729.631.42 1.01-.079 1.109-.64.139 1.851.551.601 2.689-.302.213 1.062-.354 2.011.23.761.48.38 1.188.079 2.48-.71 1.02 1.521 1.83.301-.33 6.601.35 1.459 1.232 1.261 1.418.33 2.602-.289 2.93.521 1.93-1.32 1.031-.271 5.5-.393.781-.5.18-.779-.771-1.812-.107-1.21 5.607 3.221 1.182 1.909 1.303 3.921 7.229 10.811 2.641 2.141 1.682 2.25.85 2.58-.609 3.081.012 1.87.561 2.64.543.931 2.316 2.34 3.289 1.469.854 2.361.896.381h3.791l1.01.4.883.855.688 1.412-.49 2.25.143 1.129.729.98 1.791 1.17.568.92-1.029 3.459 1.182 1.26 2.561.971 3.67-.35 1.08-.381.998-1.541 1.02-.27 1.461 2.082 2.73 1.881.439.008 2-1.301 3.93-4.088.66-.17 2.158.607 2-.08.359 1.563.711.598 1.01.232 1.053-.24 1.869-1.529 2.979.48.92-.232 1.031-1.129.238-2.99.711-.641.736.359 1.924 2.229.979.201 2.09-1.301 1.063-.271 5.396.16 2.439.971 3.51.012 2.24.84 3.18-.689 5.801.34 2.008 2.893 1.674 1.67.92 3.229.58.709.738.502 2.883.723.68.736.449 1.473.631.898.811.021.84-.701.609.219 3.01 4.629 1.021 3.555 2.129 4.27-.391 3.9.223 1.93 2.059 4.648-.141 3.938-1.629 2.084-1.563 3.738-2.357 2.84-1.643-.131-1.299.682-1.332 1.482-1.328.838-.67.777-.229.82.236.99 1.592 2.27.723 2.369.5.529 1.469.41.84.873 1.859 2.355.521 1.271-.25 4.461-.568.801-1.781.918-1.049 3.713.502 1.508 1.355 1.975.25 4.709 1.121 1.129-1.146 5.09-.883 2.049-2.129-.107-3.131-1.838-1.199-.021-1.52.68-.211.818.951 1.061.158 1.02-1.25 3.029-1.061.73-1.971 3.27-3.109 1.551-.641 2.32-2.65 2.357-.16 2.041.949 1.969-.027 1.531-2.771 6.238-2.801 2.328-.529.939-.039.82 1.602 3.289-.029.75-.65.422-2.25.287-1.318.641-4.521.232-1.938.998-1.354-.748-.857-.061-4.063 2.148-3.109 1.08-1.219-.043-3.721-2.258-1.24-2.08-2.129-1.92-3.072-1.98-2-.607-2.049.639-.75-1.33-.721-.129-1.42 1.18-1.031.289-3.629 2.74-.291 1.611 1.311 4.34-.027.857-.711 1.4-.021 2.408-2.539 2.531-1.66 3.002-2.236.736-.861 1.252-.279.998.721 1.643-.027.699-1.26 2.061-4.313 3.041-2.4.639-.969.92-3.33 5.908-3.486 3.25-2.934 1.473-.85.922-.252.816 1.313 2.369.061 2.131.83 2.418 2.027 2.572-.18 3.49-.598.68-4.793.408-1.109-.229-1.768-1.119-.803.092-.723.629-.268 2.801-.75 1.779-.063.91.84 1.539 2.451 1.102.379.631-2.459 5.879-2.15 1.91.08.75 1.313 1.318-.201.82-1.229.24-2.23-.791-1.42.359-.479.521-.471 1.551-2.26 1.51-1.039 3.229-3.582 2.129-1.031.199-2.697-2.43-1.529-.537-5.148 1.738-2.701-.291-1.211.908-4.34 2.174-1.309.229-2.992 1.73-4.811-1.844-.818.105-1.08.947-1.291 2.27-1.068.893-.551.02-.58-.84-.77-.238-2.4.908-.889 1.709.25 2.701-.729.9-2.459-.07-1.092-.408-.391-.91.791-1.42-.063-1.16-.889-.969-1.252-.402-1.34.502-1.588 1.199-1.803 1.951-1.75.146-2.396-.338-2.893 2.059-.58.799-.119 1.082 1.309 1.551 1.072 2.52-1.49 4.432-.051 2.719.82 1.541-1.502 3.568-1.211.189-.777.541-.121.67.549 1.65-1.078 1.828-.241 1.373.974.816.477 1.729.512.701h2.342l5.578 1.17 1.061.75.672 1.658 1.561 1.313 1.818 4.098.361 1.514-.32.32-1.162-.08-.541.521.041 2.547.498.742.771.189 1.449-1.473.289-.18.439.229-.109 3.604 1.07 3.689-.5.58-1.621.592-.949 1.182-.6 2.947.6 2.369-.406.879-1.961 2.119-1.111 3.672-1.068-.1-.479.25-1.732 3.357-2.277 1.461-.971 1.379.143 4.33-.41.322-2.98.379-2.689 3.107.201 4.623-1.682 2.607-.33 1.361.563 4.279-.24-.23-.649.141-.771 1.33-.879-.389-4.301 3.139-1.67.131-3.212-1.512-1.72-.08-.41.383-.092 1.721-1.566.842-.281-.191.092-.77-.422-.801-1.578-.291-.053-1.018-2.438-3.271-3.237-2.26-1.851-.131-.474-.459-.258-.59.258-1.51-1.388-3.213-1.842-.58-4.669.842-4.78-.4-2.229-.729-2.961-2.512-3.08-.563-2.02-1.229-2.322.17-1.867-1.527-2.161-1.211-3.601-.672-1.029-.629-.932-1.078-.221-.895.4-.891 1.221-1.049-.161-.691-1.63-.357-1.529.631-1.051 1.197-.51 1.852-.159 2.191-.421.91-.801.258-2.979-.508-1.249-.723-1.03-1.16-.66-1.551 3.722-4.398.95-2.709.656-3.354-.338-3.43-2.041-1.949-2.029.342-2.5-1.313-3.221-.631-1.312.832-.761 2.02-1.68.279-.811-.531-.502-1.949.171-.939-.83-.811-1.853-.66-3.748 1.119-.431-2.105-.909-1.174-1.541-.75.08-2.816-.111.053v.002zm104.291 4.57l1.152-1.01.668-2.668-.51-1.441-1.369-.609-.83.148-.74.75-.49 2.65.619 1.719.689.432.811.021v.008h0zm-1.267 6.76l.947-.447 1.078-2.111-.598-1.961-1.611-1.049-.5.08-1.447 1.639-.184 1.49.24 1.201.51.748 1.563.42v-.01h.002zm-72.451-237.221l1.119.471 1.32-.316.641.67.159 2.781.681.799-.182 1.5 2.383 1.68.366.639-.399 4.242-.608 2.23-.681 1.059-.602-.271-.838-2.932-1.238-2.5-3.592-4.078-1.32-.961-2.168-3.039.348-1.791-1.76-4.479 1.121.15 1.979 1.037 3.28 3.121-.009-.012zm-11.289-22.078l-.101.434-1.94-.57-.369.6 1.07 1.869 1.969.16 1.971-.83.23.891 1.021.488 6.188 1.021 1.311.852 1.09 1.281.471 1.078-.988.393-3.291-.852-5.856-3.82-3.61.58-.74-.297-3-3.223 3.141-.842.921.201.528.58-.016.006h0z" />;
}

export default NouvelleAquitaine;