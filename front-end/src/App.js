
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VeiculoTable from './components/VeiculoTable/VeiculoTable';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route exact path="/" component={VeiculoTable} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
