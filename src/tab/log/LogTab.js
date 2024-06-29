import React from "react";
import { StdLayout } from "~component/layout/standard/StdLayout";
import { MealBar, Meals } from "~component/logging/meal/Meal";
import { Summary } from "./summary/Summary";

import "./LogTabStyle.css"
import ICON_CALENDER from "~assets/image/icon/calender.png"
import ICON_PREV from "~assets/image/icon/prev.png"

export const LogTab = (props)=> {
    return (<StdLayout headerName="기록">
        <div className="tlog">
            <div>
                <DateHeader/>
                <Summary/>
                <Meals/>
            </div>
            <PushButton/>
        </div>
    </StdLayout>)
}

const PushButton = (props)=> {
    return (<button>식단 추가</button>)
}

const DateHeader = (props)=> {
    return (<div className="tlog-dateheader">
        <DateSelector/>
    </div>)
}

const DateSelector = (props)=> {
    return (<div className="tlog-dateheader-selector">
        <DateMover isPrev={true}/>
        <img src={ICON_CALENDER}></img>
        <DateMover isPrev={false}/>
    </div>)
} 

const DateMover = (props)=> {
    let icon = (props.isPrev) ? <img src={ICON_PREV}></img> : <img src={ICON_PREV} style={{"transform": "scaleX(-1)"}}></img>
    return (<div className="tlog-datemover">
        {icon}
    </div>)
}