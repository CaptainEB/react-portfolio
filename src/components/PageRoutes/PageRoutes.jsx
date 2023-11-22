import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Projects from '../../pages/Projects';
import Resume from '../../pages/Resume';

export default function PageRoutes() {
	return (
		<Routes>
			<Route path="/" element={<About />} />
			<Route path="/projects" element={<Projects />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/resume" element={<Resume />} />
		</Routes>
	);
}
