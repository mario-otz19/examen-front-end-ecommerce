import React, { useReducer } from 'react';

import StoreContext from './StoreContext';
import StoreReducer from './StoreReducer';

import axiosClient from '../../config/axios';

import { ADD_PRODUCT_SHOPPING_CART, CHANGE_PAGE, GET_PRODUCTS } from '../../types';

const StoreState = ({ children }) => {
    const initialState = {
        checking: true,
        currentPage: 1,
        products: [],
        totalPages: 1,
        shopingCart: []
    }

    const [state, dispatch] = useReducer(StoreReducer, initialState);

    const addProductsShoppingCart = (product) => {
        dispatch({
            type: ADD_PRODUCT_SHOPPING_CART,
            payload: product
        });
    }
    
    const changePage = async (page) => {
        try {            
            const products = await axiosClient.get(`/products?from=${ (page * 8) - 8 }&limit=${ 8 }`);
            const { data: { data } } = products;
        
            dispatch({
                type: CHANGE_PAGE,
                payload: { data, page }
            });
        } 
        
        catch (error) {
            console.log(error);
        }
    }

    const getProducts = async () => {
        try {
            setTimeout(async () => {
                const products = await axiosClient.get('/products?from=0&limit=8');
                const { data: { data, totalRecords } } = products;

                dispatch({
                    type: GET_PRODUCTS,
                    payload: { data, totalRecords }
                });
            }, 3000);
        }
        
        catch (error) {
            console.log(error);
        }
    }

    return ( 
        <StoreContext.Provider
            value={{
                checking: state.checking,
                currentPage: state.currentPage,
                products: state.products,
                totalPages: state.totalPages,
                shopingCart: state.shopingCart,
                addProductsShoppingCart,
                changePage,
                getProducts,
            }}
        >
            { children }
        </StoreContext.Provider>
    );
}

export default StoreState;
