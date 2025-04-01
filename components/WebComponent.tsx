import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"; // Ensure ReactDOM is imported
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { LocaleSync } from "../locales";

// Lazy load components
const AnotherPage = lazy(() => import("../app/anotherpage/page"));
const App = lazy(() => import("../app/page"));

class WebComponent extends HTMLElement {
  private mountPoint: HTMLElement | null = null;
  private data: unknown = {}; // Store the passed JSON data

  connectedCallback() {
    this.mountPoint = document.createElement("div");
    this.appendChild(this.mountPoint);

    // Get the data passed via the 'data' attribute and parse it
    const jsonData = this.getAttribute("data");
    if (jsonData) {
      try {
        this.data = JSON.parse(jsonData);
      } catch (error) {
        console.error("Failed to parse the data attribute:", error);
      }
    }
    this.renderComponent();
  }

  // Everything here can move into the Root component i.e. App
  renderComponent() {
    ReactDOM.createRoot(this.mountPoint!).render(
      <ChakraProvider resetCSS>
        <LocaleSync />
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Routes>
              <Route path="/" element={<App data={this.data} />} />
              <Route path="/anotherpage" element={<AnotherPage />} />
            </Routes>
          </Router>
        </Suspense>
      </ChakraProvider>
    );
  }
}

// Define the custom element
customElements.define("my-web-component", WebComponent);
