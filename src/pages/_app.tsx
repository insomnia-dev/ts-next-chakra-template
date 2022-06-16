import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";
import theme from "styles/theme";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const setupAxe = async () => {
  const React = (await import("react")).default;
  const ReactDOM = (await import("react-dom")).default;
  // eslint-disable-next-line import/no-extraneous-dependencies
  const axe = (await import("@axe-core/react")).default;
  axe(React, ReactDOM, 1000);
};

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  setupAxe();
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
