import React from "react";

function Product(props) {
    return <article>
        <span>{props.productstatus}</span>
        <img src={props.image} alt={props.productname}/>
        <p>{props.productname}</p>
        <h4>{props.productprice}</h4>
    </article>
}

export default Product