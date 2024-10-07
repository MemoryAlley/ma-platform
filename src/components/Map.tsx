'use client';
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import CorseRegion from "./Map/France/CorseRegion";
import ValDeLoire from "./Map/France/ValDeLoire";
import Bretagne from "./Map/France/Bretagne";
import BourgogneFrancheComte from "./Map/France/BourgogneFrancheComte";
import GrandEst from "./Map/France/GrandEst";
import Occitanie from "./Map/France/Occitanie";
import HautDeFrance from "./Map/France/HautDeFrance";
import AuvergneRhoneAlpes from "./Map/France/AuvergneRhoneAlpes";
import Normandie from "./Map/France/Normandie";
import PaysDeLaLoire from "./Map/France/PaysDeLaLoire";
import PACA from "./Map/France/PACA";
import IleDeFrance from "./Map/France/IleDeFrance";
import NouvelleAquitaine from "./Map/France/NouvelleAquitaine";
import Martinique from "./Map/France/Martinique";
import Mayotte from "./Map/France/Mayotte";
import Guadeloupe from "./Map/France/Guadeloupe";
import Reunion from "./Map/France/Reunion";
import WallisEtfutuna from "./Map/France/WallisEtfutuna";
import SaintPierreMiquelon from "./Map/France/SaintPierreMiquelon";
import PolynesieFrancaise from "./Map/France/PolynesieFrancaise";
import NouvelleCaledonie from "./Map/France/NouvelleCaledonie";
import Guyane from "./Map/France/Guyane";

function Map() {
  const matches = useMediaQuery('(min-width: 56.25em)')
  return <svg style={{transition: 'all 3ms ease-out'}} version="1.1" xmlns="http://www.w3.org/2000/svg" width={matches ? "527" : "380"} height={matches ? "515" : "400"} viewBox={matches ? "0 -14 844 998" : "0 -14 860 998"}>
	<CorseRegion />

	<ValDeLoire />

	<Bretagne />

	<BourgogneFrancheComte />

	<GrandEst />

	<Occitanie />

	<HautDeFrance />

	<AuvergneRhoneAlpes />

	<Normandie />

	<PaysDeLaLoire /> 

	<PACA />

	<IleDeFrance />

	<NouvelleAquitaine />

	<Guyane />

	<Martinique />

	<Mayotte />

	<Guadeloupe />

	<Reunion />

	<WallisEtfutuna />

	<SaintPierreMiquelon />

	<PolynesieFrancaise />

	<NouvelleCaledonie />
</svg>

}

export default Map;
