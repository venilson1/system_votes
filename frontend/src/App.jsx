import React from "react";
import Details from "./pages/surveys/Details";
import Home from "./pages/surveys/Home";
import HomeAnswers from "./pages/answer/HomeAnswers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsAnswers from "./pages/answer/DetailsAnswers";
import Votes from "./pages/voting/Votes";

function App() {
  return (
    <>
      <Router>
        <header>
          <div className="bg-teal-100 mx-auto p-4 flex justify-between">
            <h1 className="font-semibold text-xl">Sistema de votação</h1>
            <div className="font-semibold text-xl">
              <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">

              </div>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Votes />} />
          <Route path="/enquetes" element={<Home />} />
          <Route path="/enquetes/:id/editar" element={<Details />} />
          <Route path="/enquetes/:id_su/respostas" element={<HomeAnswers />} />
          <Route path="/enquetes/:id_su/respostas/editar/:id" element={<DetailsAnswers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
