import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      saveDate: [],
    };
  }

  onSaveButtonClick = (noAtt) => {
    noAtt.preventDefault();
    this.setState((antes) => ({
      saveDate: [...antes.saveDate, antes],
      name: '',
      cardImage: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

  // https://pt-br.reactjs.org/docs/handling-events.html

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  formularioValido = () => {
    const {
      name,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const atributototal = 210;
    const atributoMaximo = 90;
    const atributoMinimo = 0;

    const soma = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const buscaInfo = ((name && cardDescription && cardImage && cardRare) !== '');
    const checkAtributo = (
      soma <= atributototal
      && cardAttr1 <= atributoMaximo && cardAttr1 >= atributoMinimo
      && cardAttr2 <= atributoMaximo && cardAttr2 >= atributoMinimo
      && cardAttr3 <= atributoMaximo && cardAttr3 >= atributoMinimo
    );
   (!buscaInfo === false && !checkAtributo === false)
    {
      return false;
    }
    return true;
  };

  render() {
    const {
      cardImage,
      cardTrunfo,
      cardRare,
      name,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      // isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <Form
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.handleChange }
          cardName={ name }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          isSaveButtonDisabled={ this.formularioValido() }

        />
        <Card
          cardTrunfo={ cardTrunfo }
          cardName={ name }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          isSaveButtonDisabled={ this.formularioValido() }
        />
      </div>
    );
  }
}

export default App;
// lecture/11.2
