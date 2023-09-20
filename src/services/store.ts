import { AnyAction, createStore } from "redux";
import { rootReducer } from "./reducers";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = createStore(
    rootReducer)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppThunkAction<D> = ThunkAction<D, RootState, unknown, AnyAction>;
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type DispatchFunc = () => AppThunkDispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector