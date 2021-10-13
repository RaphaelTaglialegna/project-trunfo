import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
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
            <Form />
          </div>
          <div
            className="column"
            style={ {
              backgroundColor: '#58355e',
            } }
          >
            <Card />
          </div>
        </div>

      </>
    );
  }
}

export default App;
