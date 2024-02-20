import Button from '../../components/button/button.component';
import LoginForm from '../../components/login-form/login-form.component';
import RegisterForm from '../../components/register-form/register-form.component';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './authentication.styles.scss';

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<div className='authentication-container__form'>
				<LoginForm />
				{/* <Button buttonType='google' onClick={logGoogleUser}>
					Sign in with Google Popup
				</Button> */}
				<RegisterForm />
			</div>
		</div>
	);
};

export default Authentication;
