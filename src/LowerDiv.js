import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';


const QuoteDiv = (props) => (
   <div id="lower-div">
      <div id="social">
         <a href={"https://twitter.com/intent/tweet?hashtags=quotes&text="+encodeURIComponent('"' + props.quote + '" ' + props.author)} id="tweet-quote" target="_blank"><button className="button color-transition" style={{background:props.color}}><FontAwesomeIcon icon={faTwitter} size="lg" color="#ffffff"/></button></a>
         <a href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=' + encodeURIComponent(props.author) + '&content=' + encodeURIComponent(props.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'} id="tumblr" target="_blank"><button className="button color-transition" style={{background:props.color}}><FontAwesomeIcon icon={faTumblr} size="lg" color="#ffffff"/></button></a>
      </div>
      <button id="new-quote" className="button color-transition" onClick={props.changeQuote} style={{background:props.color}}>New quote</button>
   </div>
);
  
  export default QuoteDiv;