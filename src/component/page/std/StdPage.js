import React from "react";
import { Page } from "../Page";

import styles from "./StdPage.module.css"

export const StdPage = (props)=> {
    return (<Page>
        <div className={styles.stdpage}>
            {props.children}
        </div>
    </Page>)
}