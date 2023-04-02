/** @format */

import styled from "styled-components";

export const StyledPropsButton = styled.button`
  border: none;
  background-color: ${(props) => props.varient};
  color: white;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    background-color: #044704;
  }
`;

// Extending button
export const StyledFancyButton = styled(StyledPropsButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  font-size: 25px;
  &:hover {
    color: red;
  }
`;

// Extending button
export const StyledThemeButton = styled(StyledPropsButton)`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
`;
