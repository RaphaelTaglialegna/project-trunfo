/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <>
        <div className="field">
          <label className="label" htmlFor="name">
            Name
            <div className="control">
              <input
                className="input "
                data-testid="name-input" // Requisit for the project
                type="text"
                placeholder="Text input"
                value={ cardName }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>

        <div className="field">
          <label className="label" htmlFor="textarea">
            Descrição
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Textarea"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <div className="label">Atributo 1:</div>
          </div>
          <div className="control">
            <input
              className="input is-small"
              data-testid="attr1-input" // Requisit for the project
              type="number"
              placeholder="Text input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <div className="label">Atributo 2:</div>
          </div>
          <div className="control">
            <input
              className="input is-small"
              data-testid="attr2-input"// Requisit for the project
              type="number"
              placeholder="Text input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <div className="label">Atributo 3:</div>
          </div>
          <div className="control">
            <input
              className="input is-small"
              data-testid="attr3-input"// Requisit for the project
              type="number"
              placeholder="Text input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="name">
            Imagem
            <div className="control">
              <input
                className="input "
                data-testid="image-input"// Requisit for the project
                type="text"
                placeholder="Text input"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>
        <div className="select is-rounded">
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>
        <div className="field">
          <div className="control">
            <label className="checkbox" htmlFor="checkbox">
              <input
                type="checkbox"
                data-testid="trunfo-input"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              Super Trybe Trunfo
            </label>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-link"
              data-testid="save-button"
              type="button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </div>
      </>
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
  // hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
