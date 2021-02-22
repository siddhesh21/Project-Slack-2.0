import styled from "styled-components";
import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign In</h1>
        <p>sid.slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 100px;

  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 50px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), 1px 2px 3px rgba(0, 0, 0, 0.5);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 10px;
    margin-bottom: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
