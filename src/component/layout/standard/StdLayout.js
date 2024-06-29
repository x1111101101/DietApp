import React from "react";
import { Layout } from "../Layout";
import { StdHeader } from "./header/StdHeader";
import { TabBar } from "../tabbar/TabBar";

import "./StdLayoutStyle.css"

export const StdLayout = (props)=> {
    return (<Layout>
        
        <div className="stdl">
            <StdHeader name={props.headerName}/>
            <div className="stdl-content">
                {props.children}
            </div>
            <TabBar/>
        </div>
        
    </Layout>)
}