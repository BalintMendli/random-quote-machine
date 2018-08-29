import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons'
import quotes from './quotes.json';
import Helmet from 'react-helmet';

library.add(faQuoteLeft, faTwitter, faTumblr);

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      quote:'',
      author:'',
      fade:false,
      color:'#dddddd',
      oldcolor:'#ffffff'
    };
    this.changeQuote=this.changeQuote.bind(this);
    this.removeAnimClass=this.removeAnimClass.bind(this);
  }
  changeQuote(){
    let rnd=Math.random();
    let qnum=Math.floor(quotes.quotes.length*rnd);
    const cArr=['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    let cnum=Math.floor(cArr.length*rnd);
    this.setState({      
      quote: quotes.quotes[qnum].quote,
      author: quotes.quotes[qnum].author,
      fade:true,
      color:cArr[cnum]
    });
  }
  componentDidMount(){
    this.changeQuote();
  }
  removeAnimClass(){
    this.setState({
      fade:false,
      oldcolor:this.state.color
    })
  }
  render() {
    return (
      <div className="App">
        <Helmet bodyAttributes={{style:'--colorold: '+this.state.oldcolor+'; --colornew: '+this.state.color+';background-color : '+this.state.color,class:this.state.fade ? 'color-transition' : ''}}/>
        <div id="quote-box">
          <div id="text-div">
            <div id="text" className={this.state.fade ? 'fade-in' : ''} onAnimationEnd={this.removeAnimClass} style={{color:this.state.color}}><FontAwesomeIcon icon="quote-left" color={this.state.color} size="sm" id="quote-icon"/> {this.state.quote}</div>
          </div>
          <div id="author" className={this.state.fade ? 'fade-in' : ''} style={{color:this.state.color}}>- {this.state.author}</div>
          <div id="lower-div">
            <div id="social">
              <a href={"https://twitter.com/intent/tweet?hashtags=quotes&text="+encodeURIComponent('"' + this.state.quote + '" ' + this.state.author)} id="tweet-quote" target="_blank"><button className="button" style={{background:this.state.color}}><FontAwesomeIcon icon={faTwitter} size="lg" color="#ffffff"/></button></a>
              <a href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' + encodeURIComponent(this.state.author) + '&content=' + encodeURIComponent(this.state.quote) + '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'} id="tumblr" target="_blank"><button className="button" style={{background:this.state.color}}><FontAwesomeIcon icon={faTumblr} size="lg" color="#ffffff"/></button></a>
            </div>
            <button id="new-quote" className="button" onClick={this.changeQuote} style={{background:this.state.color}}>New quote</button>
          </div>
        </div>
        <div id="sign">by zenott</div>
      </div>
    );
  }
}

export default App;
