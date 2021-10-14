import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myCards: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: this.onInputChange,
      onSaveButtonClick: this.onSaveButtonClick,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.validation());
  }

  // Function de Checagem - Parte da logica foi tirada do projeto do aluno Alvaro Gulart - https://github.com/tryber/sd-015-a-project-tryunfo/pull/41
  validation = () => {
    const { cardName, cardDescription, cardImage } = this.state;

    if (cardName !== '' && cardDescription !== '' && cardImage !== ''
    && this.validationAtributes() !== false) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  validationAtributes = () => {
    let { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxValue = 90;
    const totalAtributs = 210;
    // tranform the string in number
    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);

    const maxAtributes = (cardAttr1 + cardAttr2 + cardAttr3);

    if (maxAtributes <= totalAtributs
      && cardAttr1 >= 0 && cardAttr1 <= maxValue
      && cardAttr2 >= 0 && cardAttr2 <= maxValue
      && cardAttr3 >= 0 && cardAttr3 <= maxValue) {
      return true;
    }
    return false;
  }

  onSaveButtonClick = () => {
    const { myCards, cardTrunfo } = this.state;
    const cards = [this.state];

    if (cardTrunfo === true) {
      this.setState({
        myCards: [...myCards, ...cards],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        hasTrunfo: true,
      });
    } else {
      this.setState({
        myCards: [...myCards, ...cards],
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: '',
        hasTrunfo: false,
      });
    }
  }

  handleRemove = (element) => {
    const { myCards } = this.state;
    if (element.cardTrunfo) {
      this.setState({ myCards: myCards.filter((newSet) => newSet !== element),
        hasTrunfo: false });
    } else { this.setState({ myCards: myCards.filter((newSet) => newSet !== element) }); }
  }

  render() {
    const { myCards } = this.state;

    return (
      <>
        <section
          className="hero"
          style={ {
            backgroundColor: '#7ae7c7',
          } }
        >
          <div className="hero-body">
            <p className="title">
              Tryunfo
            </p>
          </div>
        </section>

        <div className="columns">
          <div
            className="column is-one-third "
            style={ {
              backgroundColor: '#FFF689',
            } }
          >
            <Form { ...this.state } />
          </div>
          <div
            className="column"
            style={ {
              backgroundColor: '#58355e',
            } }
          >
            <Card { ...this.state } />
          </div>
        </div>
        <div>
          { myCards.map((myCard) => (
            <div key={ myCard.cardName }>
              <Card
                key={ myCard.cardName }
                { ...myCard }
              />
              <div className="field is-grouped">
                <div className="control">
                  <button
                    className="button is-link"
                    data-testid="delete-button"
                    type="button"
                    onClick={ () => this.handleRemove(myCard) }
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>))}
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front" />
            <div className="flip-card-back" />
          </div>
        </div>

      </>
    );
  }
}

export default App;
