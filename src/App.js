import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/navbar";
import Home from "./pages/Home";
import Createnew from "./pages/Createnew";
import Createproject from "./pages/Createproject";
import Projects from "./pages/Projects"
import Update from "./pages/Update";

function App(){
    return(
      <>
      <Navbar />
      <Router>
          <Routes>
              <Route path="/home" exact element={<Home />} />
              <Route path="/create" exact element={<Createnew />} />
              <Route path="/createproject" exact element={<Createproject />} />
              <Route path="/projects" exact element={<Projects />} />
              <Route path="/:id" element={<Update />} />
          </Routes>
  </Router>
  </>
    );
}

export default App;