import React from "react";
import "./App.css";
import {useAppDispatch} from "./hooks/redux";
import {usersSlice} from "./store/reducers/UserSlice";
import {useFetchUsers} from "./hooks/useFetchUsers";

function App() {
    const {increment} = usersSlice.actions;
    const dispatch = useAppDispatch();
    const {count, users, isLoading, error} = useFetchUsers();
    return (
        <div className="App">
            {count}
            <button onClick={() => dispatch(increment(5))}>add</button>
            {JSON.stringify(users)}
            {isLoading && <p>...Загрузка</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default App;
