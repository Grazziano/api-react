import React, { Component } from 'react'

import Conecta from './Conecta'
import ItemLista from './ItemLista'
import './listagem.css'

export default class Listagem extends Component {

  state = {
    carros: []
  }

  async componentDidMount() {
    const lista = await Conecta.get('/carros')
    this.setState({carros: lista.data})
  }

  render() {
    return (
      <div className="container mx-2">
        <table className="table table-sm table-striped table-bordered table-action">
          <thead>
            <tr>
              <th>Foto</th>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.state.carros.map(carro => (
              <ItemLista key={carro.id}
                         foto={carro.foto} 
                         modelo={carro.modelo}
                         marca={carro.marca}
                         ano={carro.ano}
                         preco={carro.preco} />
            ))}
          </tbody>
        </table>        
      </div>
    )
  }
}
