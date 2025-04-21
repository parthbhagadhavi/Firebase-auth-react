import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import './Profile.css'

function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        console.log(user);
  
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      });
    };
    useEffect(() => {
      fetchUserData();
    }, []);
  
    async function handleLogout() {
      try {
        await auth.signOut();
        window.location.href = "/login";
        console.log("User logged out successfully!");
      } catch (error) {
        console.error("Error logging out:", error.message);
      }
    }
    return (
      <div className="profile-container">
      {userDetails ? (
        <div className="profile-card">
          <div className="profile-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Profile"
              className="avatar"
            />
          </div>

          <h3 className="welcome-text">
            Welcome, {userDetails.firstName} 🙏
          </h3>

          <div className="profile-details">
            <p><i className="fas fa-envelope"></i> {userDetails.email}</p>
            <p><i className="fas fa-user"></i> {userDetails.fullName}</p>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
    );
  }
  export default Profile;