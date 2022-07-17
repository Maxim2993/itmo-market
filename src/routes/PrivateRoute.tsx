import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../app/redux/hooks'

export const PrivateRoute = ({ children }: any) => {
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    return isAuth ? children : <Navigate to={'/'} replace />
}
