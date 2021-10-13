import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
    this.setState({
      [name]: value,
    });
  }

  render() {
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

      </>
    );
  }
}

export default App;
