import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Conecta from './Conecta'

export const marcas = ['Chevrolet', 'Fiat', 'Ford', 'Honda', 'Renault', 'Volkswagen']

export default class Editar extends Component {

  state = {
    id: 0,
    modelo: '',
    foto: '',
    marca: '',
    ano: 0,
    preco: 0,
    aviso: '',
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const carro = await Conecta.get(`/carros/${params.id}`)
    this.setState(carro.data)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (e) => {
    // evita o funcionamento padrão do método 
    // (ou seja, no evento submit, enviar o form)
    e.preventDefault();

    const alterado = {
      modelo: this.state.modelo,
      foto: this.state.foto,
      marca: this.state.marca,
      ano: Number(this.state.ano),
      preco: parseFloat(this.state.preco)
    }

    try {
      //const carros = await Conecta.put(`/carros/${this.props.id}`, alterado)
      const carros = await Conecta.put(`/carros/${this.state.id}`, alterado)
      this.setState({ aviso: `Ok! Carro ${carros.data[0].id} alterado corretamente` })
    } catch (erro) {
      this.setState({ aviso: `Erro... Não alterado: ${erro}` })
    } finally {
      this.tempoAviso()
    }

  }

  tempoAviso = (tempo = 3000) => {
    setTimeout(() => {
      this.setState({ aviso: '' })
    }, tempo)
  }

  render() {
    return (

      <form className="mt-4" onSubmit={this.handleSubmit} onReset={this.limpar}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="modelo">Modelo:</label>
                <input type="text" className="form-control" id="modelo" name="modelo"
                  onChange={this.handleChange}
                  value={this.state.modelo}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="foto">URL Foto:</label>
                <input type="text" className="form-control" id="foto" name="foto"
                  onChange={this.handleChange}
                  value={this.state.foto} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="marca">Marca:</label>
                <select name="marca" id="marca" className="form-control"
                  value={this.state.marca}
                  onChange={this.handleChange}>
                  {marcas.map((marca, key) => (
                    <option key={key}>{marca}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm-4 col-4">
              <div className="form-group">
                <label htmlFor="ano">Ano:</label>
                <input type="text" className="form-control" id="ano" name="ano"
                  onChange={this.handleChange}
                  value={this.state.ano} />
              </div>
            </div>
            <div className="col-sm-4 col-8">
              <div className="form-group">
                <label htmlFor="preco">Preço R$:</label>
                <input type="text" className="form-control" id="preco" name="preco"
                  onChange={this.handleChange}
                  value={this.state.preco} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <input type="submit" value="Alterar"
                className="btn btn-primary btn-block btn-lg mb-1" />
            </div>
            <div className="col-sm-6">
              <Link to="/listar"
                className="btn btn-danger btn-block btn-lg">Voltar</Link>
            </div>
          </div>
          {this.state.aviso !== '' ?
            <div className="alert alert-success">
              {this.state.aviso}
            </div>
            : ''
          }
        </div>
      </form>
    )
  }
}
