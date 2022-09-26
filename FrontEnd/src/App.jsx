import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Members from "./components/pages/Members";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Members />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
