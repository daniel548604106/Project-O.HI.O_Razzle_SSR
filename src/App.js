import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import Header from "./components/Header.tsx";
import Routes from "./routes/index.ts";
import { renderRoutes } from "react-router-config";

const App = () => (
  <div>
    <Header />
    {renderRoutes(Routes)}
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> React-Tailwind </div>
          <p className="text-gray-700 text-base">
            A React Starter with Tailwind CSS
          </p>
        </div>
        <div className="px-6 py-4">
          {["React", "Tailwind"].map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2"
            >
              {"#" + tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default App;
