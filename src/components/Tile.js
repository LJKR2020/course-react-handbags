import React from "react";
import brand from "../assets/brand.png";

function Tile(props) {
    return <section>
        <h2>{props.subtitle}</h2>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
        <img src={props.image} alt={props.alttext}/>
    </section>
}

export default Tile;