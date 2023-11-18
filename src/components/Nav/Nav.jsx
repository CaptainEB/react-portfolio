import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
	return (
		<nav>
			<ul className={styles.nav}>
				<li className={styles.sam}>
					<Link to="/">Sam Ebadi Sobi</Link>
				</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
			</ul>
		</nav>
	);
}
