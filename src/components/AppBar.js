import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Switch from './Switch';
import ThemeContext from '../context/theme/ThemeContext';
import { ADMIN } from '../types';
import { NavLink } from 'react-router-dom';
import AuthContext from '../context/auth/AuthContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ShopingCart } from './ShopingCart';

export default function ButtonAppBar() {
    const { changeTheme } = useContext(ThemeContext);
    const { user } = useContext(AuthContext);

    const [showShopingCart, setShowShopingCart] = useState(false);

    const buttonStyle = { 
        color: 'white',
        fontSize: 20, 
        fontWeight: 'bold',
        margin: 25,
        outline: 'none', 
        textDecoration: 'none'
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>                    
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        <NavLink style={{ ...buttonStyle, fontSize: 25 }} to={ (ADMIN === user.role) ? '/admin-products' : '/home' } >Tienda en línea</NavLink>
                    </Typography>
                    
                    {
                        (ADMIN === user.role) 
                            ? (
                                <>
                                    <NavLink style={ buttonStyle } to={ '/admin-categories' } >Categorías</NavLink>
                                    <NavLink style={ buttonStyle } to={ '/admin-users' } >Usuarios</NavLink>
                                    <NavLink style={ buttonStyle } to={ '/admin-products' } >Productos</NavLink>
                                </>
                            ) : (
                                <>
                                    {/* <NavLink style={ buttonStyle } to={ '/create-account' } >Crea una cuenta</NavLink> */}
                                    {/* <NavLink style={ buttonStyle } to={ '/login' } >Inicia sesión</NavLink>             */}
                                    {/* <NavLink style={ buttonStyle } to={ '/shopping-cart' } >Ver carrito</NavLink> */}
                                </>
                            )
                    }
                    
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2, marginLeft: 2, color: '#FFF' }}
                        onClick={ () => setShowShopingCart(true) }
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                    
                    <Switch 
                        // defaultChecked 
                        onChange={ () => changeTheme() } 
                    />

                    {
                        (showShopingCart) && (
                            <ShopingCart 
                                showShopingCart={ showShopingCart }
                                setShowShopingCart={ setShowShopingCart }
                            />
                        )
                    }

                    {
                        // (user.role) && (
                        //     <IconButton
                        //         size="large"
                        //         edge="start"
                        //         aria-label="menu"
                        //         sx={{ mr: 2, marginLeft: 2, color: '#FFF' }}
                        //         onClick={ () => console.log('Cerrando sesión') }
                        //     >
                        //         <LogoutIcon />
                        //     </IconButton>
                        // )
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}