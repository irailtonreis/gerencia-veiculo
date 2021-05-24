import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import  './styles.css';
import { MdAddCircleOutline, MdDeleteForever} from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import ModalTable from '../ModalTable/ModalTable';
import FormVeiculo from '../CadastroVeiculo/FormVeiculo';

const VeiculoTable =() => {
    const [cols, setCols] = useState(['Veículo', 'Marca', 'Ano', 'descricão', 'vendido', 'Ações']);
    const [veiculos, setVeiculos] = useState([]);
    const [veiculo, setVeiculo] = useState('');
    // const [modal, setModal] = useState(false);
    
    useEffect(() => {
        const listarVeiculos = async (params) =>{
            const response = await api.get('veiculos');
            setVeiculos(response.data)
        }
        listarVeiculos();
        
    }, [])

    

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
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
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
                    <td ><div className="action"><MdAddCircleOutline onClick={activeModal}  size={30}/><BiEdit size={30} onClick={()=>handleEdit(column)} /><MdDeleteForever size={30} /></div></td>
                    </tr>
                ))
                }
                </tbody>
        </table>
        {/* {modal ? <ModalTable /> : null} */}

            <div id="myModal" className="modal">
                <div className="modal-content animeLeft">
                <span className="close">&times;</span>
                <FormVeiculo  veiculo={veiculo} />
                </div>
            </div>
        </div>

       
    )
}

export default VeiculoTable
