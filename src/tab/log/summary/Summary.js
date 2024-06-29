import React from "react";

import "./SummaryStyle.css"

export const Summary = (props)=> {
    return (<div className="tlog-summary">
        <Progress/>
        <SummaryBoxes/>
    </div>)
}

const Progress = (props)=> {
    return (<div className="tlog-progress">
        Progress
    </div>)
}

const SummaryBoxes = (props)=> {
    return (<div className="tlog-summary-boxes">
        <div className="tlog-summary-boxrow">
            <Box/>
            <Box/>
        </div>
        <div className="tlog-summary-boxrow">
            <Box/>
            <Box/>
        </div>  
    </div>)
}

const Box = (props)=> {
    return (<div className="tlog-summary-box rounded">
        BOX
    </div>)
}