import './navigation-bar.styles.scss';
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as ShoppingBasket } from '../../assets/shopping-basket.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const NavigationBar = () => {
	const { currentUser } = useContext(UserContext);
	console.log('From navbar ', currentUser);

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
					{currentUser ? (
						<span className='navigation-bar__link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='navigation-bar__link' to='/auth'>
							SIGN IN
						</Link>
					)}

					<Link className='navigation-bar__link basket' to='/basket'>
						<div className='basket-amount'>
							<p>10</p>
						</div>
						<ShoppingBasket title='' />
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default NavigationBar;
