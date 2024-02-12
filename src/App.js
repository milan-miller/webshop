import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home.component';
import NavigationBar from './components/navigation-bar/navigation-bar.component';
import PageNotFound from './pages/404/404.component';
import SignIn from './pages/sign-in/sign-in-component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<HomePage />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route path='/*' element={<PageNotFound />} />
			</Route>
		</Routes>
	);
};

export default App;
