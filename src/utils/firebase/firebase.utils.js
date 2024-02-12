import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCWCJ2LXJLMa8NTkSfTjdGH4aZ0O6ORrVE',
	authDomain: 'regal-resonance.firebaseapp.com',
	projectId: 'regal-resonance',
	storageBucket: 'regal-resonance.appspot.com',
	messagingSenderId: '755138166041',
	appId: '1:755138166041:web:9c4981dbeb6f989f445988',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
