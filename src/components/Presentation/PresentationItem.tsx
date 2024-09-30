'use client';
import React from "react";
import { Accordion } from "@mantine/core";
import classes from "./PresentationItem.module.css"

const presentationOptions = [
  {
    title: "Créer un monument",
    description: "Créer un monument sur Cimetières Numériques est rapide et intuitif. Vous choisissez un mémorial, ajoutez une photo, sélectionnez un lieu important et rédigez une courte biographie. Chaque monument peut être privé ou public, selon votre souhait. Il vous permet de rendre hommage de manière personnalisée tout en sauvegardant la mémoire de la personne dans un lieu qui lui est cher."
  },
  {
    title: "Visiter un cimetière",
    description: "Vous pouvez visiter les monuments publics et privés des personnes qui vous sont chères. Vous pouvez y laisser des messages, des photos et des fleurs virtuelles. Vous pouvez également allumer une bougie virtuelle pour honorer la mémoire de la personne."
  },
  {
    title: "Contribuer à la plateforme",
    description: "Vous pouvez contribuer à la plateforme en ajoutant des monuments, en laissant des messages sur les monuments existants, en ajoutant des photos et des fleurs virtuelles, en allumant des bougies virtuelles, en partageant des monuments sur les réseaux sociaux, en invitant des amis à visiter des monuments, en signalant des monuments inappropriés, etc."
  }
]

export function PresentationItem() {

  const items = presentationOptions.map(option=>(
    <Accordion.Item  key={option.title} value={option.title}>
      <Accordion.Control>{option.title}</Accordion.Control>
      <Accordion.Panel>{option.description}</Accordion.Panel>
    </Accordion.Item>
  ))
  
  return <Accordion defaultValue={presentationOptions[0].title} classNames={classes}>
    {items}
    </Accordion>;
}
