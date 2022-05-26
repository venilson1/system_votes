import React from "react";
import Details from "./pages/surveys/Details";
import Home from "./pages/surveys/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <header>
          <div className="bg-gray-100 mx-auto p-4 flex justify-between">
            <h1 className="font-semibold text-xl">Sistema de votação</h1>
            <div className="font-semibold text-xl">
              <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">

              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="editar/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
