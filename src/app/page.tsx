/* eslint-disable react/no-unescaped-entities */
import { Flex, Stack, Image, Button, Text, Box, Title, Container, Burger, Anchor, rem } from "@mantine/core";
import { IconMapPin, IconUser } from '@tabler/icons-react';
import NextImage from "next/image";

import { PresentationItem } from "../components/Presentation/PresentationItem";
import Map from "@/components/Map";
import SearchMemorial from "@/components/SearchMemorial";



export default function Home() {
  return (
    <Box component='div'>
      <Container size='xl'>
        <Flex component="header" justify='space-between' align='center' h={120}>
          <Box component="a" href="/" title="Revenir à la page d'acceuil">
            <Image visibleFrom="md" component={NextImage} src="/logo.png" width={295} height={48} alt="Memory Alley Logo" />
            <Image hiddenFrom="md" component={NextImage} src="/logoTiny.png" width={48} height={26} alt="Memory Alley Logo Mobile" />
          </Box>
          <Button title="Se connecter" variant="white" size="lg">
            <Flex visibleFrom="md" direction="column" align="center" columnGap={4}>
              <IconUser size={20} />
              <Text size="md">Se connecter</Text>
            </Flex>
            <Burger hiddenFrom="md" aria-label="Toggle navigation" />
          </Button>
        </Flex>
      </Container>
      <Box hidden component="section" pos="relative">
        <Image component={NextImage} src="/banner.png" width={1920} height={700} alt="Banner" />
        <Button pos="absolute" styles={{root: { width: rem(222), translate: '-50%', left: '50%', bottom: rem(58) }}}>Visitez un cimetière</Button>
      </Box>
      <Container size="xl" mb={100}>
        <Box component="main" pt={100}>
          <Title order={1} size='h1' fw='normal' mb={50}>Présentation</Title>
          <Flex direction={{sm: 'column', lg: 'row'}} justify="space-between" columnGap={3} mb={50}>
            <Stack w={{lg: 680}} gap={30}>
              <Text>
                Memory Alley est une plateforme collaborative dédiée à la préservation de la mémoire collective. Créez des mémoriaux numériques pour les défunts, en les associant aux lieux qu'ils ont marqués. Ensemble retraçons l'histoire intime de chaque ville et village à travers ceux qui y ont vécu.
              </Text>
            <PresentationItem />
            </Stack>
            <Stack>
              <Map />
            </Stack>
          </Flex>

          <Title order={3} fw='normal'>Rechercher un monument</Title>
          <Flex mt={10}>
            <SearchMemorial />
            <Stack align="center" style={{width: '100%'}}>
              <Flex gap={8} justify='center'>
                <IconMapPin size={24} />
                <Text c="gray.8">Cliquez sur un lieu pour explorer le cimetière local</Text>
              </Flex>
              <Text>Où</Text>
              <Anchor href="/create" title="Créer un monument" c="#FF696E" underline="always">Cliquez ici pour créer un monument funéraire</Anchor>
            </Stack>
          </Flex>
        </Box>
      </Container>
      <Box component="footer" bg="#F6F9FD">
        <Container size="lg" py={40}>
          <Flex justify='space-between' align='center' gap={5} mb={50}>
            <Stack>
              <Title order={6}>Memory Alley</Title>
              <Flex gap={36}>
                <Anchor underline="hover" size="xs" c='dark'>Contactez-nous</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>FAQ</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>Qui somme-nous ?</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>Soutenez-nous</Anchor>
              </Flex>
            </Stack>
            <Stack>
              <Title order={6}>Les mémoriels</Title>
              <Flex gap={36}>
                <Anchor underline="hover" size="xs" c='dark'>Créer un mémoriel</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>Visitez un cimetière</Anchor>
                <Anchor underline="hover" size="xs" c='dark'>Créer un cimetière dynastique</Anchor>
              </Flex>
            </Stack>
          </Flex>
          <Flex gap={50} align="center" mb={14}>
            <Text size="xs">©{new Date().getFullYear()} memory-alley.fr</Text>
            <Anchor underline="hover" size="xs" c='dark'>CGU</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>CGV</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>Mentions légales</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>Politique de protection des données personnelles</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>Politique cookies</Anchor>
            <Anchor underline="hover" size="xs" c='dark'>Modifier les choix cookies</Anchor>
          </Flex>
          <Text size="xs">Règle de diffusion de référencement et de déréférencement des produits et des services</Text>
        </Container>
      </Box>
    </Box>
  );
}
