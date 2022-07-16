import React, { useReducer } from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import axiosClient from '../../config/axios';

import { LOGIN, LOGOUT } from '../../types';

const AuthState = ({ children }) => {
    const initialState = {
        user: {
            email: "",
            google: false,
            name: "",
            role: "",
            state: true,
            uid: ""
        },
        token: ""
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
    const login = async ({ email, password }) => {
        try {            
            const user = await axiosClient.post(`/auth/login`, { email, password });
            const { data } = user;
        
            localStorage.setItem('tokenStore', data.token);

            dispatch({
                type: LOGIN,
                payload: data.user
            });
        } 
        
        catch (error) {
            console.log(error);
        }
    }
    
    const logout = async () => {
        try {            
            // dispatch({
            //     type: LOGOUT,
            //     payload: { data }
            // });
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    return ( 
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                login,
                logout
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}

export default AuthState;
