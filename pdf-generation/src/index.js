import React from "react";
import ReactDOM from "react-dom/client";
import PdfGeneration, {SecondFunction} from "./PdfGeneration/PdfGeneration";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PdfGeneration />
    <SecondFunction />
  </React.StrictMode>
);