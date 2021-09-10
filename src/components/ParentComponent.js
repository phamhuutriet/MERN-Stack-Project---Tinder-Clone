import React, {Component} from "react";
import ChildrenComponent from "./ChildrenComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert("Hello from " + this.state.name + " to " + childName)
    }

    render() {
        return (
            <div>
                <ChildrenComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent