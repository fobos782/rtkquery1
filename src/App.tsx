import React from "react";
import "./App.css";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {usersSlice} from "./store/reducers/UserSlice";

function App() {
    const {count} = useAppSelector(state => state.userReducer);
    const {increment} = usersSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className="App">
            {count}
            <button onClick={() => dispatch(increment(5))}>add</button>
        </div>
    );
}

export default App;
