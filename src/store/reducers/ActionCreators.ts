import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {usersSlice} from "./UserSlice";


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(usersSlice.actions.usersFetchingSuccess(response.data));
    } catch (e: any) {
        console.log('e>', e.message);
        dispatch(usersSlice.actions.usersFetchingError(e.message));
    }
}
