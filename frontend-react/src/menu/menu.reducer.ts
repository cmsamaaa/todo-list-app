import { Reducer } from 'redux';

// Define the State Type
interface MenuState {
    activeItem: number;
}

// Define Action Creators
export const setActiveItem = (itemId: number) => ({
    type: 'menu/setActiveItem',
    payload: itemId,
});

// Define the initial state
const initialState: MenuState = {
    activeItem: 0,
};

// Implement the Reducer
const menuReducer: Reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'menu/setActiveItem':
            return { ...state, activeItem: action.payload };
        default:
            return state;
    }
};

export default menuReducer;