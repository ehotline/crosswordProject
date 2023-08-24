import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContext } from './contexts/AuthContext';
import UserStore from './store/UserStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthContext.Provider value={{
            Context: new UserStore()
        }}>
            <App />
        </AuthContext.Provider>
    </React.StrictMode>
);