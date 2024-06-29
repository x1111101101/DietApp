import React from "react";
import { HeaderlessLayout } from "~component/layout/headerless/HeaderlessLayout";

import "./Style.css"
import { MealBar, Meals } from "~component/logging/meal/Meal";
import ICON_TODAY from "~assets/image/icon/today.png"
import ICON_IDEA from "~assets/image/icon/idea.png"
import ICON_WARNING from "~assets/image/icon/warn.png"
import { MyCircularProgressBar } from "../../component/CircularProgressBar/MyCircularProgressBar";

export const MainTab = (props)=> {
    return (
        <HeaderlessLayout>
            <Today/>
            <Recommendations/>
        </HeaderlessLayout>
    )
}

const Label = (props)=> {
    return (
        <div className="t-main-label">
            <div className="t-main-label-icon"><img src={props.icon}></img></div>
            <div className="t-main-label-value">{props.value}</div>
        </div>
    )
}

const Today = (props) => {
    return (
        <div className="t-main-today">
            <Label icon={ICON_TODAY} value="Today"/>
            <TodayProgress/>
            <TodayMeals/>
            <Feedbacks/>
        </div>
    )
}

const Feedbacks = (props)=> {
    return (<div className="t-main-feedbacks">
        <Feedback/>
    </div>);
}

const Feedback = (props)=> {
    return (<div className="t-main-feedback">
        <img src={ICON_WARNING}></img>
        <label>점심식사에서 곡류군, 채소군 섭취가 부족했어요</label>
    </div>)
}

const Recommendations = (props)=> {
    return (
        <div className="t-main-recommends">
            <Label icon={ICON_IDEA} value="추천 식단"/>
            <RecommendationBox/>
            <RecommendationBox/>
            <RecommendationBox/>
        </div>
    )
}

const RecommendationBox = (props) => {
    return (
        <div className="t-main-recommend rounded">Recommendation</div>
    )
}



const TodayProgress = (props) => {
    return (<div className="t-main-today-progress">
        <MyCircularProgressBar percent={33} svgStyle={{height: "30vh"}}></MyCircularProgressBar>
    </div>)
}

const TodayMeals = (props)=> {
    return (
        <>
        <Meals></Meals>
        </>
    )
}