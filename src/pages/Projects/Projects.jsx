import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import bingeIMG from '/projects/binge.png?url';
import noteTakerAppIMG from '/projects/note-taker-app.png?url';
import passwordGeneratorAppIMG from '/projects/password-generator.png?url';
import tacoTapIMG from '/projects/taco-tap.png?url';
import techBlogIMG from '/projects/tech-blog.png?url';
import weatherAppIMG from '/projects/weather-app.png?url';

export default function Projects() {
	return (
		<section>
			<h1 className={styles.h1}>Projects</h1>
			<section className={styles.projects}>
				<div className={styles.card}>
					<img src={tacoTapIMG} alt="Taco Tap App screenshot" />
					<h2>Taco Tap</h2>
					<p>Our first project was made using 2 third party APIs, Google maps and Open Weather. This app is front end only.</p>
					<div className={styles.links}>
						<Link to="https://captaineb.github.io/Taco-Tap/">Taco Tap</Link>
						<Link to="https://github.com/CaptainEB/Taco-Tap">Github Repo</Link>
					</div>
				</div>
				<div className={styles.card}>
					<img src={bingeIMG} alt="Binge App screenshot" />
					<h2>Binge</h2>
					<p>Our second project was made with a focus on backend technologies such as NodeJS, Express, and we used MySQL for database.</p>
					<div className={styles.links}>
						<Link to="https://floating-spire-24102-defdd03b0620.herokuapp.com/">Binge</Link>
						<Link to="https://github.com/tdavids215/Binge">Github Repo</Link>
					</div>
				</div>
				<div className={styles.card}>
					<img src={noteTakerAppIMG} alt="Note Taker App screenshot" />
					<h2>Note Taker</h2>
					<p>This app was written to demonstrate competency in database knowledge, I used MySQL database and Sequelize ORM.</p>
					<div className={styles.links}>
						<Link to="https://note-taker-app-by-captaineb-1a6098a9b118.herokuapp.com/">Note Taker App</Link>
						<Link to="https://github.com/CaptainEB/Note-Taker-App">Github Repo</Link>
					</div>
				</div>
				<div className={styles.card}>
					<img src={weatherAppIMG} alt="Weather App screenshot" />
					<h2>Weather Report</h2>
					<p>
						I made this app early on in the bootcamp in order to show knowledge of working with third party APIs, the API I used was open weather.
					</p>
					<div className={styles.links}>
						<Link to="https://captaineb.github.io/Weather_Report/">Weather App</Link>
						<Link to="https://github.com/CaptainEB/Weather_Report">Github Repo</Link>
					</div>
				</div>
				<div className={styles.card}>
					<img src={passwordGeneratorAppIMG} alt="Password Generator App screenshot" />
					<h2>Password Generator App</h2>
					<p>I made this app as a JavaScript exercise.</p>
					<div className={styles.links}>
						<Link to="https://captaineb.github.io/Password-Generator-Sam/">Password Generator App</Link>
						<Link to="https://github.com/CaptainEB/Password-Generator-Sam">Github Repo</Link>
					</div>
				</div>
				<div className={styles.card}>
					<img src={techBlogIMG} alt="Tech Blog screenshot" />
					<h2>Tech Blog</h2>
					<p>This app was made with express and MySQL in the backend, handlebars and CSS in frontend.</p>
					<div className={styles.links}>
						<Link to="https://tech-blog-by-captaineb-de226f74480b.herokuapp.com/">Tech Blog</Link>
						<Link to="https://github.com/CaptainEB/Tech-blog">Github Repo</Link>
					</div>
				</div>
			</section>
		</section>
	);
}
