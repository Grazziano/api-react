import React, { Component } from 'react'

export const marcas = ['Chevrolet', 'Fiat', 'Honda', 'Hyundai', 'Renault', 'Volkswagen'];

export default class FormIncluir extends Component {
  render() {
    return (
      <form>
        <div className="container">
          <div className="col-sm-6">
            <label htmlForm="modelo">Modelo</label>
            <input type="text" className="form-control" id="modelo" name="modelo"></input>
          </div>
          <div className="col-sm-6">
            <label htmlForm="foto">foto</label>
            <input type="text" className="form-control" id="foto" name="foto"></input>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label htmlForm="marca">marca</label>
              <select id="marca" name="marca">
                <option></option>
                {
                  marcas.map((marca, key) => (
                    <option key="{key}>{marca}"></option>
                  ))
                }
              </select>

            </div>

          <div className="col-sm-4 col-4">
          <div className="form-control"></div>
            <label htmlForm="foto">foto</label>
            <input type="text" className="form-control" id="foto" name="foto"></input>
          </div>

          </div>


        </div>
      </form>
    )
  }
}
