import * as React from 'react'

const Button = (props) => (
    <button 
    	onClick={props.handleClick} 
      	id={props.id}
      	style={props.style}
    >
        {props.value}
    </button>
 );

export default Button
    