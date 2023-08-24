import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import './App.css'
import Header from './components/Header/Header';
import { UserContext } from './contexts/UserContext';
import UserService from './services/UserService';

function App() {
    const { User } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        UserService.check().then(user => {
            User.setIsAuth(true)
            User.setUser(user)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return (
            <h1>Загрузка приложения...</h1>
        )
    }

    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
