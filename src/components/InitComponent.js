/** @format */

import React from "react";
import styled from "styled-components";
import StyledSuccessButton from "./StyledButton";
import { StyledFancyButton, StyledThemeButton,StyledPropsButton } from "./StyledPropsButton";

const SytledDiv = styled.div`
color:red; 
background-color: orange;
`

const InitComponent = () => {
  return (
    <div>
      {/* styled button  */}
      <StyledSuccessButton onClick={() => console.log("btn clicked")}>
        Basic button
      </StyledSuccessButton>

      <SytledDiv >Div</SytledDiv>

      {/* usage of props */}
      {/* <StyledPropsButton varient='red'>I am using Properties</StyledPropsButton> */}
      {/* <StyledPropsButton varient='black'>I am using Properties</StyledPropsButton> */}

      {/* Extending styles   as="div" */}
      {/* <StyledFancyButton varient='red'>I am using Properties</StyledFancyButton> */}

      {/* animation  */}
      <br />
      <br />
      {/* <StyledThemeButton>Theme Button</StyledThemeButton> */}
    </div>
  );
};

export default InitComponent;
