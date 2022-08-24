import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
  };

  handleChange = (event) => {
    const { target } = event;
    const { type, name, value } = target;
    const valor = type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: valor });
  };

  attributes = (attr1, attr2, attr3) => {
    const firstA = parseInt(attr1, 10);
    const secondA = parseInt(attr2, 10);
    const thirdA = parseInt(attr3, 10);
    const maxAttr = 90;
    const trueOrFalseA1 = (firstA <= maxAttr && firstA >= 0);
    const trueOrFalseA2 = (secondA <= maxAttr && secondA >= 0);
    const trueOrFalseA3 = (thirdA <= maxAttr && thirdA >= 0);
    const maxSum = 210;
    const totalAttTrue = (firstA + secondA + thirdA <= maxSum);
    return (trueOrFalseA1 && trueOrFalseA2 && trueOrFalseA3 && totalAttTrue);
  };

  formIsFilled = (rare, description, name, image) => (
    rare !== '' && description !== '' && name !== '' && image !== '');

  saveButton = (param1, param2) => param1 && param2;

  render() {
    const { cardAttr1, cardAttr2, cardAttr3, cardDescription, cardImage,
      cardName, cardRare, cardTrunfo } = this.state;

    const formTrue = this.formIsFilled(cardRare, cardDescription, cardName, cardImage);
    const attributeTrue = this.attributes(cardAttr1, cardAttr2, cardAttr3);

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ !this.saveButton(formTrue, attributeTrue) }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
