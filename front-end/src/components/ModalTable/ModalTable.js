import React from 'react'
import { useForm } from "react-hook-form";
// import './styles.css';
import api from '../../services/api';

const ModalTable = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const response = await api.post('veiculos', data)
        if (response.data) {
            alert("veiculo cadastrado.")
        }
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome do veículo</label>
        <input {...register("veiculo", { required: true })} />
        {errors?.veiculo?.type === "required" && <p>Nome veículo é requerido</p>}

        <label>Marca do veículo</label>
        <input {...register("marca", { required: true })} />
        {errors?.marca?.type === "required" && <p>Marca é requerida</p>}

        <label>Ano do veículo</label>
        <input type="number" {...register("ano",  { required: true  })} />
        {errors?.ano?.type === "required" && <p>Ano é requerido</p>}

        <label>Descrição do veículo</label>
        <input {...register("descricao", { required: true })} />
        {errors?.descricao?.type === "required" && <p>Descrição é requerido</p>}

        <label>Status vendido</label>
        <select {...register("vendido")} >
          <option value={false}>NÃO</option>
          <option value={true}>SIM</option>
        </select>
        <div className="submit-button">
            <button type="submit">Cadastrar</button>
        </div>
      </form>
    )
}

export default ModalTable
