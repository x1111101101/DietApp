import React from "react";

import ICON_PREV from "~assets/image/icon/prev.png"
import "./StdHeaderStyle.css"


export const StdHeader = (props)=> {
    return (<div className="stdheader">
        <img src={ICON_PREV}></img>
        <div className="stdheader-name">
            <label>{props.name}</label>
        </div>
        
    </div>)
}