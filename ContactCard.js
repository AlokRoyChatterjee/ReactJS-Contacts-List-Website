import React, { useState } from 'react';

const ContactCard = (props) => {
	const [peopleage, peopleagechange] = useState(false);

	return (
		<div className='contact-card'>
			<img src={props.avatar} alt='profile' />
			<div className='user-details'>
				<p>Person: {props.name}</p>
				<p>Person Contact: {props.email}</p>
				<button onClick={() => peopleagechange(!peopleage)}>Toggle Age </button>
				{peopleage && <p>Age of person: {props.age}</p>}
			</div>
		</div>
	);
};

export default ContactCard;
