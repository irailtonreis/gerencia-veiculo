import React, { useEffect, useState } from 'react'
import { ResponsiveTable } from './Table';
import api from '../../services/api';

const VeiculoTable =() => {
    const [veiculos, setVeiculos] = useState([]);
    

    useEffect(() => {
        const listarVeiculos = async (params) =>{
            const response = await api.get('veiculos');
            setVeiculos(response.data)
        }
        listarVeiculos();
        
    }, [])

    return (
        <>
        {veiculos.map((veiculo) => (
            <ResponsiveTable key={veiculo.id}  column={veiculo} />
        ))}
        </>

       
    )
}

export default VeiculoTable
