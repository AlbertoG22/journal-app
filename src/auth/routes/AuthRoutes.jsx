import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />

        {/* ruta que no sea ninguna de las anteriores */}
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  );
};
