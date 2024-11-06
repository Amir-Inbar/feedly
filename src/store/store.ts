import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import {feedApi} from "./api/feedApi.ts";

const rootReducer = combineReducers({
    feedApi: feedApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            feedApi.middleware
        )
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
