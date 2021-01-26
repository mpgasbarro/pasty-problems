import React from 'react';
import './Home.css';
import { Link, animateScroll as scroll } from 'react-scroll';

const Home = () => {
	return (
		<div className='homeContainer'>
			<header>
				<h1 className='homeText'> Welcome to Pasty Problems </h1>
			</header>
		</div>
	);
};

export default Home;
