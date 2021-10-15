/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Painel extends React.Component {
  render() {
    return (

      <article className="panel is-link">
        <p className="panel-heading">
          Cards Saved
        </p>
        <p className="panel-tabs">
          <a className="is-active">All</a>
          <a>Normal</a>
          <a>Raro</a>
          <a>Super Raro</a>
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-info" type="text" placeholder="Search" />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
        {/* <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          bulma
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          marksheet
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          minireset.css
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true" />
          </span>
          jgthms.github.io
        </a> */}
      </article>
    );
  }
}

export default Painel;
