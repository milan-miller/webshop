import { useState } from 'react';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

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

		console.log(registerInputData);
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
		<>
			<h1>Register with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='displayName'>Username</label>
				<input
					type='text'
					name='displayName'
					value={displayName}
					required
					onChange={(e) => onChangeHandler(e)}
				/>

				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					value={email}
					required
					onChange={(e) => onChangeHandler(e)}
				/>

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					name='password'
					value={password}
					required
					onChange={(e) => onChangeHandler(e)}
				/>

				<label htmlFor='confirmPassword'>Confirm Password</label>
				<input
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					required
					onChange={(e) => onChangeHandler(e)}
				/>

				<button type='submit'>Register</button>
			</form>
		</>
	);
};

export default RegisterForm;
