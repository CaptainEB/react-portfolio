import Footer from './components/Footer';
import Nav from './components/Nav';
import PageRoutes from './components/PageRoutes';

function App() {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<PageRoutes />
			</main>
			<Footer />
		</>
	);
}

export default App;
