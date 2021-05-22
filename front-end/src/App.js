
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MenuVeiculo from './components/VeiculoTable/VeiculoTable';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <MenuVeiculo />
          <Route exact path="/" component={() => <h1>Listagem veiculos</h1>} />
          <Route path="/cadastro" component={() => <h1>Cadastro veiculos</h1>} />
        </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
