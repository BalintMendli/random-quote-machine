import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const QuoteDiv = (props) => (
   <React.Fragment>
      <div id="text-div">
         <div id="text" className={props.fade ? 'color-transition fade-in' : 'color-transition'}  onAnimationEnd={props.removeAnimClass} style={{color:props.color}}><FontAwesomeIcon icon="quote-left" color={props.color} size="sm" id="quote-icon" className="color-transition"/> {props.quote}</div>
         </div>
         <div id="author" className={props.fade ? 'color-transition fade-in' : 'color-transition'} style={{color:props.color}}>- {props.author}</div>
   </React.Fragment>
);
  
  export default QuoteDiv;