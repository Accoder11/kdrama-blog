import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Footer from './components/Footer';
import './css/App.css';
import Banner from './components/Banner';
import KDrama from "./pages/KDrama";
import UpcomingKDrama from "./pages/UpcomingKDrama";
import Blogs from "./pages/Blog";
import AboutUs from "./pages/AboutUs";

const App = () => {
    return(
        <div>
            <Banner></Banner>
            <Header></Header>
            <Routes>
                <Route path='/' element={ <Main/> } />
               <Route path='/kdrama-series' element={ <KDrama/> } />
                <Route path='/upcoming' element={ <UpcomingKDrama/> } />
                <Route path='/blogs' element={ <Blogs/> } />
                <Route path='/about-us' element={ <AboutUs/> } />

            </Routes>
            <Footer></Footer>
        </div>
    )
}

export default App;