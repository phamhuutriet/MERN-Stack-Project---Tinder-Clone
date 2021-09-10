import React, {Component} from "react";

function ChildrenComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Click now</button>
        </div>
    )
}

export default ChildrenComponent