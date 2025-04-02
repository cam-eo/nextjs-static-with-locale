import React from "react";
import ReactDOM from "react-dom/client"; // Ensure ReactDOM is imported
import Root from "../app/App";

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
    ReactDOM.createRoot(this.mountPoint!).render(<Root data={this.data} />);
  }
}

// Define the custom element
customElements.define("my-web-component", WebComponent);
