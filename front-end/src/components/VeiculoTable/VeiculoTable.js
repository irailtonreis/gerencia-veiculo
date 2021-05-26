import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import  './styles.css';
import { MdAddCircleOutline, MdDeleteForever} from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
// import ModalTable from '../ModalTable/ModalTable';
import FormVeiculo from '../CadastroVeiculo/FormVeiculo';

const initialFormData = Object.freeze({
    veiculo: "",
    marca: "",
    ano: null,
    descricao: "",
    vendido: false

  });

const VeiculoTable =() => {
    const [cols, setCols] = useState(['Veículo', 'Marca', 'Ano', 'descricão', 'vendido', 'Ações']);
    const [veiculos, setVeiculos] = useState([]);
    
    const [veiculo, setVeiculo] = useState();
    const [marca, setMarca] = useState();
    const [ano, setAno] = useState();
    const [descricao, setDescricao] = useState();
    const [vendido, setVendido] = useState();

    const [formData, updateFormData] = React.useState(initialFormData);
    // const [modal, setModal] = useState(false);
    
    useEffect(() => {
        const listarVeiculos = async (params) =>{
            const response = await api.get('veiculos');
            setVeiculos(response.data)
        }
        listarVeiculos();
        
    }, [])

    const clearForm = () => {
        setVeiculo('')
        setMarca('')
        setAno('')
        setDescricao('')
        setVendido('')
      }

        useEffect(() => {
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        // var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

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
        window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        // updateFormData(initialFormData)
        }
        }
    }, [])

    const activeModal = () => {
        var modal = document.getElementById("myModal");

        modal.style.display = "block";
        // setModal(!modal)
    }

    const handleEdit = (item) => {
        console.log("teste", item);
        var modal = document.getElementById("myModal");
        setVeiculo(item)
        modal.style.display = "block";
        // setModal(!modal)
    }
        


    const handleSubmit = async (e) => {
        e.preventDefault();
       const data = {
            veiculo: veiculo,
            marca: marca,
            ano: ano,
            descricao: descricao,
            vendido: vendido
        }
        const response = await api.post(`veiculos`, data)

        if (response.data) {
            const response = await api.get(`veiculos`)
            setVeiculos(response.data)
            handleModal();
        }
      };
      const handleModal = () => {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        clearForm();
      }

      

      const handleDelete = async (id) => {
        const confirmation = window.confirm("Deseja realmente deletar?");
        if (confirmation) {
            const response = await api.put(`veiculos/${id}`)
            if(response.status === 200){
                const deleted = await api.get(`veiculos`)
                setVeiculos(deleted.data)
            }
        }

        
      }

    return (
        <div className="container">  
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
                veiculos && veiculos.map((column) => (
                    <tr key={column.id}>
                    <td>{column.veiculo}</td>
                    <td>{column.marca}</td>
                    <td>{column.ano}</td>
                    <td>{column.descricao}</td>
                    <td>{column.vendido ? 'SIM' : 'NÃO'}</td>
                    <td ><div className="action"><MdAddCircleOutline onClick={activeModal}  size={30}/><BiEdit size={30} onClick={()=>handleEdit(column)} /><MdDeleteForever size={30} onClick={()=>handleDelete(column.id)} /></div></td>
                    </tr>
                ))
                }
                </tbody>
        </table>
        {/* {modal ? <ModalTable /> : null} */}
            <form onSubmit={handleSubmit}>
            <div id="myModal" className="modal">
                <div className="modal-content animeLeft">
                <span className="close" onClick={handleModal}>&times;</span>
                {/* <FormVeiculo  veiculo={veiculo} /> */}
                    <label>Nome do veículo</label>
                    <input name="veiculo"  onChange={(e) => setVeiculo(e.target.value)} value={veiculo} required /> 
                    <label>Marca do veículo</label>
                    <input name="marca"  onChange={(e) => setMarca(e.target.value)} value={marca} required /> 
                    <label>Ano do veículo</label>
                    <input type="number" name="ano"  onChange={(e) => setAno(e.target.value)} value={ano}   required /> 
                    <label>Descrição do veículo</label>
                    <input type="textarea" name="descricao" rows="4" cols="10" onChange={(e) => setDescricao(e.target.value)} value={descricao} required /> 
                    <label>Status vendido</label>
                    <select name="vendido" onChange={(e) => setVendido(e.target.value)} required>
                    <option value="" selected disabled hidden>
                    Selecione a opção
                    </option>
                    <option value={false}>NÃO</option>
                    <option value={true}>SIM</option>
                    </select> 
                    <div className="submit-button">
                    <button type="submit">Cadastrar</button>
                    </div>
                </div>
                </div>
            </form>
        </div>

       
    )
}

export default VeiculoTable
