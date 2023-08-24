import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserContext } from './contexts/UserContext';
import UserStore from './store/UserStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UserContext.Provider value={{
            User: new UserStore()
        }}>
            <App />
        </UserContext.Provider>
    </React.StrictMode>
);