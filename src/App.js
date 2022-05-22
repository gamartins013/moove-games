import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Jogos from "./components/pages/Jogos";
import Login from "./components/pages/Login";
import Ranking from "./components/pages/Ranking";
import Cadastrar from "./components/pages/Cadastrar";
import Sobre from "./components/pages/Sobre"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home></Home>
        </Route>

        <Route exact path="/Login">
          <Login></Login>
        </Route>

        <Route exact path="/Ranking">
          <Ranking></Ranking>
        </Route>

        <Route exact path="/Sobre">
          <Sobre></Sobre>
        </Route>


        <Route exact path="/Jogos">
          <Jogos></Jogos>
        </Route>

        <Route exact path="/Cadastrar">
          <Cadastrar></Cadastrar>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
