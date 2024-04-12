import React, { useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Context from "./Context.js";
import reducer from "./reducer.js";
import Homepage from "./portfolio-page/Homepage.jsx";

export default function App() {
    const contextObject = {
        user: null,
        role: null,
        currentDate: null,
    };

    const [state, dispatch] = useReducer(reducer, contextObject);

    const setCurrentDate = () => {
        let currentDate = new Date();
        currentDate = currentDate.toLocaleDateString("en-CA");
        dispatch({
            type: "currentDate/set",
            payload: currentDate,
        });
    };

    useEffect(() => {
        setCurrentDate();
    }, []);
    return (
        <Context.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    );
}
