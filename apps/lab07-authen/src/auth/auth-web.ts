import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithPhoneNumber, ConfirmationResult, RecaptchaVerifier } from "firebase/auth";
import { AuthUser, IAuthService, EmailPasswordCredentials, PhoneCredentials } from "./auth-interface";

// 🚨 นำค่า Config จากเว็บ Firebase ของคุณมาใส่ตรงนี้นะครับ [cite: 199-207]
const firebaseConfig = {
  apiKey: "AIzaSyCAh2903KELNl6CIuzjiww8zAo9TOaijm0",
  authDomain: "lab6mobile.firebaseapp.com",
  projectId: "lab6mobile",
  storageBucket: "lab6mobile.firebasestorage.app",
  messagingSenderId: "179167941370",
  appId: "1:179167941370:web:8bf78360dceba904a1af43",
  measurementId: "G-9L9TJQJE7P"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

function mapUser(u: any): AuthUser {
  return {
    uid: u.uid,
    email: u.email,
    displayName: u.displayName,
    photoUrl: u.photoURL,
  };
}

let verifier: RecaptchaVerifier | null = null;
let confirmationResult: ConfirmationResult | null = null;
const recaptchaContainerId: string = "recaptcha-container";

export function getRecaptchaVerifier(containerId: string): RecaptchaVerifier {
  if (!verifier) {
    verifier = new RecaptchaVerifier(firebaseAuth, containerId, {
      size: "invisible", // หรือ "normal" [cite: 242]
    });
  }
  return verifier;
}

export class FirebaseWebAuthService implements IAuthService {
  async getCurrentUser() {
    return firebaseAuth.currentUser ? mapUser(firebaseAuth.currentUser) : null;
  }

  async loginWithEmailPassword(creds: EmailPasswordCredentials) {
    const r = await signInWithEmailAndPassword(firebaseAuth, creds.email, creds.password);
    return mapUser(r.user);
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const r = await signInWithPopup(firebaseAuth, provider);
    return mapUser(r.user);
  }

  async logout() {
    await firebaseAuth.signOut();
  }

  async startPhoneLogin(creds: PhoneCredentials): Promise<{ verificationId: string }> {
    const verifier = getRecaptchaVerifier(recaptchaContainerId);
    confirmationResult = await signInWithPhoneNumber(firebaseAuth, creds.phoneNumberE164, verifier);
    return { verificationId: confirmationResult.verificationId };
  }

  async confirmPhoneCode(payload: { verificationId: string; verificationCode: string }): Promise<AuthUser> {
    if (!confirmationResult) {
      throw new Error("No confirmation result");
    }
    const r = await confirmationResult.confirm(payload.verificationCode);
    return mapUser(r.user);
  }
}