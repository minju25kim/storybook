import React from "react";

import styled from "styled-components";
/**
 * Primary UI component for user interaction
 */
export const Banner = (props) => {
  const { name, level, hp, mp, color } = props;
  const { hpColor, mpColor } = color;
  const StyledContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 5px solid black;
  `;
  const StyledContent = styled.div`
    border: 5px solid black;
    color: #11aa88;
  `;
  const StyledGauge = styled(StyledContent)`
    color: #fff;
    background: ${(props) => (props.mp ? `${mpColor}` : `${hpColor}`)};
  `;
  return (
    <StyledContainer>
      <StyledContent>{name}</StyledContent>
      <StyledContent level>Lv. {level}</StyledContent>
      <StyledGauge hp>{hp} / 100</StyledGauge>
      <StyledGauge mp>{mp} / 100</StyledGauge>
    </StyledContainer>
  );
};
