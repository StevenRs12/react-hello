import React, { useEffect, useState } from "react";

import Dashboard from "./dashboard";
import Header from "./header";
import Footer from "./footer";

const Home = () => {

	const [characters, setCharacters] = useState([])
	const user = {
		name: 'Luis',
		nickName: 'Luis123',
		role: 'BUYER'
	}

	async function fetchData(endpoint) {
		const response = await fetch(endpoint);  // Nota el uso de fetch API
		const data = await response.json()
		console.log(data);
		setCharacters(data.results)
	}

	useEffect(() => {
		fetchData('https://rickandmortyapi.com/api/character')
	}, [])

	return (
		<div>
			<Header nickName={user.nickName} />
			<Dashboard characters={characters} />
			<Footer />
		</div>
	);
};

export default Home;
