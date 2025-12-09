import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Для GitHub Pages: React автоматически использует PUBLIC_URL из homepage в package.json
// При билде для GitHub Pages basename будет "/my-cultural-map"
// Для локальной разработки basename будет пустым
const basename = process.env.PUBLIC_URL || "";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
  