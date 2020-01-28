import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';

const QuoteDiv = ({ quote, author, color, changeQuote }) => (
  <div id="lower-div">
    <div id="social">
      <a
        href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
          `"${quote}" ${author}`,
        )}`}
        id="tweet-quote"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="button color-transition"
          style={{ background: color }}
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" color="#ffffff" />
        </button>
      </a>
      <a
        href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${encodeURIComponent(
          author,
        )}&content=${encodeURIComponent(
          quote,
        )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
        id="tumblr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          type="button"
          className="button color-transition"
          style={{ background: color }}
        >
          <FontAwesomeIcon icon={faTumblr} size="lg" color="#ffffff" />
        </button>
      </a>
    </div>
    <button
      type="button"
      id="new-quote"
      className="button color-transition"
      onClick={changeQuote}
      style={{ background: color }}
    >
      New quote
    </button>
  </div>
);

export default QuoteDiv;
