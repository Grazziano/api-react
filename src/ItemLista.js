import React from 'react'
import { Link } from 'react-router-dom'

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
      <td>
        <button className="btn btn-sm btn-warning mr-1" onClick={(e) => props.alterar(props.id, e)}>
          <i className="far fa-edit"></i> R$
        </button>
        <button className="btn btn-sm btn-danger mr-1" 
                onClick={(e) => window.confirm(`Confirma a exclusão do ${props.modelo}?`)
                && props.excluir(props.id, e)}>
          Excluir
        </button>
        <Link to={`/editar/${props.id}`} className="btn btn-sm btn-info"> Editar </Link>      
      </td>     
    </tr>
  )
}

export default ItemLista