import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
};

export default App;
