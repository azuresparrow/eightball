import React, {useState} from "react";
import "./EightBall.css"

const ColorCounter = (props) => {
    const colorListener = props.color;
    const colorMatch = props.currentColor;
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0)

    console.log(total);
    if(total !== props.total){
        setTotal(props.total);
        console.log("test");
        if(colorMatch == colorListener) setCount(count+1); 
    }

    return (
        <div className="EightBall small" style={{backgroundColor: colorListener}}>{count}</div>
    )

}


export default ColorCounter;