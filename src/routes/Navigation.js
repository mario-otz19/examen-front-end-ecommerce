import { Suspense, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StoreContext from '../context/store/StoreContext';
import { ADMIN } from '../types';
import { AdminCategories, AdminProducts, AdminUsers, Home } from '../pages';
import AppBar from '../components/AppBar';
import { Login } from '../pages/Login';
import { CreateAccount } from '../pages/CreateAccount';
import AuthContext from '../context/auth/AuthContext';

const Navigation = () => {
    const { user } = useContext(AuthContext);
    const { getProducts } = useContext(StoreContext);
    
    useEffect(() => {
        getProducts();  
        // eslint-disable-next-line
    }, []);

    return (
        <Suspense fallback={ <span>Cargando...</span> }>
            <BrowserRouter>
                <AppBar />

                <div className='d-flex flex-row'>
                    <Routes>
                        
                        {
                            (ADMIN === user.role) 
                                ? (
                                    <>
                                        <Route element={ <AdminCategories /> } key='admin-categories' path='admin-categories'/>
                                        <Route element={ <AdminProducts /> } key='admin-products' path='admin-products'/>
                                        <Route element={ <AdminUsers /> } key='admin-products' path='admin-users'/>
                                        <Route path="/*" element={ <Navigate to={ '/admin-products' } replace /> } />
                                    </>
                                ) : (
                                    <>
                                        <Route element={ <CreateAccount /> } key='create-account' path='create-account'/>
                                        <Route element={ <Login /> } key='login' path='login'/>
                                        <Route element={ <Home /> } key='home' path='home'/>
                                        <Route path="/*" element={ <Navigate to={ '/home' } replace /> } />
                                    </>
                                )
                        }
                    </Routes>                
                </div>
            </BrowserRouter>
        </Suspense>
    );
}

export default Navigation;