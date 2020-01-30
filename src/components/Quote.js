import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animate: true };
  }

  componentDidMount() {
    this.setState({ animate: true });
  }

  componentDidUpdate(prevProps) {
    const { color, quote } = this.props;
    if (prevProps.color !== color || prevProps.quote !== quote) {
      this.setState({ animate: true });
    }
  }

  render() {
    const { color, quote, author } = this.props;
    const { animate } = this.state;
    return (
      <>
        <div id="text-div">
          <div
            id="text"
            className={
              animate ? 'color-transition fade-in' : 'color-transition'
            }
            onAnimationEnd={() => this.setState({ animate: false })}
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
  }
}

Quote.propTypes = {
  color: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
