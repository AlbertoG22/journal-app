import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
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

export const registerUserWithEmailPassword = async({ email, password, displayName }) => {
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        
        await updateProfile( FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName
        };
    } catch (error) {
        console.log(error);
        return { ok: false, errorMessage: error.message };
    }
};

// export const loginWithEmailPassword = () => {
//     // signInWit
// };