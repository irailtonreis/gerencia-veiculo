import React, { useState } from 'react'
import  './styles.css';

export const ResponsiveTable = ({column}) => {
    const [cols, setCols] = useState(['Veículo', 'Marca', 'Ano', 'descricao', 'vendido', 'Ações']);
    
    return(
        <table>
        <caption>Gestão de veículos</caption>
        <thead>
            <tr>
            {
                cols.map((colName)=>(
                    <th scope="col">{colName}</th>
                    ))
                }
            </tr>
            
        </thead>
  <tbody>
      
      { 
        column &&
        <tr key={column.id}>
            <td  data-label={column.id}>{column.veiculo}</td>
            <td data-label={column.id}>{column.marca}</td>
            <td data-label={column.id}>{column.ano}</td>
            <td data-label={column.id}>{column.descricao}</td>
            <td data-label={column.id}>{column.vendido ? 'SIM' : 'NÃO'}</td>
            <td data-label="Period"><div><button>Editar</button><button>Delete</button></div></td>
        </tr>
    }
    
  </tbody>
</table>
    )

}

