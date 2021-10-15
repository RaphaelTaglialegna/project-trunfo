import React from 'react';

class Painel extends React.Component {
  render() {
    return (

      <article className="panel is-link">
        <p className="panel-heading">
          Cards Saved
        </p>
        <p className="panel-tabs">
          <a href="null" className="is-active">All</a>
          <a href="null">Normal</a>
          <a href="null">Raro</a>
          <a href="null">Super Raro</a>
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-info" type="text" placeholder="Search" />
            <span className="icon is-left">
              <i className="fas fa-search" aria-hidden="true" />
            </span>
          </p>
        </div>
      </article>
    );
  }
}

export default Painel;
