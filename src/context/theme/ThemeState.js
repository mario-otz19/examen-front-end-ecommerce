import React, { useReducer } from 'react';
import ThemeContext from './ThemeContext';
import ThemeReducer from './ThemeReducer';

import { CHANGE_THEME } from '../../types';

const StoreState = ({ children }) => {
    const initialState = {
        theme: true
    }

    const [state, dispatch] = useReducer(ThemeReducer, initialState);

    const changeTheme = async () => dispatch({ type: CHANGE_THEME });

    return ( 
        <ThemeContext.Provider
            value={{
                theme: state.theme,
                changeTheme
            }}
        >
            { children }
        </ThemeContext.Provider>
    );
}

export default StoreState;