import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="req1-1">
          <input type="text" data-testid="name-input" id="req1-1" />
        </label>

        <label htmlFor="req1-2">
          <textarea data-testid="description-input" id="req1-2" />
        </label>

        <label htmlFor="req1-3">
          <input data-testid="attr1-input" type="number" id="req1-3" />
        </label>

        <label htmlFor="req1-4">
          <input data-testid="attr2-input" type="number" id="req1-4" />
        </label>

        <label htmlFor="req1-5">
          <input data-testid="attr3-input" type="number" id="req1-5" />
        </label>

        <label htmlFor="req1-6">
          <input type="text" data-testid="image-input" src="" id="req1-6" />
        </label>

        <label htmlFor="req1-7">
          <select data-testid="rare-input" name="" id="req1-7">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>

        <label htmlFor="req1-8">
          <input type="checkbox" id="req1-8" />
        </label>

        <input type="button" data-testid="save-button" />

      </form>
    );
  }
}

export default Form;
