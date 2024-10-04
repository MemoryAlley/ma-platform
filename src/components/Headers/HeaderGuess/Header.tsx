'use client';
import dynamic from "next/dynamic";
import React from "react";
import { Box, Burger, Button, Flex, Image, Text, useMantineTheme } from "@mantine/core";
import NextImage from "next/image";
import { IconUser } from "@tabler/icons-react";
import classes from "./Header.module.css"

function Header() {
  const memoryAlleyColor = useMantineTheme().colors.memoryAlley[5]
  return <Flex component="header" justify='space-between' align='center' h={120}>
          <Box component="a" href="/" title="Revenir à la page d'acceuil">
            <Image
              visibleFrom="md"
              component={NextImage}
              src="/logo.png"
              width={295}
              height={48} 
              alt="Memory Alley Logo" 
            />
            <Image
              hiddenFrom="md"
              component={NextImage}
              src="/logoTiny.png"
              width={48}
              height={26}
              alt="Memory Alley Logo Mobile"
            />
          </Box>
          <Button visibleFrom="md" classNames={{label: classes.buttonDeskLabel}} title="Se connecter" variant="white" size="lg">
            <IconUser size={20} />
            <Text size="md">Se connecter</Text>
          </Button>
          <Button hiddenFrom="md" title="Se connecter" variant="transparent" size="lg" classNames={{root: classes.buttonMobileRoot}}>
            <Burger aria-label="Toggle navigation" color={memoryAlleyColor} />
          </Button>
        </Flex>;
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
