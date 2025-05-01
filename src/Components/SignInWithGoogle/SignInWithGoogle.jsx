import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import GoogleButton from 'react-google-button';
import { auth, db } from '../../utils/firebase';
import { toast } from 'react-toastify';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SignInWithGoogle = () => {
  const navigate = useNavigate();

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user already exists in Firestore
      const userRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        // User does not exist in Firestore, create the user data
        const [firstName, lastName] = user.displayName ? user.displayName.split(' ') : ['', ''];

        // Save user info in Firestore
        await setDoc(userRef, {
          email: user.email,
          firstName: firstName || '',
          lastName: lastName || '',
          photoURL: user.photoURL || '',
        });

        toast.success("User created in Firestore and logged in successfully!", {
          position: "top-center",
        });
      } else {
        // User exists, no need to overwrite their data
        toast.success("Welcome back!", {
          position: "top-center",
        });
      }

      // Redirect to profile page after successful login
      navigate("/profile");

    } catch (error) {
      console.error("Google login error:", error.message);
      toast.error("Login failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="mt-6">
      <p className="text-sm text-gray-500 text-center mb-3">-- Or continue with --</p>
      <div className="flex justify-center">
        <GoogleButton onClick={googleLogin} />
      </div>
    </div>
  );
};

export default SignInWithGoogle;
