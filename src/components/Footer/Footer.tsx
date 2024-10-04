import { Anchor, Box, Container, Flex, Stack, Text, Title } from "@mantine/core";
import React from "react";

function Footer() {
  return <Box component="footer" bg="#F6F9FD">
        <Container size="lg" py={40}>
          <Flex justify='space-between' gap={{base: 15, md: 5}} mb={50}>
            <Stack>
              <Title order={6}>Memory Alley</Title>
              <Flex direction={{base: 'column', md: 'row'}} gap={{base: 11, md: 36}}>
                <Anchor underline="hover" size="xs" c='dark'>Contactez-nous</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>FAQ</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>Qui somme-nous ?</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>Soutenez-nous</Anchor>
              </Flex>
            </Stack>
            <Stack>
              <Title order={6}>Les mémoriels</Title>
              <Flex direction={{base: 'column', md: 'row'}} gap={{base: 11, md: 36}}>
                <Anchor underline="hover" size="xs" c='dark'>Créer un mémoriel</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>Visitez un cimetière</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>Créer un cimetière dynastique</Anchor>
              </Flex>
            </Stack>
          </Flex>
          <Flex gap={{base: 20, md: 50}} justify='center' wrap="wrap" align="center" mb={14}>
            <Text size="xs">©{new Date().getFullYear()} memory-alley.fr</Text>
            <Anchor underline="hover" size="xs" c='dark'>CGU</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>CGV</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>Mentions légales</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>Politique de protection des données personnelles</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>Politique cookies</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>Modifier les choix cookies</Anchor>
          </Flex>
          <Text ta={{base: 'center', md: 'start'}} size="xs">Règle de diffusion de référencement et de déréférencement des produits et des services</Text>
        </Container>
      </Box>;
}

export default Footer;
