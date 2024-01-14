import { configureStore } from '@reduxjs/toolkit';

// Import all reducers here
import menuReducer from './menu/menu.reducer';

const ReduxStore = configureStore({
    reducer: {
        menu: menuReducer
    },
});

export type RootState = ReturnType<typeof ReduxStore.getState>;

export default ReduxStore;