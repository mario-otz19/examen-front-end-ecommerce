import { ADD_PRODUCT_SHOPPING_CART, CHANGE_PAGE, GET_PRODUCTS } from '../../types';

const StoreReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                checking: false,
                products: [ ...action.payload.data ],
                totalPages: Math.ceil(action.payload.totalRecords/8)
            }
        
        case CHANGE_PAGE:
            return {
                ...state,
                checking: false,
                currentPage: action.payload.page,
                products: [ ...action.payload.data ]
            }

        case ADD_PRODUCT_SHOPPING_CART:
            const productExists = state.shopingCart.filter((product) => (product._id === action.payload._id));

            return {
                ...state,
                checking: false,
                shopingCart: (!state.shopingCart.length) 
                                ? [ action.payload ] 
                                : (!productExists.length) 
                                    ? [ ...state.shopingCart, action.payload ]
                                    : state.shopingCart.map((product) => (action.payload._id === product._id) ? ({ ...product, numberProducts: (product.numberProducts + action.payload.numberProducts) }) : product),
                products: state.products.map((product) => (action.payload._id === product._id) ? ({ ...product, quantity: (product.quantity - action.payload.numberProducts) }) : product)
            }

        default:
            return state;
    }
}
 
export default StoreReducer;