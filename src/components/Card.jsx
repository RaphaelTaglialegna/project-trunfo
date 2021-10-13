import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (

      <div className="card">

        <div className="card-content">
          <h2 className="title" data-testid="name-card">{cardName}</h2>
        </div>

        <div className="card-image">
          <figure className="image is-4by3">
            <img data-testid="image-card" src={ cardImage } alt={ cardName } />
          </figure>
        </div>
        <div className="content">
          <p data-testid="description-card">{cardDescription}</p>
        </div>

        <div className="content">
          <ul>
            <li data-testid="attr1-card">
              Força:
              { cardAttr1}
            </li>
            <li data-testid="attr2-card">
              Ataque:
              { cardAttr2}
            </li>
            <li data-testid="attr3-card">
              Defesa:
              { cardAttr3}
            </li>
          </ul>
        </div>

        <div>
          <p data-testid="rare-card">{cardRare}</p>
          {
            cardTrunfo === true ? <p data-testid="trunfo-card">Super Trunfo</p> : <p />
          }
        </div>

      </div>

    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
