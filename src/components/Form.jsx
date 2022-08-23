import React from 'react';
import PropTypes from 'prop-types';
// import './Form.css';

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
        <label htmlFor="req1-1">
          Nome
          <input
            value={ cardName }
            onChange={ onInputChange }
            type="text"
            data-testid="name-input"
            id="req1-1"
          />
        </label>

        <label htmlFor="req1-2">
          Descrição
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            id="req1-2"
          />
        </label>

        <label htmlFor="req1-3">
          Atributo 1
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            type="number"
            id="req1-3"
          />
        </label>

        <label htmlFor="req1-4">
          Atributo 2
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            type="number"
            id="req1-4"
          />
        </label>

        <label htmlFor="req1-5">
          Atributo 3
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            type="number"
            id="req1-5"
          />
        </label>

        <label htmlFor="req1-6">
          Imagem
          <input
            value={ cardImage }
            onChange={ onInputChange }
            type="text"
            data-testid="image-input"
            src=""
            id="req1-6"
          />
        </label>

        <label htmlFor="req1-7">
          Raridade
          <select
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            name=""
            id="req1-7"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="req1-8">
          Super Trunfo
          <input
            id="req1-8"
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
