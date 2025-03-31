import React from "react";
import ReactDOM from "react-dom/client"; // Ensure ReactDOM is imported
import App from "../app/page"; // Import your main Next.js component
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import AnotherPage from "../app/anotherpage/page"; // Import your main Next.js component
import { ChakraProvider } from "@chakra-ui/react";

// Define the structure of the locale object (assuming it has a greeting key, you can expand as needed)

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

  // Render the React app with the current locale data and passed 'data' attribute
  renderComponent() {
    ReactDOM.createRoot(this.mountPoint!).render(
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App data={this.data} />} />
            <Route path="/anotherpage" element={<AnotherPage />} />
          </Routes>
        </Router>
      </ChakraProvider>
    );
  }
}

// Define the custom element
customElements.define("my-web-component", WebComponent);
