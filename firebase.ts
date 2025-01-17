import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';

// Inicializar la aplicación de Firebase
const app = initializeApp(firebaseConfig);

// Obtener referencias a Firestore y Authentication
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;