import React from "react";

import "./Style.css"

export const Layout = (props) => {
    return (<div className="layout">
        {props.children}
    </div>)
}