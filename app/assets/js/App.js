import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import NoMatch from "./components/NoMatch";
import AboutProject from "./components/AboutProject";

export default function App() {
    return ( 
        <Routes>
            <Route path="about" element={<AboutProject />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
        </Routes>
    );
}