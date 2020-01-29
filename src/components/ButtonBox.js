import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTumblr } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

class ButtonBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { init: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ init: false }), 0);
  }

  render() {
    const { quote, author, color, changeQuote } = this.props;
    const { init } = this.state;
    const backgroundColor = init ? '#fff' : color;
    return (
      <div id="button-box">
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
              style={{ backgroundColor }}
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
              style={{ backgroundColor }}
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
          style={{ backgroundColor }}
        >
          New quote
        </button>
      </div>
    );
  }
}

ButtonBox.propTypes = {
  color: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  changeQuote: PropTypes.func.isRequired,
};

export default ButtonBox;
