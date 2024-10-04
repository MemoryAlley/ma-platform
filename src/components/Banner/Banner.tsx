'use client';
import NextImage from "next/image";
import React from "react";
import { Box, Button, Container, Image } from "@mantine/core";
import classes from "./Banner.module.css";
import Header from "../Headers/HeaderGuess/Header";

function Banner() {
  return <Box component="section" className={classes.bannerContainer}>
      <Box pos='absolute' top='0' left='0' right='0' bg={{base: 'transparent', md: 'white'}}>
        <Container size='xl'>
          <Header />
        </Container>
      </Box>
      <Box visibleFrom="md" h={120} />
        <Image priority component={NextImage} src="/banner.png" width={1920} height={700} alt="Banner" />
        <Button classNames={{root: classes.buttonRoot}}>Visitez un cimetière</Button>
      </Box>;
}

export default Banner;
