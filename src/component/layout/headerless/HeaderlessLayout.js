import React from "react";
import { TabBar } from "../tabbar/TabBar";
import { Layout } from "../Layout";

import "./Style.css"

const HeaderlessLayoutContent = (props) => {
    return (<div className="hll-content">
            {props.children}
        </div>
    )
}

export const HeaderlessLayout = (props) => {
    return (<Layout>
        <div className="hll">
            <HeaderlessLayoutContent>{props.children}</HeaderlessLayoutContent>
            <TabBar></TabBar>
        </div>
    </Layout>)
}