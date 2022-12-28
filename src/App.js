import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, WhatGTP, Features, Possibilty, Blog, Footer } from './container'
import { Navbar, Brand, Cta } from './components'
import './app.css'

function App() {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <div className='wrapper'>
                    <Navbar />
                    <Header />
                </div>
            </div>
            <div className='wrapper'>
                <Brand />
                <WhatGTP />
                <Features />
                <Possibilty />
                <Cta />
                <Blog />
            </div>
            <Footer />
        </div>
    )
}

export default App