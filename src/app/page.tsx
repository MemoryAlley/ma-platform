/* eslint-disable react/no-unescaped-entities */
import { Flex, Stack, Text, Box, Title, Container, Anchor } from "@mantine/core";
import { IconMapPin } from '@tabler/icons-react';

import PresentationItem from "../components/Presentation/PresentationItem";
import Map from "@/components/Map";
import SearchMemorial from "@/components/SearchMemorial";
import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";



export default function Home() {
  return (
    <Box component='div'>
      <Banner />
      <Container size="xl" mb={100}>
        <Box component="main" pt={100}>
          <Title order={1} fw='normal' mb={{base: 20, md: 50}}>Présentation</Title>
          <Flex direction={{base: 'column-reverse', md: 'row'}} justify="space-between" columnGap={3} mb={50}>
            <Stack w={{lg: 680}} gap={30}>
              <Text>
                Memory Alley est une plateforme collaborative dédiée à la préservation de la mémoire collective. Créez des mémoriaux numériques pour les défunts, en les associant aux lieux qu'ils ont marqués. Ensemble retraçons l'histoire intime de chaque ville et village à travers ceux qui y ont vécu.
              </Text>
              <PresentationItem />
              <Box component="section">
                <Title order={4} fw='normal' mt={{base: 20, md: 40}} mb={14}>Rechercher un monument</Title>
                <SearchMemorial />
              </Box>
            </Stack>
            <Stack mb={{base: 50, md: 0}}>
              <Map />
              <Stack align="center" w="100%" mt={40}>
                <Flex gap={8} justify='center' align='center'>
                  <IconMapPin size={24} />
                  <Text c="gray.8">Cliquez sur un lieu pour explorer le cimetière local</Text>
                </Flex>
                <Text>Où</Text>
                <Anchor href="/create" title="Créer un monument" c="memoryAlley" underline="always">Cliquez ici pour créer un monument funéraire</Anchor>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
