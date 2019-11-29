import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
  waitForDomChange
} from "@testing-library/react";

import { random } from "faker";

import "jest-styled-components";

import { Header } from "./";

import { makeTheme } from "../../../util/dummyData";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { ScreenClassProvider } from "react-grid-system";
import { Provider } from "react-redux";

import configureStore from "../../../store/store";

afterEach(cleanup);

const testId = random.alphaNumeric(10);

const mockFirebaseAuth = {
  auth: {
    isEmpty: false,
    isLoaded: true,
    displayName: "Jon Tansey"
  }
};

const renderComponent = (
  reduxInitialState = {},
  theme: DefaultTheme = makeTheme()
) => {
  const store = configureStore(reduxInitialState);

  return render(
    <ScreenClassProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header data-testid={testId} />
        </ThemeProvider>
      </Provider>
    </ScreenClassProvider>
  );
};

describe(`<Header/>`, () => {
  it("renders without error", async () => {
    //arrange
    const { getByTestId } = renderComponent();
    const rendered = await waitForElement(() => getByTestId(testId));

    //assert
    expect(rendered).toBeDefined();
  });

  it("Shows the user's display name when loggedin", async () => {
    //arrange
    const { getByTestId, queryByText } = renderComponent({
      firebase: { auth: mockFirebaseAuth }
    });

    await waitForElement(() => getByTestId(testId));

    //assert
    expect(queryByText(mockFirebaseAuth.auth.displayName)).toBeDefined();
  });
});
