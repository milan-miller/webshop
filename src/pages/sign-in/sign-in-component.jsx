import Button from '../../components/button/button.component';
import RegisterForm from '../../components/register-form/register-form.component';
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div className='sign-in-container'>
			<div className='sign-in__form'>
				<h1>Sign In Page</h1>
				<Button buttonType='google' onClick={logGoogleUser}>
					Sign in with Google Popup
				</Button>
			</div>
			<RegisterForm />
		</div>
	);
};

export default SignIn;
