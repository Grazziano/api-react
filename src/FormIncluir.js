import React, { Component } from 'react'
import Conecta from './Conecta'

export const marcas = ['Chevrolet', 'Fiat', 'Ford', 'Honda', 'Hyundai', 'Renault', 'Volkswagen']

export default class FormIncluir extends Component {

  state = {
    modelo: '',
    foto: '', 
    marca: '',
    ano: 0,
    preco: 0,
    aviso: ''
  }

  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  componentDidMount() {
    this.initialState = this.state
  }

  limpar = () => {
    this.setState(this.initialState)
  }

  handleSubmit = async(e) => {
    // evita o funcionamento padrão do método
    // no caso do evento submit, enviar o form
    e.preventDefault()

    const novo = {
      modelo: this.state.modelo,
      foto: this.state.foto,
      marca: this.state.marca,
      ano: this.state.ano,
      preco: this.state.preco
    }

    try {
      const carro = await Conecta.post('/carros', novo)
      this.limpar()
      this.setState({aviso: `Ok! Carro inserido com o código ${carro.data[0].id}`})
    } catch (erro) {
      this.setState({aviso: `Erro... Carro não inserido: ${erro}`})
    }

    this.tempoAviso()
  }

  tempoAviso = (tempo=3000) => {
    setTimeout( () => {
      this.setState({aviso: ''})
    }, tempo)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="modelo">Modelo:</label>
                <input type="text" className="form-control" id="modelo" name="modelo"
                       onChange={this.handleChange} value={this.state.modelo} />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <label htmlFor="foto">Foto:</label>
                <input type="text" className="form-control" id="foto" name="foto"
                       onChange={this.handleChange} value={this.state.foto} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="marca">Marca:</label>
                <select name="marca" id="marca" className="form-control"
                        onChange={this.handleChange} value={this.state.marca}>
                  <option></option>
                  {marcas.map((marca, key) => (
                    <option key={key}>{marca}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-sm-4 col-4">
              <div className="form-group">
                <label htmlFor="ano">Ano:</label>    
                <input type="text" id="ano" name="ano" className="form-control"
                       onChange={this.handleChange} value={this.state.ano} />
              </div>
            </div>
            <div className="col-sm-4 col-8">
              <div className="form-group">
                <label htmlFor="preco">Preço:</label>    
                <input type="text" id="preco" name="preco" className="form-control"
                       onChange={this.handleChange} value={this.state.preco} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <input type="submit" value="Enviar" className="btn btn-primary btn-block mb-1"/>
            </div>
            <div className="col-sm-6">
              <input type="reset" className="btn btn-danger btn-block" 
                     onClick={this.limpar} value="Limpar" />
            </div>
          </div>
          { this.state.aviso !== '' ? 
           <div className='alert alert-info mt-4'>
             {this.state.aviso}
           </div>
           : ''  
          }          
        </div>
      </form>
    )
  }
}
