import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Painel from './components/Painel';

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
        cardTrunfo: false,
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
        <section className="hero">
          <div className="hero-body">
            <h1 className="titleHero">
              Tryunfo Card Game
            </h1>
          </div>
        </section>

        <div className="columns">
          <div
            className="column "

          >
            <Form { ...this.state } />
          </div>
          <div className="column">
            <Card { ...this.state } />
          </div>
        </div>
        <section className="secMain">
          <Painel />
          <div className="divContainer">
            { myCards.map((myCard) => (
              <div className="flip-card" key={ myCard.cardName }>
                <div className="flip-card-inner">
                  <div className="flip-card-front" />
                  <div className="flip-card-back">
                    <Card
                      key={ myCard.cardName }
                      { ...myCard }
                    />
                  </div>
                </div>
                <div className="control deleet">
                  <button
                    className="button is-link"
                    data-testid="delete-button"
                    type="button"
                    onClick={ () => this.handleRemove(myCard) }
                  >
                    Excluir
                  </button>
                </div>
              </div>))}
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Project Tryunfo Oct. 14, 2021 developed&nbsp;
              <strong>Raphael Taglialegna</strong>
              .
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
