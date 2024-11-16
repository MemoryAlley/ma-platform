import { Button } from "@mantine/core";
import React from "react";
import classes from "./MemorialBtn.module.css"
import CrossMemorial from "@/components/Graves/Cross";

function MemorialBtn({ label }: Readonly<{label: string}>) {
  return <Button classNames={classes}>
    <CrossMemorial style={{ marginBottom: -9 }} />
    <p>{label}</p>
  </Button>;
}

export default MemorialBtn;
