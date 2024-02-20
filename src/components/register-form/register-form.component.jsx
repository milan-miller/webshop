import './register-form.styles.scss';
import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const initialRegisterInputData = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const RegisterForm = () => {
	const [registerInputData, setRegisterInputData] = useState(
		initialRegisterInputData
	);
	const { displayName, email, password, confirmPassword } = registerInputData;

	const onChangeHandler = (event) => {
		event.preventDefault();

		const { name, value } = event.target;

		setRegisterInputData({
			...registerInputData,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) return;

		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			console.log(user);
			await createUserDocumentFromAuth(user, { displayName });

			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/email-already-in-use') {
				alert('Cannot create user, email already in use');
			} else {
				console.log('User creation encountered an error', error);
			}
		}
	};

	const resetFormFields = () => {
		setRegisterInputData(initialRegisterInputData);
	};

	return (
		<div className='register-container'>
			<h2>Don't have an account?</h2>
			<span>Register with your email and password</span>
			<form className='register-container__form' onSubmit={handleSubmit}>
				<FormInput
					label='Username'
					type='text'
					name='displayName'
					value={displayName}
					required
					onChange={(e) => onChangeHandler(e)}
				/>
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
				<FormInput
					label='Confirm Password'
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					required
					onChange={(e) => onChangeHandler(e)}
				/>

				<Button type='submit'>REGISTER</Button>
			</form>
		</div>
	);
};

export default RegisterForm;
