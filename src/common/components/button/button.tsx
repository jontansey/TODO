import styled from "styled-components";

export const Button = styled.button`
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  backface-visibility: hidden;

  border: 1px solid ${({ theme }) => theme.colors.primary};
  outline: none !important;
  height: 35px;

  padding: 3px 10px;
  border-radius: 3px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1);
  margin: 5px;

  color: ${({ theme }) => theme.colors.textOnPrimary};
  background: ${({ theme }) => theme.colors.primary};

  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey300};
    border-color: ${({ theme }) => theme.colors.grey300};
    color: ${({ theme }) => theme.colors.black};
    box-shadow: none;
  }
`;
