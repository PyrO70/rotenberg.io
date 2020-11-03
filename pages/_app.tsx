import React, { FunctionComponent, useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/core";

import { triggerPageView } from "../lib/GoogleAnalytics";
import { theme } from "../lib/theme";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", triggerPageView);
    return () => {
      router.events.off("routeChangeComplete", triggerPageView);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
