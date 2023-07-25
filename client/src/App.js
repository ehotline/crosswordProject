import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import '../src/styles/App.css'
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
