'use client';
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Box, Button, Container, Image, rem } from "@mantine/core";
import classes from "./Banner.module.css";
import Header from "../Headers/HeaderGuess/Header";

function Banner() {
  const router = useRouter();
  return <Box component="section" className={classes.bannerContainer}>
      <Box pos='absolute' top='0' left='0' right='0' bg={{base: 'transparent', md: 'white'}}>
        <Container size='xl'>
          <Header />
        </Container>
      </Box>
      <Box visibleFrom="md" h={120} />
        <Image priority component={NextImage} src="/banner.png" width={1920} height={700} alt="Banner" />
        <Button onClick={() => router.push("/cimetery")} w={{base: '90%', md: rem(222)}} classNames={{root: classes.buttonRoot}}>Visitez un cimetière</Button>
      </Box>;
}

export default Banner;
