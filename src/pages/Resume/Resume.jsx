import React from 'react';
import { Link } from 'react-router-dom';
import resume from '/resume.txt';

export default function Resume() {
	return (
		<section>
			<h1>Download Resume</h1>
			<Link to={resume} download="Resume.txt" target="_blank" rel="noreferrer">
				Resume.txt
			</Link>
		</section>
	);
}
