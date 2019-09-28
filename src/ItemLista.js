import React from 'react'

const ItemLista = props => {
  return (
    <tr>
      <td>
        <img src={props.foto} alt="Foto Carro" 
             className="rounded mx-auto d-block"/>
      </td>
      <td>{props.modelo}</td>
      <td>{props.marca}</td>
      <td>{props.ano}</td>
      <td>{Number(props.preco)
           .toLocaleString("pt-br", {style: 'currency', currency: 'BRL'})}</td>
      <td> </td>     
    </tr>
  )
}

export default ItemLista