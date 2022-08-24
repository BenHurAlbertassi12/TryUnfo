import React from 'react';
import PropTypes from 'prop-types';
import './estilo.css';

class Form extends React.Component {
  render() {
    const {
      cardImage,
      cardTrunfo,
      cardRare,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
    //  hasTrunfo,
    } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
            id="name"
            name="name"
          />
        </label>

        <label htmlFor="cardDescription">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
          />
        </label>

        <label htmlFor="cardAttr1req1-3">
          Atributo 1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
            id="cardAttr1"
            name="cardAttr1"
          />
        </label>

        <label htmlFor="cardAttr2">
          Atributo 2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
            id="cardAttr2"
            name="cardAttr2"
          />
        </label>

        <label htmlFor="cardAttr3">
          Atributo 3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
            id="cardAttr3"
            name="cardAttr3"
          />
        </label>

        <label htmlFor="cardImage">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            src=""
            id="cardImage"
            name="cardImage"
          />
        </label>

        <label htmlFor="cardRare">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name="cardRare"
            id="cardRare"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="cardTrunfo" className="box">
          Super Trunfo
          <input
            className="caixa"
            id="cardTrunfo"
            name="cardTrunfo"
            value={ cardTrunfo }
            checked={ cardTrunfo }
            onChange={ onInputChange }
            type="checkbox"
            data-testid="trunfo-input"
          />
        </label>

        <button
          disabled={ isSaveButtonDisabled }
          //   value={ cardName }
          onClick={ onSaveButtonClick }
          type="button"
          data-testid="save-button"
        >
          Save
        </button>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
//   hasTrunfo: PropTypes.bool.isRequired,
};
export default Form;
