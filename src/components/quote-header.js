import React from 'react';

const QuoteHeader = ({headerText}) => {
    return (
        <div className="quote-header">
            <h1 className="header">{headerText}</h1>
        </div>
    );
}
export default QuoteHeader;