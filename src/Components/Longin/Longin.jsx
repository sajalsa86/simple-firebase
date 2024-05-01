import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";


const Longin = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider
    //sing in google
    const handleGoogleSingIn = () => {
        //console.log('Gooogle mama is coming');
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const longgedInUser = result.user;
                console.log(longgedInUser)
                setUser(longgedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    };
    //sing in github
    const handleSingInGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const longgedInUser = result.user;
                console.log(longgedInUser);
                setUser(longgedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    };
    // sing out all
    const handleGoogleSingOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    };
    return (
        <div className="text-center mt-4">
            {
                user ?
                    <button className="btn btn-primary" onClick={handleGoogleSingOut}>Sing Out</button> :
                    <>
                        <button className="btn btn-success" onClick={handleGoogleSingIn}>Google Longin</button>
                        <button className="btn btn-success ml-5" onClick={handleSingInGithub}>Github Longin</button>
                    </>
            }

            {user &&
                <div className="w-1/2 mx-auto border border-2 p-3 m-3">
                    <h2>User : {user.displayName}</h2>
                    <h2>Email : {user.email}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Longin;