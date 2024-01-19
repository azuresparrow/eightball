import React, {useState} from "react";
import "./EightBall.css"

import ColorCounter from "./ColorCounter"

const EightBall = (props) => {
    const [message, setMessage] = useState("Think of a Question");
    const [color, setColor] = useState("#2c3e50");
    const [count, setCount] = useState(0);

    function onClick(){
        
        let choice =  props.answers[Math.floor(Math.random() * props.answers.length)];
        setCount(count+1);
        setMessage(choice.msg);
        setColor(choice.color);
    }

    return (
        <React.Fragment>
            <div className="EightBall" onClick={onClick} style={{ backgroundColor: color }}>
                {message}
            </div>

            <div className="Counters">
                <ColorCounter color="#27ae60" currentColor={color} total={count} />
                <ColorCounter color="#f39c12" currentColor={color} total={count} />
                <ColorCounter color="#c0392b" currentColor={color} total={count} />
            </div>
        </React.Fragment>
        
    );
}

export default EightBall;