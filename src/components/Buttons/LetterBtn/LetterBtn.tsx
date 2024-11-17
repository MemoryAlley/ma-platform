'use client';
import { Button, ButtonProps } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import classes from "./LetterBtn.module.css";
import { IconSearch } from "@tabler/icons-react";

type Props = {
  label?: string;
  isActive?: boolean;
  Icon?: React.JSXElementConstructor<PropsWithChildren>;
  props?: ButtonProps;
  action: (v?: string) => void;
}

function LetterBtn({ label, isActive = false, props, Icon, action }: Readonly<Props>) {
  const properpties = label ? {} : (Icon ? props : {w: 70, h: 70});

  const handleClick = () => {
    action(label);
  }

  const cls = isActive ? {
    root: classes.root_clicked,
    inner: classes.inner_clicked,
    label: classes.label_clicked,
  } : classes
  const IconComponent = Icon ?? IconSearch;
  return <Button
    onClick={handleClick}
    classNames={cls}
    {...properpties}
    >
    {
      label ? label : <IconComponent size={40} />
    }
  </Button>;
}

export default LetterBtn;
