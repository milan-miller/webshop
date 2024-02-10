import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import PageNotFound from './pages/404.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<HomePage />} />
				<Route path='/*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
