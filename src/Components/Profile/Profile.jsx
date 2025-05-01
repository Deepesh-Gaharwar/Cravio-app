import React, { useEffect, useState } from "react";
import { auth, db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { UserCircle } from 'lucide-react';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedOut, setLoggedOut] = useState(false); // for redirect

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const findUser = await getDoc(docRef);

          if (findUser.exists()) {
            setUserDetails(findUser.data());
          } else {
            console.log("User document not found in Firestore");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.log("User is not logged in");
      }

      // Whether user exists or not, stop loading
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setLoggedOut(true); // trigger redirect
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Redirect after logout
  if (loggedOut) return <Navigate to="/login" />;

  // Show loading state
  if (loading) return <p className="text-center mt-10">Loading...</p>;

  // User not found
  if (!userDetails) return <p className="text-center mt-10">User not found</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow-md text-center">
      <div className="flex justify-center mb-4">
        {userDetails.photoURL ? (
          <img
            src={userDetails.photoURL}
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover"
          />
        ) : (
          <UserCircle className="w-20 h-25 text-gray-400" />
        )}
      </div>

      <h3 className="text-xl font-semibold mb-2">
        Welcome,
        {(userDetails.firstName && userDetails.lastName)
          ? ` ${userDetails.firstName} ${userDetails.lastName}`
          : userDetails.displayName || "User"}
      </h3>

      <div className="text-sm text-gray-600">
        <p>Email: {userDetails.email}</p>
        {(userDetails.firstName || userDetails.lastName) && (
          <p>
            Username: {(userDetails.firstName || '') + ' ' + (userDetails.lastName || '')}
          </p>
        )}
      </div>

      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
