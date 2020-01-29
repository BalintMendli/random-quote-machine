import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Quote = ({ color, quote, author }) => {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setAnimate(true);
  }, [quote, color]);
  return (
    <>
      <div id="text-div">
        <div
          id="text"
          className={animate ? 'color-transition fade-in' : 'color-transition'}
          onAnimationEnd={() => setAnimate(false)}
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
        className={animate ? 'color-transition fade-in' : 'color-transition'}
        style={{ color }}
      >
        - {author}
      </div>
    </>
  );
};

Quote.propTypes = {
  color: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
