import React from "react";
import ReactDOM from "react-dom/client"; // Ensure ReactDOM is imported
import App from "../app/page"; // Import your main Next.js component
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AnotherPage from "../app/anotherpage/page"; // Import your main Next.js component
import { ChakraProvider } from "@chakra-ui/react";

class WebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);

    const jsonData = this.getAttribute("data");
    const parsedData = jsonData ? JSON.parse(jsonData) : {};

    ReactDOM.createRoot(mountPoint).render(
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App data={parsedData} />} />
            <Route path="/anotherpage" element={<AnotherPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    );
  }
}

customElements.define("my-web-component", WebComponent);
