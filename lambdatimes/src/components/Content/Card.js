import React from 'react';
import Proptypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cards.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cards.img} />
        </div>
        <span>By {props.cards.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: Proptypes.shape({
    headline: Proptypes.string,
    img: Proptypes.string,
    author: Proptypes.string,
  })
}
export default Card;
