import './login-form.styles.scss';
import { useState } from 'react';
import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const initialLoginInputData = {
	email: '',
	password: '',
};

const LoginForm = () => {
	const [loginInputData, setLoginInputData] = useState(initialLoginInputData);
	const { email, password } = loginInputData;

	const onChangeHandler = (event) => {
		event.preventDefault();

		const { name, value } = event.target;

		setLoginInputData({
			...loginInputData,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			await signInAuthUserWithEmailAndPassword(email, password);

			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case 'auth/wrong-password':
					alert('Incorrect password or email');
					break;
				case 'auth/user-not-found':
					alert('No user associated with this email');
					break;
				default:
					console.log(error);
			}
		}
	};

	const resetFormFields = () => {
		setLoginInputData(initialLoginInputData);
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	return (
		<div className='login-container'>
			<h2>Already have an account?</h2>
			<span>Login with your email and password</span>
			<form className='login-container__form' onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					name='email'
					value={email}
					required
					onChange={(e) => onChangeHandler(e)}
				/>
				<FormInput
					label='Password'
					type='password'
					name='password'
					value={password}
					required
					onChange={(e) => onChangeHandler(e)}
				/>

				<div className='login-container__buttons'>
					<Button type='submit'>LOGIN</Button>
					<Button type='button' buttonType='google' onClick={signInWithGoogle}>
						GOOGLE LOGIN
					</Button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
