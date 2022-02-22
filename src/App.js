import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navegacion/Navbar";
import Inicio from "./components/paginas/Inicio";
import Items from "./components/paginas/Items";
import Pokemon from "./components/paginas/Pokemon";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Inicio} />
					<Route path="/pokemon" exact component={Pokemon} />
					<Route path="/items" exact component={Items} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
