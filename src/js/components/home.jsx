import React, { useEffect, useState } from "react";

import Dashboard from "./dashboard";
import Header from "./header";
import Footer from "./footer";

const Home = () => {

	const [characters, setCharacters] = useState([])
	const [page, setPage] = useState(10)
	const user = {
		name: 'Luis',
		nickName: 'Luis123',
		role: 'BUYER'
	}

	async function fetchData(endpoint) {
		const response = await fetch(endpoint);  // Nota el uso de fetch API
		const data = await response.json();
		console.log(data);
		setCharacters(data.results)
	}

	const handlerPrevPage = () => {
		if (page > 1) setPage(page - 1)
	}

	const handlerNextPage = () => {
		if (page < 42) setPage(page + 1)
	}


	useEffect(() => {
		fetchData(`https://rickandmortyapi.com/api/character?page=${page}`)
	}, [page])

	return (
		<div>
			<Header nickName={user.nickName} />
			<Dashboard characters={characters} handlerPrevPage={handlerPrevPage} handlerNextPage={handlerNextPage} />
			<Footer />
		</div>
	);
};

export default Home;
