import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { FormControl, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { auth } from "../../firebase";
import images from '../../Image'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(2)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
        // console.log(auth);
      })
      .catch((error) => alert(error.message));
  };

  const classes = useStyles();

  return (
    <div className = 'login'>
        <img className = 'back_image'src = {images['back_image.jpeg']}/>
        <Link to = '/'>
      <img className = 'login_logo' src = {images['logo.png']}></img>
       </Link>
       <div className = 'login_container'>
        <h1>Sign in</h1>
        <form>
            <h5>E-mail</h5>
            <input type = 'email' value = {email} onChange = {e => setEmail(e.target.value)}/>
            <h5>Password</h5>
            <input type = 'password' value = {password} onChange={e => setPassword(e.target.value)}/>
            <button type = 'submit' onClick = {signIn} className = 'signIn_button'>Sign In</button>
        </form>
        <p>
            By signing-in you agree to the FARM CART Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and out
            Internet-Based Ads Notice.
        </p>
        <button onClick = {register} className = 'register_button'>Create your FARM-CART account</button>
       </div>
    </div>
  )
}

export default Login
