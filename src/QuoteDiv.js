import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const QuoteDiv = ({ fade, removeAnimClass, color, quote, author }) => (
  <>
    <div id="text-div">
      <div
        id="text"
        className={fade ? 'color-transition fade-in' : 'color-transition'}
        onAnimationEnd={removeAnimClass}
        style={{ color }}
      >
        <FontAwesomeIcon
          icon={faQuoteLeft}
          color={color}
          size="sm"
          id="quote-icon"
          className="color-transition"
        />
        {quote}
      </div>
    </div>
    <div
      id="author"
      className={fade ? 'color-transition fade-in' : 'color-transition'}
      style={{ color }}
    >
      - {author}
    </div>
  </>
);

export default QuoteDiv;
