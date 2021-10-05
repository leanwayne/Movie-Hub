import React from 'react';
import Header from './components/header/Header';
import {CssBaseline, Container} from '@material-ui/core';
import './App.css';
import MainNav from './components/MainNav';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trending from './pages/trending/Trending';
import Search from './pages/search/Search';
import Series from './pages/series/Series';
import Movies from './pages/movies/Movies';

function App() {
    return (
        <BrowserRouter>
            <CssBaseline/>
            <Header/>
            <div className='app'>
                <Container>
                    <Switch>
                        <Route path='/' component={Trending} exact />
                        <Route path='/movies' component={Movies} exact />
                        <Route path='/series' component={Series} exact />
                        <Route path='/search' component={Search} exact />
                    </Switch>
                </Container>
            </div>
            <MainNav/>        
        </BrowserRouter>
    );
}
export default App;