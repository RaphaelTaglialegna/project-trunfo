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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div className="formMain">
        <div className="field">
          <label className="label" htmlFor="name">
            Name
            <div className="control">
              <input
                name="cardName"
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
                name="cardDescription"
                className="textarea"
                placeholder="Textarea"
                data-testid="description-input"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </div>
          </label>
        </div>

        <div className="field is-vertical">
          <div className="field-label is-horizontal">
            <div className="label">Atributo 1:</div>
          </div>
          <div className="control">
            <input
              name="cardAttr1"
              className="input is-small"
              data-testid="attr1-input" // Requisit for the project
              type="number"
              placeholder="Text input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              max="90"
            />
          </div>

          <div className="field-label is-normal">
            <div className="label">Atributo 2:</div>
          </div>
          <div className="control">
            <input
              name="cardAttr2"
              className="input is-small"
              data-testid="attr2-input"// Requisit for the project
              type="number"
              placeholder="Text input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              max="90"
            />
          </div>

          <div className="field-label is-normal">
            <div className="label">Atributo 3:</div>
          </div>
          <div className="control">
            <input
              name="cardAttr3"
              className="input is-small"
              data-testid="attr3-input"// Requisit for the project
              type="number"
              placeholder="Text input"
              value={ cardAttr3 }
              max="90"
              onChange={ onInputChange }
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor="name">
            Imagem
            <div className="control">
              <input
                name="cardImage"
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
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="" disabled selected>Select your option</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </div>
        {/* Condição de checagem do super trunfo */}
        {
          hasTrunfo
            ? <div className="trunfCard">Você já tem um Super Trunfo em seu baralho</div>
            : (
              <div className="field trunfCard">
                <div className="control">
                  <label className="checkbox" htmlFor="checkbox">
                    <input
                      name="cardTrunfo"
                      type="checkbox"
                      data-testid="trunfo-input"
                      checked={ cardTrunfo }
                      onChange={ onInputChange }
                      disabled={ hasTrunfo === true }
                    />
                  </label>
                  &nbsp;
                  Super Trybe Trunfo.
                </div>
              </div>
            )
        }
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
      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
