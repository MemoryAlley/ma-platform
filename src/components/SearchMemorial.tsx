'use client';
import React from "react";
import { useDisclosure } from '@mantine/hooks';
import { Button, Flex, Input, Paper, rem, Stack, Transition, useMantineTheme } from "@mantine/core";
import { DateInput } from '@mantine/dates';
import { IconCalendarMonth, IconMapPin, IconMinus, IconPlus, IconUser } from "@tabler/icons-react";

function SearchMemorial() {
  const memoryAlleyColor = useMantineTheme().colors.memoryAlley[5]
  const [opened, handlers] = useDisclosure(true);
  const maxDate = new Date();
  return <Stack>
            <Paper withBorder px={{base: 20, md: 29}} py={{base: 25, md: 30}} styles={{root: {border: '1px solid var(--mantine-color-gray-5)'}}}>
              <Stack w={{lg: 620}}>
                <Flex direction={{base: 'column', md: 'row'}} justify='space-between' align={{base: 'flex-start', md: 'center'}}>
                  <Input leftSection={<IconUser color={memoryAlleyColor} size={16} />} variant="unstyled" placeholder="Nom et prénom du défunt" />
                  <Input leftSection={<IconMapPin color={memoryAlleyColor} size={16} />} variant="unstyled" placeholder="Commune ou département" /> 
                </Flex>
                <Transition
                  mounted={opened}
                  transition="slide-down"
                  duration={400}
                  timingFunction="ease"
                >
                  {
                    (styles) => <Flex direction={{base: 'column', md: 'row'}} style={styles} justify='space-between' align={{base: 'flex-start', md: 'center'}}>
                      <DateInput
                        locale="fr"
                        maxDate={maxDate}
                        leftSection={<IconCalendarMonth color={memoryAlleyColor} size={16} />}
                        variant="unstyled" placeholder="Date de naissance"
                      />
                      <DateInput
                        locale="fr"
                        maxDate={maxDate}
                        leftSection={<IconCalendarMonth color={memoryAlleyColor} size={16} />} 
                        variant="unstyled"
                        placeholder="Date de décès"
                        /> 
                    </Flex>
                  }
                </Transition>
              </Stack>
            </Paper>
            <Flex justify='flex-end' align='center' mt={{base: -5, md: -10}}>
              <Button
                onClick={handlers.toggle}
                leftSection={opened ? <IconMinus size={16} /> : <IconPlus size={16} />}
                variant="subtle"
              >
                {opened ? "Moins de critères" : "Plus de critères"}
              </Button>
            </Flex>
            <Flex justify='center' mt={{base: 0, md: -10}}>
              <Button w={{base: '100%', md: rem(255)}}>Rechercher le mémorial</Button>
            </Flex>
          </Stack>;
}

export default SearchMemorial;
