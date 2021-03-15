import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Button from './components/button'
import QuoteBox from './components/quoteBox'

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            color: '',
            href: ''
        }
    this.newQuote = this.newQuote.bind(this);
    }
    componentDidMount() {
        this.newQuote();
    }
    newQuote() {    
        const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const random = randomIndex(data.quotes.length);
            this.setState({
                quote: data.quotes[random].quote,
                author: data.quotes[random].author,
                color: colors[randomIndex(colors.length)]
            });  
        });
        const encodedQuote = encodeURIComponent(`${this.state.quote} ${this.state.author}`);
        const href = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodedQuote}`;
        this.setState({
            href: href
        });
    }
  
    render() {
        const backgroundColorStyle = {
            backgroundColor: this.state.color
        };
        return (
            <div id="wrapper" style={backgroundColorStyle}>
                <div id="quote-box">
                    <QuoteBox quote={this.state.quote} 
                        author={this.state.author} 
                        id="text" 
                        style={{color: this.state.color}}
                    />
                    <div id="buttons">
                        <a href={this.state.href} 
                            target="_top" 
                            id="tweet-quote" 
                            style={backgroundColorStyle}
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>            
                        <Button id="new-quote" 
                            handleClick={this.newQuote} 
                            value="New quote" 
                            style={backgroundColorStyle}
                        />
                    </div> 
                </div> 
            </div> 
        )
    }  
}

export default App;

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function randomIndex(length) {
    return Math.floor(Math.random() * (length));
}
