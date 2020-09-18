import React from 'react'
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from './Reducer';
import { useStateValue } from "./StateProvider";

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error) => {
                alert(error.message);
            })
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://nextbestsolution.com/wp-content/uploads/2020/03/Transparent.png" alt="" />
                <h1>Sign in</h1>
                <p>www.nextbestsolution.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
