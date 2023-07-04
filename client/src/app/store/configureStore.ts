import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../../features/contact/counterSlice";
import { configureStore } from "@reduxjs/toolkit";
import { basketSlice } from "../../features/baskets/basketSlice";
import { accountSlice } from "../../features/account/accountSlice";

// export function configureStore(){
//     return createStore(counterReducer)
// }

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        basket: basketSlice.reducer,
        account: accountSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; 