import violinBackground from './assets/violin-bg.jpg';
import violaBackground from './assets/viola-bg.jpg';
import celloBackground from './assets/cello-bg.jpg';
import doubleBassBackground from './assets/double-bass-bg.jpg';
import accessoriesBackground from './assets/accessories-bg.jpg';
import Directory from './components/directory/directory.component';

const App = () => {
	const categories = [
		{ id: 1, title: 'Violins', image: violinBackground },
		{ id: 2, title: 'Violas', image: violaBackground },
		{ id: 3, title: 'Cellos', image: celloBackground },
		{ id: 4, title: 'Double Basses', image: doubleBassBackground },
		{ id: 5, title: 'Accessories', image: accessoriesBackground },
	];

	return <Directory categories={categories} />;
};

export default App;
