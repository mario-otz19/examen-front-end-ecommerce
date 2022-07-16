import { LOGIN, LOGOUT } from '../../types';

const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: { ...action.payload }
            }
        
        // case LOGOUT:
        //     return {
        //         ...state,
        //         checking: false,
        //         currentPage: action.payload.page,
        //         products: [ ...action.payload.data ]
        //     }

        default:
            return state;
    }
}
 
export default AuthReducer;