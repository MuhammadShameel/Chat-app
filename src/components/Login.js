import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Random-Chat</h2>
        <GoogleButton className="mx-auto" />
        {/* <Button
          //   onClick={handleGoogleSignIn}
          style={{
            backgroundColor: "#db4437",
            color: "white",
            marginBottom: "10px",
          }}
        >
          <GoogleOutlined />
          Sign in with Google
        </Button> */}
        <br />
        <Button
          //   onClick={handleFacebookSignIn}
          style={{ backgroundColor: "#3b5998", color: "white" }}
        >
          <FacebookOutlined /> Sign in with Facebook
        </Button>
      </div>
    </div>
  );
};

export default Login;
