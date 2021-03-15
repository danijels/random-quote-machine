import * as React from 'react'

const QuoteBox = (props) => (
    <div 
    	id={props.id}
    >
        <p 
	        id="quote" 
	        style={props.style}
        >
        	"{props.quote}"
        </p>
        <p 
        	id="author" 
        	style={props.style}
        >
        	- {props.author}
        </p>
    </div>
)

export default QuoteBox