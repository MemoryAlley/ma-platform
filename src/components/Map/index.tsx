'use client';
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import CorseRegion from "./France/CorseRegion";
import ValDeLoire from "./France/ValDeLoire";
import Bretagne from "./France/Bretagne";
import BourgogneFrancheComte from "./France/BourgogneFrancheComte";
import GrandEst from "./France/GrandEst";
import Occitanie from "./France/Occitanie";
import HautDeFrance from "./France/HautDeFrance";
import AuvergneRhoneAlpes from "./France/AuvergneRhoneAlpes";
import Normandie from "./France/Normandie";
import PaysDeLaLoire from "./France/PaysDeLaLoire";
import PACA from "./France/PACA";
import IleDeFrance from "./France/IleDeFrance";
import NouvelleAquitaine from "./France/NouvelleAquitaine";
import Martinique from "./France/Martinique";
import Mayotte from "./France/Mayotte";
import Guadeloupe from "./France/Guadeloupe";
import Reunion from "./France/Reunion";
import WallisEtfutuna from "./France/WallisEtfutuna";
import SaintPierreMiquelon from "./France/SaintPierreMiquelon";
import PolynesieFrancaise from "./France/PolynesieFrancaise";
import NouvelleCaledonie from "./France/NouvelleCaledonie";
import Guyane from "./France/Guyane";

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
