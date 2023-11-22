import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './Footer.module.css';

export default function Footer() {
	return <footer className={Styles.footer}>
		<Link to='https://github.com/CaptainEB'>Github</Link>
		<Link to='https://www.linkedin.com/in/sam-ebadi-sobi-543a14161/'>LinkedIn</Link>
		<Link to='https://stackoverflow.com/users/22851859/captaineb'>Stack Overflow</Link>
	</footer>;
}
