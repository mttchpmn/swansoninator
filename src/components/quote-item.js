import React, { Component } from 'react';

class QuoteItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: 'Blah blah Ron Swanson'
        }
    }

    render() {
        return (
            <div className="quote-item">
                <p>"{this.props.quoteText}"</p>
            </div>
        );
    }
}

export default QuoteItem;