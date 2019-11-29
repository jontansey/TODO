import React from "react";
import styled from "styled-components";

export const Panel: React.FC = ({ children, ...rest }) => {
  return (
    <StyledPanel>
      <ContentWrapper role="region">{children}</ContentWrapper>
    </StyledPanel>
  );
};

const StyledPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 100%;
  width: 100%;
  transition: all 300ms linear;
  margin: 15px 0;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.13);
`;

const ContentWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  flex: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textOnSurface};
  border-radius: 4px;
`;
