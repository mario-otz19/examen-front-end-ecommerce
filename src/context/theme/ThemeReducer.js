import { CHANGE_THEME } from '../../types';

const StoreReducer = (state, action) => {
    switch (action.type) {

        case CHANGE_THEME:
            return {
                ...state,
                theme: !state.theme
            }

        default:
            return state;
    }
}
 
export default StoreReducer;