import React from "react";

import "./Style.css"

export const Meals = (props)=> {
    return (<div className="c-meals">
        <MealBar/>
        <MealBar/>
        <MealBar/>
    </div>)
}

export const MealBar = (props)=> {
    return (<div className="c-mealbar rounded">
        MealBar
    </div>)
}