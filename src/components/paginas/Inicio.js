import React from "react";
import Carusel from "../carusel/Carusel";
import Footer from "../footer/Footer";

const inicio = () => {
	return (
		<div>
			<Carusel />
			<br />
			<div className="container mb-5">
				<h1 className="text-white p-2 bg-dark">Pokemon</h1>
				<figure>
					<blockquote className="blockquote">
						<p className="text-center mt-3">
							Pokémon (ポケモン Pokemon) es una franquicia de medios que originalmente comenzó como
							un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios
							de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre
							otros, convirtiéndose en una marca que es reconocida en el mercado mundial. Las ventas
							de videojuegos hasta el 1 de diciembre de 2006 habían alcanzado una cantidad de 340
							millones de ejemplares (incluyendo la venta de la versión Pikachu de la consola
							Nintendo 64),1? logrando ocupar el segundo lugar de las sagas de videojuegos más
							vendidos de Nintendo.2? La franquicia celebró su décimo aniversario el 27 de febrero
							de 2006.34
						</p>
					</blockquote>
					<figcaption className="blokquote-footer">WIKIPEDIA</figcaption>
				</figure>
				<h2 className="bg-dark text-white mb-5">Opening</h2>
				{/* <iframe
					width="80%"
					height="515"
					src="https://www.youtube.com/embed/ncHsfpkiV4E"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe> */}
			</div>
			<Footer />
		</div>
	);
};

export default inicio;
