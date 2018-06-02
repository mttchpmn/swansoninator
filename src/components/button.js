import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Button Clicked');
        this.props.handleClick();
    }

    render() {
        return (
            <div className="button">
                <button onClick={() => this.handleClick()}name="random-button" className="btn btn-primary">{this.props.buttonText}</button>
            </div>
        );
    }
}

export default Button;