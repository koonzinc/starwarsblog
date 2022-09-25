import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import { AiOutlineHeart } from 'react-icons/ai';

export const Home = ({ people, planets, addFavorites, favorites }) => {



	return (
		<div className="container">
			<div className="container-fluid mt-5">
				<h2 className="font-weight-light mb-5">Characters</h2>
				<div className="d-flex flex-row flex-nowrap overflow-auto">
					{people.map((person, index) => {
						return (
							<div key={index} className="col-3">
								<div className="card" style={{ width: '18rem', marginLeft: '20px' }}>
									<img style={{ maxWidth: '400px', maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" src={index >= 16 ? `https://starwars-visualguide.com/assets/img/characters/${index + 2}.jpg` : `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} alt="/" />
									<div className="card-body">
										<h5 value={favorites} className="card-title">{person.name}</h5>
										<p className="card-text">
											<strong>Gender:</strong> {person.gender}<br />
											<strong>Hair Color:</strong> {person.hair_color}<br />
											<strong>Eye Color:</strong> {person.eye_color}
										</p>
										<a href="#" className="btn btn-primary">Go Somewhere</a>
										<a onClick={() => addFavorites(person.name)} href="#" id="favorite" className="btn"><AiOutlineHeart size={20} /></a>
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
									<img style={{ maxWidth: '400px', maxHeight: '200px', objectFit: 'cover' }} className="card-img-top" src={index >= 16 ? `https://starwars-visualguide.com/assets/img/planets/${index + 3}.jpg` : `https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`} alt="/" />
									<div className="card-body">
										<h5 className="card-title">{planet.name}</h5>
										<p className="card-text">
											<strong>Population:</strong> {planet.population}<br />
											<strong>Climate:</strong> {planet.climate}<br />
											<strong>Terrain:</strong> {planet.terrain}
										</p>
										<a href="#" className="btn btn-primary">Go Somewhere</a>
										<a onClick={() => addFavorites(planet.name)} href="#" id="favorite" className="btn"><AiOutlineHeart size={20} /></a>
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
