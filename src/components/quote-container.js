import React from 'react';
import QuoteItem from './quote-item';

const QuoteContainer = (props) => {
    return (
        <div className="quote-container">
            <QuoteItem quoteText={props.quoteText}/>
        </div>
    );
}

export default QuoteContainer;