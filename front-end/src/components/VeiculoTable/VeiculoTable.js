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
    const [veiculo, setVeiculo] = useState('');
    const [modalCadastro, setModalCadastro] = useState(undefined);
    const [modalEditar, setModalEditar] = useState(undefined);
    
    useEffect(() => {
        const listarVeiculos = async (params) =>{
            const response = await api.get('veiculos');
            setVeiculos(response.data)
        }
        listarVeiculos();
        
    }, [])

        useEffect(() => {
        const modalCadastro = document.getElementById("modalCadastro");
        var modalEditar = document.getElementById('modalEdit');

        window.onclick = function(event) {
        if (event.target == modalCadastro || event.target == modalEditar) {
            modalCadastro.style.display = "none";
            modalEditar.style.display = "none";
        }
        }
    }, [modalCadastro, modalEditar])

    // useEffect(() => {
        
    //     console.log(edit)

    //     window.onclick = function(event) {
    //     if (event.target == edit) {
    //         edit.style.display = "none";
    //     }
    //     }
    // }, [edit])

    const activeModal = (typeModal) => {
        var modal = document.getElementById(typeModal);
        modal.style.display = "block";
    }
    const inativeModal = (typeModal) => {
        var modal = document.getElementById(typeModal);
        modal.style.display = "none";
    }

    const handleEdit = (item) => {
        activeModal("modalEdit");
        setVeiculo(item)
    }
        
      const handleModal = (typeModal) => {
        var modal = document.getElementById(typeModal);
        modal.style.display = "none";
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
                <button onClick={()=>activeModal("modalCadastro")}>Cadastrar</button>
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
            
                <div id="modalCadastro" className="modal">
                    <div className="modal-content animeLeft">
                    <span className="close" onClick={()=>handleModal("modalCadastro")}>&times;</span>
                        <FormCadastro inativeModal={(modal)=>inativeModal(modal)} setVeiculos={setVeiculos} /> 
                    </div>
                </div>
            
            
                <div id="modalEdit" className="modal">
                    <div className="modal-content animeLeft">
                    <span className="close" onClick={()=>handleModal("modalEdit")}>&times;</span>
                        <FormEditar inativeModal={(modal)=>inativeModal(modal)} veiculoAtual={veiculo} setVeiculos={setVeiculos} /> 
                    </div>
                </div>
            
            {/* <div id="myModal" className="modal">
                <div className="modal-content animeLeft">
                <span className="close" onClick={handleModal}>&times;</span>
                    {
                        modalCadastro ? <FormCadastro setVeiculos={setVeiculos} /> :
                        modalEditar ? <FormEditar veiculoAtual={veiculo} setVeiculos={setVeiculos} /> : null
                    }
                   
                </div>
            </div> */}
        </div>

       
    )
}

export default VeiculoTable
