import React from "react";

/**
 * @param props {
 * - Object svgStyle:
 * - Number percent:
 * } 
 */
export const MyCircularProgressBar = (props)=> {
    let radius = 40
    let circumferPaddingRatio = 0.2
    let transformAttribute = "rotate("+(90+(circumferPaddingRatio*180))+")"
    return (
        <svg stype={props.svgStyle} height="100%" transform={transformAttribute}>
            <PaddingedCircle 
                percent={100} 
                radius={radius}
                paddingRatio={circumferPaddingRatio}
                circleProps={{stroke: "gray"}} />
            <PaddingedCircle 
                percent={props.percent} 
                radius={radius} 
                paddingRatio={circumferPaddingRatio}
                circleProps={{stroke: "blue"}} />
        </svg>
    )
}

const PaddingedCircle = (props)=> {
    let radius = props.radius
    let circumferPaddingRatio = props.paddingRatio
    let circumfer = radius*2*Math.PI
    let innerCircumfer = circumfer * props.percent/100.0
    let innerCircumferWithPadding = innerCircumfer * (1 - circumferPaddingRatio)
    return (
            <circle 
                fill="none"
                cx="50%"
                cy="50%"
                r={radius+"%"}
                stroke="red"
                stroke-width="5%"
                strokeDasharray={innerCircumferWithPadding + "% 100% 0% 100%"}
                {...props.circleProps}
            >
            </circle>
    )
}