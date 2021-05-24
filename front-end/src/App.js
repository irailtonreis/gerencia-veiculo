
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import MenuVeiculo from './components/VeiculoTable/VeiculoTable';
import CadastroVeiculo from './components/CadastroVeiculo/CadastroVeiculo';
import VeiculoTable from './components/VeiculoTable/VeiculoTable';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          {/* <MenuVeiculo /> */}
          <Route exact path="/" component={VeiculoTable} />
          <Route exact path="/cadastrar" component={CadastroVeiculo} />
        </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
