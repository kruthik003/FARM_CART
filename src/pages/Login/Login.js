import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { FormControl, Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { auth } from "../../firebase";

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
    <Card className="login" variant="outlined">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <FormControl>
          <h5>E-mail</h5>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            onClick={signIn}
            className="login__signInButton "
          >
            Sign In
          </Button>
        </FormControl>

        <Typography>
          Dengan mendaftarkan akun anda menyetujiui persyaratan dari Getama
          Shop.
        </Typography>

        <Button onClick={register} className="login__registerButton">
          Buat akun Getama Shop
        </Button>
      </div>
    </Card>
  );
}

export default Login;
