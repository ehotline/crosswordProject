import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import './App.css'
import Header from './components/Header/Header';
import { AuthContext } from './contexts/AuthContext';
import UserService from './services/UserService';
import { observer } from 'mobx-react-lite'

const App = observer(() => {
    const { Context } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        UserService.check().then(user => {
            console.log(user)
            Context.setIsAuth(true)
            Context.setUser(user)
        }).catch(e => {
            
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
})

export default App;
