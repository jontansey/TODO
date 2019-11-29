import React from "react";
import { useSelector } from "react-redux";
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { TAppState } from "../../../store/store";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../button";
import { Container } from "react-grid-system";

export const Header: React.FC = ({ ...props }) => {
  const firebase = useFirebase();
  const auth = useSelector(({ firebase }: TAppState) => firebase.auth);

  function logout() {
    return firebase.logout();
  }

  const authReady = isLoaded(auth) && !isEmpty(auth);

  return (
    <StyledHeader {...props}>
      <Container>
        <InnerHeader>
          <div>
            <Title>//TODO</Title>
          </div>

          <div>
            <User data-testid="header__username">
              <FontAwesomeIcon icon={faUser} /> {authReady && auth.displayName}
            </User>
            <Button onClick={logout} disabled={!authReady}>
              <FontAwesomeIcon icon={faSignOutAlt} /> logout
            </Button>
          </div>
        </InnerHeader>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 0px 0px;
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const User = styled.div`
  margin: 0 0 8px 0;
`;
