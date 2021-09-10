import React, {Component} from "react";

class ClassClick extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "Click the button"
        }
    }

    clickHandler = () => {
        this.setState({
            message: "Thanks for clicking"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick