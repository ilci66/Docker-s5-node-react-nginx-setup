import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Home from './components/Home';
import Detail from "./components/Detail";
import NoMatch from "./components/NoMatch";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutProject from "./components/AboutProject";

export default function App() {
    return ( 
        <Routes>
            <Route path="detail" element={<Detail />}></Route>
            <Route path="about" element={<AboutProject />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
        </Routes>
    );
}