import React from "react";
import { Link } from "react-router-dom";
import {BsTrashFill} from 'react-icons/bs';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png" alt="" style={{ height: '100px', width: '100px' }} /></span>
				</Link>
				<div className="ml-auto">

					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
							Dropdown button
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">Action</a>
							<a className="dropdown-item" href="#">Another Action</a>
							<a className="dropdown-item" href="#">Something else here</a>
						</div>
					</div>

				</div>

			</div>
		</nav>
	);
};
