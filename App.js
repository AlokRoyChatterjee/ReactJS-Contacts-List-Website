import './styles.css';
import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';

const App = () => {
	const [peoplelist, setpeoplelist] = useState([]);

	useEffect(() => {
		fetch('https://randomuser.me/api/?results=10')
			.then((response) => response.json())
			.then((data) => {
				setpeoplelist(data.results);
			});
	}, []);

	return (
		<>
			{peoplelist.map((people) => (
				<ContactCard
					avatar={people.picture.large}
					name={people.name.first + ' ' + people.name.last}
					email={people.email}
					age={people.dob.age}
				/>
			))}
		</>
	);
};

export default App;
