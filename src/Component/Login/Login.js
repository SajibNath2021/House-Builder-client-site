import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import './Login.css'
import "firebase/auth";
import firebaseConfig from './config';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        const GoogleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                var user = result.user;
                setLoggedInUser(user);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }
    return (
        <div className='card cardDesign' style={{textAlign:'center'}}>
           <h3>Login With Google</h3>
            <button className="btnDesign" onClick={handleGoogle}><FontAwesomeIcon icon={faGoogle} />  Sign in with google</button> 
            <p>Don,t have account ? <span style={{color:'blue'}}> Create an account</span></p>
        </div>
    );
};

export default Login;