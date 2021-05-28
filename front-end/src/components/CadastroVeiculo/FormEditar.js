import React, { useState, useEffect } from 'react'
import './styles.css';
import api from '../../services/api';

const FormVeiculo = ({inativeModal, veiculoAtual, setVeiculos}) => {
  const [veiculo, setVeiculo] = useState(null);
  const [marca, setMarca] = useState(null);
  const [ano, setAno] = useState(null);
  const [descricao, setDescricao] = useState(null);
  const [vendido, setVendido] = useState(undefined);

      useEffect(() => {
        setVeiculo(veiculoAtual.veiculo)
        setMarca(veiculoAtual.marca)
        setAno(veiculoAtual.ano)
        setDescricao(veiculoAtual.descricao)
        setVendido(veiculoAtual.vendido)
    }, [veiculoAtual])

  //   useEffect(() => {
  //     setVeiculo(veiculoAtual.veiculo)
  //     setMarca(veiculoAtual.marca)
  //     setAno(veiculoAtual.ano)
  //     setDescricao(veiculoAtual.descricao)
  //     setVendido(veiculoAtual.vendido)
  // }, [])


     const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
              veiculo: veiculo,
              marca: marca,
              ano: ano,
              descricao: descricao,
              vendido: vendido
          }

      try {
          const response = await api.put(`veiculos/${veiculoAtual.id}`, data)

          if (response.data) {
              const response = await api.get(`veiculos`)
              setVeiculos(response.data)
              setVeiculo('')
              setMarca('')
              setAno('')
              setDescricao('')
              setVendido(false)
              inativeModal("modalEdit")
          }

      } catch (error) {
          console.log(error)
      }
   
      };
   
    return (
      <form onSubmit={handleSubmit}>
            <label>Nome do veículo</label>
              <input name="veiculo"  onChange={(e) => setVeiculo(e.target.value)} value={veiculo} required /> 
            <label>Marca do veículo</label>
              <input name="marca"  onChange={(e) => setMarca(e.target.value)} value={marca} required /> 
            <label>Ano do veículo</label>
              <input type="number" name="ano"  onChange={(e) => setAno(e.target.value)} value={ano}   required /> 
            <label>Descrição do veículo</label>
              <textarea name="descricao" rows="4" cols="10" onChange={(e) => setDescricao(e.target.value)} value={descricao} required /> 
            <label>Status vendido</label>
              <select name="vendido"  defaultValue={vendido}   onChange={(e) => setVendido(e.target.value)} required>
                <option value={false}>NÃO</option>
                <option value={true}>SIM</option>
            </select> 
            <div className="submit-button">
              <button type="submit">Salvar</button>
            </div>
      </form>
    )
}

export default FormVeiculo
