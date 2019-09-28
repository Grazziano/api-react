import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-primary navbar-dark mb-2 sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="Logo" width="25"/> Revenda Herbie
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/listar">Listar</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/incluir">Incluir</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pesquisar">Pesquisar</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
