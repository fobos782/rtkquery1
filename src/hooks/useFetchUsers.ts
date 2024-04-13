import {useAppDispatch, useAppSelector} from "./redux";
import {useEffect} from "react";
import {fetchUsers} from "../store/reducers/ActionCreators";

export const useFetchUsers = () => {
    const {count, users, isLoading, error} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);
    return {
        count, users, isLoading, error
    }
}
