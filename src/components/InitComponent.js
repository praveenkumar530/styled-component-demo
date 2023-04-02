import React from 'react'
import StyledSuccessButton from './StyledButton'
import {StyledFancyButton, StyledThemeButton} from './StyledPropsButton'

const InitComponent = () => {
  return (
    <div>
     {/* styled button  */}
     <StyledSuccessButton onClick={() => console.log("btn clicked")}>
     Basic button
     </StyledSuccessButton>

     {/* usage of props */}
     {/* <StyledPropsButton varient='red'>I am using Properties</StyledPropsButton> */}

     {/* Extending styles   as="div" */}
     <StyledFancyButton  varient='red'>I am using Properties</StyledFancyButton>

{/* animation  */}
     <br />
     <br />
     <StyledThemeButton>Theme Button</StyledThemeButton>
     </div>
  )
}

export default InitComponent