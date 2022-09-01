import { configureStore, combineReducers , getDefaultMiddleware} from '@reduxjs/toolkit'
import CounterSlice from './CounterSlice';
import testSlice from "./TestSlice";

const reducer = combineReducers({
    counter: CounterSlice,
    test: testSlice
});


const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware({thunk: false})]
});

export default store;