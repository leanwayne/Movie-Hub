import React from "react";
import Header from "./components/header/Header";
import {CssBaseline} from '@material-ui/core'
import './App.css'
import MainNav from "./components/MainNav";

function App() {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <div className="app">asdads</div>
            <MainNav/>
          
        </>
    );
}

export default App;
