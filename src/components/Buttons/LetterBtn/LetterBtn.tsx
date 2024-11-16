'use client';
import { Button } from "@mantine/core";
import React from "react";
import classes from "./LetterBtn.module.css";
import { IconSearch } from "@tabler/icons-react";

type Props = {
  label?: string;
  isActive?: boolean;
  action: (v?: string) => void;
}

function LetterBtn({ label, isActive = false, action }: Readonly<Props>) {
  const props = label ? {} : {w: 70, h: 70};

  const handleClick = () => {
    action(label);
  }

  const cls = isActive ? {
    root: classes.root_clicked,
    inner: classes.inner_clicked,
    label: classes.label_clicked,
  } : classes

  return <Button
    onClick={handleClick}
    classNames={cls}
    {...props}
    >
    {
      label ? label : <IconSearch size={40} />
    }
  </Button>;
}

export default LetterBtn;
