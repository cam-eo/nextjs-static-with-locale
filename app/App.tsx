import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { LocaleSync } from "../locales";
import { ThemeSync, useThemeStore } from "../theme";

// Lazy load components
const AnotherPage = lazy(() => import("../app/anotherpage/page"));
const App = lazy(() => import("../app/page"));

interface RootType {
  data: unknown; // Fix types later
}

export default function Root({ data }: RootType) {
  // Everything here can move into the Root component i.e. App

  const theme = useThemeStore((state) => state.theme);

  return (
    <ChakraProvider theme={theme}>
      <ThemeSync />
      <LocaleSync />
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<App data={data} />} />
            <Route path="/anotherpage" element={<AnotherPage />} />
          </Routes>
        </Router>
      </Suspense>
    </ChakraProvider>
  );
}
