import React from "react";
import "./style.css";
import backpic from "../../image/card.jpeg";
import frontpic from "../../image/1.jpeg";

const Card = () => {
    return(<div className="card">
            <div className="card-face card-font-face">
                <img src={backpic} alt="backpic" className="img"/>
            </div>
            <div className="card-face card-back-face">
                <img src={frontpic} alt="frontpic" className="img"/>
            </div>
    </div>
    );

};

export default Card;