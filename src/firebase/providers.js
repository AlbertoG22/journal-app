import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

// crear instancia de la función GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        // esta función pide dos argumentos, el auth y el provider
        const result = await signInWithPopup( FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            // User info
            displayName,
            email,
            photoURL,
            uid,
        };

    } catch (error) {
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        };
    }
};