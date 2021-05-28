import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import  './styles.css';
import { MdDeleteForever} from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import FormCadastro from '../CadastroVeiculo/FomCadastro';
import FormEditar from '../CadastroVeiculo/FormEditar';

const VeiculoTable =() => {
    const [cols, setCols] = useState(['Veículo', 'Marca', 'Ano', 'descricão', 'vendido', 'Ações']);
    const [veiculos, setVeiculos] = useState([]);
    const [veiculo, setVeiculo] = useState([]);
    const [form, setForm] = useState(null);
    
    useEffect(() => {
        const listarVeiculos = async (params) =>{
            const response = await api.get('veiculos');
            setVeiculos(response.data)
        }
        listarVeiculos();
        
    }, [])

    const clearForm = (setVeiculo) => {
        setVeiculo('')
        // setMarca('')
        // setAno('')
        // setDescricao('')
        // setVendido('')
    }

        useEffect(() => {
        // var modal = document.getElementById("myModal");


        // When the user clicks on the button, open the modal
        // btn.onclick = function() {
        // modal.style.display = "block";
        // }

        // When the user clicks on <span> (x), close the modal
        // span.onclick = function() {
        // modal.style.display = "none";
        // updateFormData(initialFormData)
        // }

        // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        // if (event.target == modal) {
        // modal.style.display = "none";
        // }
        // }
    }, [])

    const activeModal = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }
    const inativeModal = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    const handleEdit = (item) => {
        setVeiculo(item)
        setForm(1)
        activeModal()
    }
        
      const handleModal = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        // clearForm();
      }

      

      const handleDelete = async (e, id) => {
        e.preventDefault();
        const confirmation = window.confirm("Deseja realmente deletar?");
        if (confirmation) {
            const response = await api.delete(`veiculos/${id}`)
            if(response.status === 200){
                const deleted = await api.get(`veiculos`)
                setVeiculos(deleted.data)
            }
        }
      }

    return (
        <div className="container">
            <div className="header-button">
                <h2>Gestão de veículos</h2>
                <button onClick={activeModal}>Cadastrar</button>
            </div> 
        <table>
                <thead>
                <tr>
                {
                cols.map((colName)=>(
                    <th key={colName} scope="col">{colName}</th>
                    ))
                }
                </tr>
                </thead>
                <tbody>
                { 
                veiculos && veiculos.map((column) => (
                    <tr key={column.id}>
                        <td>{column.veiculo}</td>
                        <td>{column.marca}</td>
                        <td>{column.ano}</td>
                        <td>{column.descricao}</td>
                        <td>{column.vendido ? 'SIM' : 'NÃO'}</td>
                        <td >
                            <div className="action">
                                <BiEdit size={30} onClick={()=>handleEdit(column)} />
                                <MdDeleteForever size={30} onClick={(e)=>handleDelete(e, column.id)} />
                            </div>
                        </td>
                    </tr>
                ))
                }
                </tbody>
        </table>
            <div id="myModal" className="modal">
                <div className="modal-content animeLeft">
                <span className="close" onClick={handleModal}>&times;</span>
                    {
                        form === 0 && <FormEditar veiculoAtual={veiculo} setVeiculos={setVeiculos} />
                    }
                    {
                        form === 1 && <FormEditar veiculoAtual={veiculo} setVeiculos={setVeiculos} />
                    }
                </div>
            </div>
        </div>

       
    )
}

export default VeiculoTable
