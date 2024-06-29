import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainTab } from "./tab/main/MainTab";
import { LogTab } from "./tab/log/LogTab";

export {App}

const App = (props)=> {
    return (
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainTab />}></Route>
                    <Route path="/main/*" element={<MainTab />}></Route>
                    <Route path="/diary/*" element={<LogTab />}></Route>
                    <Route path="*" element={<MainTab />}></Route> {/* Not Found */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}