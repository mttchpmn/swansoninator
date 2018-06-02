import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import _ from 'lodash';

import QuoteHeader from './components/quote-header';
import Button from './components/button';
import QuoteContainer from './components/quote-container';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quote: '' 
    }

    this.fetchQuote();
  }

  fetchQuote() {
    axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => this.setState({quote: res.data[0]}));
  }

  render() {
    const fetchQuote = _.debounce(() => { this.fetchQuote() }, 300)
    
    return (
      <div className="app-root container jumbotron text-center">
        <QuoteHeader headerText="Ron Swanson Quotes" />

        <QuoteContainer quoteText={this.state.quote}/>
        
        <Button handleClick={fetchQuote} buttonText="Show me another!" />
        </div>
    );
  }
}

export default App;
