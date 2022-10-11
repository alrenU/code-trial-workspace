
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.js";
import PrintQrCode from "./components/SideModules/PrintQrCode.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <br />
        <PrintQrCode qrLink={"https://www.youtube.com/watch?v=njeaCPYuDIg"} />
    </React.StrictMode>
);