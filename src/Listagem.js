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
    lista.data.sort(function(a, b) {return a.modelo < b.modelo ? -1 : 1})
    this.setState({carros: lista.data})
  }

  alterar = async(id) => {
    let novoPreco = prompt('Alterar o preço para R$: ')

    let alterado = await Conecta.put(`/carros/${id}`, {preco: novoPreco})

    let retorno = alterado.data[0]

    this.setState({
      carros : this.state.carros.map(carro => (carro.id === id ? retorno : carro))
    })
  }

  excluir = async(id) => {

    try {
      await Conecta.delete(`/carros/${id}`)
      this.setState({
        carros: this.state.carros.filter(carro => carro.id !== id)
      })
    } catch (erro) {
      alert(`Erro... Carro não foi excluído: ${erro}`)
    }
  }
  
  render() {
    return (
      <div className="container mt-2">
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
                         id={carro.id}
                         foto={carro.foto} 
                         modelo={carro.modelo}
                         marca={carro.marca}
                         ano={carro.ano}
                         preco={carro.preco}
                         alterar={this.alterar}
                         excluir={this.excluir} />
            ))}
          </tbody>
        </table>        
      </div>
    )
  }
}
