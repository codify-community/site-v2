import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Global from "./global";
import Main from "./pages/Main";

ReactDOM.render(
    <>
        <Global />
        <Router>
            <Routes>
                <Route path="/" exact={true} element={<Main />} />
            </Routes>
        </Router>
    </>,
    document.querySelector("#root")
);
