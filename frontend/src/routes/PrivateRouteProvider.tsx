import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouteProvider: React.FC = () => {
    const isAuth = Boolean(localStorage.getItem('accessToken'));
    return (isAuth ? <Outlet /> : <Navigate to={'/login'} />)
};

export default PrivateRouteProvider;