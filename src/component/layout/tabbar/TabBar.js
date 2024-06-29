import React from "react";
import { Link } from "react-router-dom";

import "./TabBarStyle.css"
import ICON_HOME from "~assets/image/icon/home.png"
import ICON_DIARY from "~assets/image/icon/logging.png"
import ICON_CREATE from "~assets/image/icon/create.svg"


export const TabBar = (props) => {
    return (
        <div className="tabbar">
            <Tab link="/main" icon={ICON_HOME} />
            <Tab link="/diary" icon={ICON_DIARY} />
            <Tab link="" icon={ICON_CREATE} />
            <Tab link="" icon={ICON_CREATE}/>
            <Tab link="" icon={ICON_CREATE}/>
        </div>
    )
}

const Tab = (props)=> {
    return (<div className="tabbar-tab">
        <TabIcon link={props.link} src={props.icon}></TabIcon>
    </div>)
}

const TabIcon = (props)=> {
    return (
        <Link to={props.link}>
            <img component={Link} src={props.src}></img>
        </Link>
    )
}