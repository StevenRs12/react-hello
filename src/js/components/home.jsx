import React from "react";

import Dashboard from "./dashboard";
import Header from "./header";
import Footer from "./footer";

const Home = () => {
	const user = {
		name: 'Luis',
		nickName: 'Luis123',
		role: 'BUYER'
	}

	const products = [

		{
			name: "Oxford Shoes",
			image: "data:image/jpeg;base64,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",
			price: 79.99,

		},
		{
			name: "Espadrille Wedges",
			image: "data:image/jpeg;base64,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",
			price: 69.99
		},
		{
			name: "Hiking Boots",
			image: "data:image/jpeg;base64,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",
			price: 109.99
		},
		{
			name: "Platform Sneakers",
			image: "platform_sneakers.jpg",
			price: 59.99
		},
		{
			name: "Leather Sandals",
			image: "leather_sandals.jpg",
			price: 79.99
		}
	];

	return (
		<div>
			<Header nickName={user.nickName} />
			<Dashboard products={products} />
			<Footer />
		</div>
	);
};

export default Home;
