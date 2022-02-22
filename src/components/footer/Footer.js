import React from "react";
import { Link } from "react-router-dom";

const footer = () => {
	return (
		<div>
			<footer className="text-white py-4 bg-dark">
				<div className="container">
					<nav className="row">
						<Link
							to="/"
							className="col-12 col-md-3 d-flex aling-items-center justify-content-center"
						>
							<img src="./images/tituloPokemon.png" height="40px" />
						</Link>
						<ul className="col-12 col-md-3 list-unstyled">
							<li className="font-weight-bold mb-2">Pokemon</li>
							<li className="text-center">
								En este sitio web podras encontrar informacion sobre tus pokemon favoritos.
							</li>
						</ul>
						<ul className="col-12 col-md-3 list-unstyled">
							<li className="font-weight-bold mb-2">Enlaces</li>
							<li>
								<Link to="/pokemon" className="text-reset">
									Pokemon
								</Link>
							</li>
							<li>
								<Link to="/items" className="text-reset">
									Items
								</Link>
							</li>
						</ul>
						<ul className="col-12 col-md-3 list-unstyled">
							<li className="font-weight-bold mb-2">Siguenos</li>
							<li className="d-flex justify-content-between">
								<i className="bi bi-facebook"></i>
								<i className="bi bi-instagram"></i>
								<i className="bi bi-twitter"></i>
								<i className="bi bi-youtube"></i>
							</li>
						</ul>
						<div className="container">
							<p className="text-center mb_0 mt-2">Realizada por JCB para youtube</p>
						</div>
					</nav>
				</div>
			</footer>
		</div>
	);
};

export default footer;
