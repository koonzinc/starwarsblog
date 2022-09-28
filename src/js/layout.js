import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";



import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [favorites, setFavorites] = useState([]);

	const addFavorites = (favorite) => {
		const newFavorites = [favorite, ...favorites];
		setFavorites(newFavorites);
		console.log(favorite, ...favorites);
	}
	const removeFavorites = (name) => {
		const removeArr = [...favorites].filter(favorite => favorite !== name);
		setFavorites(removeArr);
		console.log(favorite, ...favorites);
	}

	useEffect(() => {
	
		
		const fetchPeople = async () => {
			await fetch('https://swapi.dev/api/people/')
				.then(response => response.json())
				.then(json => {
					setPeople(json.results)
				})
		}

		const fetchPlanets = async () => {
			await fetch('https://swapi.dev/api/planets/')
				.then(response => response.json())
				.then(json => {
					setPlanets(json.results)
				})
		}

		fetchPeople();
		fetchPlanets();

	}, [])
		


		

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favorites={favorites} removeFavorites={removeFavorites} people={people} />
					<Switch>
						<Route exact path="/">
							<Home people={people} planets={planets} addFavorites={addFavorites} favorites={favorites}  />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
