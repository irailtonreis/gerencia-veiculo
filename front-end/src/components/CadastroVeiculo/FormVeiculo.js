import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import './styles.css';
import api from '../../services/api';

const initialFormData = Object.freeze({
    veiculo: null,
    marca: null,
    ano: null,
    descricao: null,
    vendido: null

  });

const FormVeiculo = ({ veiculo }) => {
    const [state, setState] = useState([])
    const [formData, updateFormData] = React.useState(Object.freeze({
        veiculo: veiculo.veiculo,
        marca: veiculo.marca,
        ano: null,
        descricao: null,
        vendido: null
    
      }));

    // const clearState = () => {
    //     setState({ ...initialFormData });
    //   };

    useEffect(() => {
        // setState(veiculo)
        updateFormData(veiculo)
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // const response = await api.put(`veiculos/${veiculo.id}`, data)
        // if (response.data) {
        //     alert("veiculo cadastrado.")
        // }
      };
      


      const handleChange = (e) => {
        updateFormData({
          ...formData,
            [e.target.name]: e.target.value.trim()
        });
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Nome do veículo</label>
            <input name="veiculo"  onChange={handleChange} value={formData.veiculo} required /> 
            <label>Marca do veículo</label>
            <input name="marca"  onChange={handleChange} value={formData.marca} required /> 
            <label>Ano do veículo</label>
            <input type="number" name="ano"  onChange={handleChange} value={formData.ano}   required /> 
            <label>Descrição do veículo</label>
            <input type="textarea" name="descricao" rows="4" cols="10" value={formData.descricao}  onChange={handleChange}  required /> 
            <label>Status vendido</label>
            <select name="vendido" onChange={handleChange} required>
            <option value="none" selected disabled hidden>
                Selecione a opção
            </option>
            <option value={false}>NÃO</option>
            <option value={true}>SIM</option>
            </select> 
            <div className="submit-button">
                <button type="submit">Cadastrar</button>
            </div>
      </form>
    )
}

export default FormVeiculo
