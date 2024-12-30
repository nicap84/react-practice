import PropTypes from "prop-types";

function RandomQuote({ quote, color, onChangeQuote }) {
  return (
    <div className="container mt-2">
      <div className={`card text-white ${color}`}>
        <div className="card-body">
          <h1 className="card-header">Random Quotes</h1>
          <h2 className="card-text">{quote.author}</h2>
          <footer className="blockquote-footer">{quote.quote}</footer>
          <button className="btn btn-primary" onClick={onChangeQuote}>
            Get a random Quote
          </button>
        </div>
      </div>
    </div>
  );
}

RandomQuote.propTypes = {
  quote: PropTypes.shape({
    author: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
  onChangeQuote: PropTypes.func.isRequired,
};

export default RandomQuote;
