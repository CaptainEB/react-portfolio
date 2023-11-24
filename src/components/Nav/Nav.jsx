import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<h1 className={styles.sam}>Sam Ebadi Sobi</h1>
			<NavLink className={({isActive}) => (isActive ? styles.isActive : '')} to="/projects">
				Projects
			</NavLink>
			<NavLink className={({isActive}) => (isActive ? styles.isActive : '')} to="/contact">
				Contact
			</NavLink>
			<NavLink className={({isActive}) => (isActive ? styles.isActive : '')} to="/resume">
				Resume
			</NavLink>
			<NavLink className={({isActive}) => (isActive ? styles.isActive : '')} to="/">
				About Me
			</NavLink>
		</nav>
	);
}
