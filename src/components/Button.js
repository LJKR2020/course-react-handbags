import React from "react";

function Button(props) {
    return <button
        type='button'
        onClick={() => console.log(props.buttonmessage)}
        disabled={props.isdisabled}
    >
        {props.buttontitle}
    </button>
}

export default Button