import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes'

const AppRouter = () => {
    return (
        <Routes>
            {
                publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        Component={route.component}
                    />
                )
            }
            <Route path='/*' element={<Navigate to={publicRoutes[0].path} />} />
        </Routes>
    )
}

export default AppRouter