// import React from 'react'
// import { useForm } from "react-hook-form";
// // import './styles.css';
// import api from '../../services/api';

// const ModalTable = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     useEffect(() => {
//       var modal = document.getElementById("myModal");

//       // Get the button that opens the modal
//       // var btn = document.getElementById("myBtn");

//       // Get the <span> element that closes the modal
//       var span = document.getElementsByClassName("close")[0];

//       // When the user clicks on the button, open the modal
//       // btn.onclick = function() {
//       // modal.style.display = "block";
//       // }

//       // When the user clicks on <span> (x), close the modal
//       span.onclick = function() {
//       modal.style.display = "none";
//       updateFormData(initialFormData)
//       }

//       // When the user clicks anywhere outside of the modal, close it
//       window.onclick = function(event) {
//       if (event.target == modal) {
//       modal.style.display = "none";
//       updateFormData(initialFormData)
//       }
//       }
//   }, [])
//     const onSubmit = async (data) => {
//         const response = await api.post('veiculos', data)
//         if (response.data) {
//             alert("veiculo cadastrado.")
//         }
//       };

//     return (
//       <div id="myModal" className="modal">
//       <div className="modal-content animeLeft">
//       <span className="close">&times;</span>
//       {/* <FormVeiculo  veiculo={veiculo} /> */}
//       <form onSubmit={handleSubmit}>
//           <label>Nome do veículo</label>
//           <input name="veiculo"  onChange={handleChange} value={formData.veiculo ? formData.veiculo: null } required /> 
//           <label>Marca do veículo</label>
//           <input name="marca"  onChange={handleChange} value={formData.marca} required /> 
//           <label>Ano do veículo</label>
//           <input type="number" name="ano"  onChange={handleChange} value={formData.ano}   required /> 
//           <label>Descrição do veículo</label>
//           <input type="textarea" name="descricao" rows="4" cols="10" value={formData.descricao}  onChange={handleChange}  required /> 
//           <label>Status vendido</label>
//           <select name="vendido" onChange={handleChange} required>
//           <option value="" selected disabled hidden>
//           Selecione a opção
//           </option>
//           <option value={false}>NÃO</option>
//           <option value={true}>SIM</option>
//           </select> 
//           <div className="submit-button">
//           <button type="submit">Cadastrar</button>
//           </div>
//       </form>
//       </div>
//   </div>
//     )
// }

// export default ModalTable
