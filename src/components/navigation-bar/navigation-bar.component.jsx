import './navigation-bar.styles.scss';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as ShoppingBasket } from '../../assets/shopping-basket.svg';

const NavigationBar = () => {
	return (
		<>
			<div className='navigation-bar'>
				<Link className='navigation-bar__logo' to='/'>
					<h1>Regal Resonance</h1>
				</Link>
				<div className='navigation-bar__links'>
					<Link className='navigation-bar__link' to='/shop'>
						SHOP
					</Link>
					<Link className='navigation-bar__link' to='/contact'>
						CONTACT
					</Link>
					<Link className='navigation-bar__link' to='/sign-in'>
						SIGN IN
					</Link>
					<Link className='navigation-bar__link basket' to='/basket'>
						<ShoppingBasket title='' />
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default NavigationBar;
