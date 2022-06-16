import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import type { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
