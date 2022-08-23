import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="req1-1">
          Nome
          <input type="text" data-testid="name-input" id="req1-1" />
        </label>

        <label htmlFor="req1-2">
          Descrição
          <textarea data-testid="description-input" id="req1-2" />
        </label>

        <label htmlFor="req1-3">
          Atributo 1
          <input data-testid="attr1-input" type="number" id="req1-3" />
        </label>

        <label htmlFor="req1-4">
          Atributo 2
          <input data-testid="attr2-input" type="number" id="req1-4" />
        </label>

        <label htmlFor="req1-5">
          Atributo 3
          <input data-testid="attr3-input" type="number" id="req1-5" />
        </label>

        <label htmlFor="req1-6">
          Imagem
          <input type="text" data-testid="image-input" src="" id="req1-6" />
        </label>

        <label htmlFor="req1-7">
          Raridade
          <select data-testid="rare-input" name="" id="req1-7">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="req1-8">
          <input type="checkbox" id="req1-8" />
        </label>

        <label htmlFor="req1-9">
          Super Trunfo?
          <input id="req1-9" type="button" data-testid="save-button" />
        </label>
      </form>
    );
  }
}

export default Form;
