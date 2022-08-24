import React from 'react';
import PropTypes, { bool } from 'prop-types';

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
      <section>
        <div>
          <span data-testid="name-card">
            <strong>Nome</strong>
            {cardName}
          </span>

          <span data-testid="description-card">
            <strong>Descrição</strong>
            {cardDescription}
          </span>

          <span data-testid="attr1-card">
            <strong>Atributo </strong>
            {cardAttr1}
          </span>

          <span data-testid="attr2-card">
            <strong>Atributo </strong>
            {cardAttr2}
          </span>

          <span data-testid="attr3-card">
            <strong>Atributo </strong>
            {cardAttr3}
          </span>

          <span data-testid="rare-card">
            <strong>Raridade </strong>
            {cardRare}
          </span>

          {cardTrunfo ? (
            <span data-testid="trunfo-card">
              <strong>Super Trunfo </strong>
            </span>
          ) : bool}
          {/* https://www.w3schools.com/react/react_conditional_rendering.asp */}

          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
        </div>
      </section>
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

  //   hasTrunfo: PropTypes.bool.isRequired,
};
export default Card;
