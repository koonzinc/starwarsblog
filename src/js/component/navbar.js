import React from "react";
import { Link } from "react-router-dom";
import { BsTrashFill } from 'react-icons/bs';

export const Navbar = ({ favorites, removeFavorites, people }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="" style={{ height: '100px', width: '100px' }} /></span>
				</Link>
				<div className="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						<li className="dropdown-header">Favorites</li>
						{favorites.map((favorite, index) => (
							<li key={index}><a className="dropdown-item" href="#">{favorite}&nbsp;<BsTrashFill onClick={() => removeFavorites(favorite)}/></a></li>
							
						))}

					</ul>
				</div>
			</div>
		</nav>
	);
};
