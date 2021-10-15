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
          <h2 className="title is-size-4 nameCard" data-testid="name-card">{cardName}</h2>
        </div>

        <div className="card-image">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div className="content description">
          <p data-testid="description-card">{cardDescription}</p>
        </div>

        <div className="content myListcontent">
          <div className="myList">
            <div className="List" data-testid="attr1-card">
              Força:&nbsp;
              {cardAttr1}
            </div>
            <div className="List" data-testid="attr2-card">
              Ataque:&nbsp;
              {cardAttr2}
            </div>
            <div className="List" data-testid="attr3-card">
              Defesa:&nbsp;
              {cardAttr3}
            </div>
          </div>
        </div>

        <div className="rareCard">
          <p data-testid="rare-card">{cardRare}</p>
          {
            cardTrunfo === true
              ? <p className="trunfo" data-testid="trunfo-card">Super Trunfo</p> : <p />
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
