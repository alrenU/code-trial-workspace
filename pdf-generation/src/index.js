import React from "react";
import ReactDOM from "react-dom/client";
import PdfGeneration from "./PdfGeneration/PdfGeneration";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PdfGeneration />
  </React.StrictMode>
);