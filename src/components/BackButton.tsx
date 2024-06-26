import React from "react";
import { StyledBackButton } from "./styles/BackButton.styled";

const BackButton = (props: any) => {
  return <StyledBackButton onClick={props.onClick}>Back</StyledBackButton>;
};

export default BackButton;
