import React from "react";
import "./App.css";
import Header from "./components/Header.tsx";
import Routes from "./routes/index.ts";
import { renderRoutes } from "react-router-config";

const App = () => (
  <div>
    <Header />
    {renderRoutes(Routes)}
  </div>
);

export default App;
