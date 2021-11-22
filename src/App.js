import "./App.css"
import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Contact from "./components/Contact";
import Sovtech from "./components/Sovtech";
import About from "./components/About";
import {BrowserRouter as Router, Route, Routes,Navigate} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/sovtech" element={<Sovtech/>} />
      <Route path="*" element={<Navigate to ="/home" />}/>


    </Routes>
    
    <Footer />
    </Router>
    </div>
     
    
  );
}

export default App;
