import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export {App}

const App = (props)=> {
    return (
        <div className="app">
            <BrowserRouter>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/main/*" element={<MainPage />}></Route>
                <Route path="*" element={<MainPage />}></Route> {/* Not Found */}
            </BrowserRouter>
        </div>
    )
}