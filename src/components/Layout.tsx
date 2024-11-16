'use client';
import React from "react";
import { Grid } from "@mantine/core";

function Layout() {
  return <Grid styles={{root: {backgroundColor: 'red'}}} align="stretch">
      <Grid.Col span={4.5} styles={{col: {backgroundColor: 'blue'}}}>1</Grid.Col>
      <Grid.Col span={3} styles={{col: {backgroundImage: "url('/assets/Chemin_1.png')", backgroundRepeat: 'repeat-y'}}}></Grid.Col>
      <Grid.Col span={4.5}>3</Grid.Col>
    </Grid>
}

export default Layout;
