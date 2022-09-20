import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { AiOutlineHeart } from 'react-icons/ai';

export const Home = ({ people, planets }) => {




	return (



		<div className="container">
			<div className="container-fluid mt-5">


				<h2 className="font-weight-light mb-5">Characters</h2>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{people.map((person, index) => {
						return (
							<div key={index} className="col-3">
								<div className="card" style={{ width: '18rem', marginLeft: '20px' }}>
									<img className="card-img-top" src="https://placeimg.com/400/200/any/grayscale" alt="/" />
									<div className="card-body">
										<h5 className="card-title">{person.name}</h5>
										<p className="card-text">Gender: {person.gender}<br />Hair Color: {person.hair_color}<br />Eye-color: {person.eye_color}</p>
										<a href="#" className="btn btn-primary">Learn More</a>
										<a href="#" id="favorite" className="btn"><AiOutlineHeart size={20} /></a>
									</div>
								</div>
							</div>
						)
					})}
				</div>


				<h2 className="font-weight-light my-5">Planets</h2>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{planets.map((planet, index) => {
						return (
							<div key={index} className="col-3">
								<div className="card" style={{ width: '18rem', marginLeft: '20px' }}>
									<img className="card-img-top" src="https://placeimg.com/400/200/any/grayscale" alt="/" />
									<div className="card-body">
										<h5 className="card-title">{planet.name}</h5>
										<p className="card-text">Population: {planet.population}<br />Climate: {planet.climate}<br />Terrain: {planet.terrain}</p>
										<a href="#" className="btn btn-primary">Go Somewhere</a>
										<a href="#" id="favorite" className="btn"><AiOutlineHeart size={20} /></a>
									</div>
								</div>
							</div>
						)
					})}

				</div>
			</div>

		</div>
	)
};