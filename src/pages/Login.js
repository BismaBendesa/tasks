import { Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const [inputUsername, setInputUsername] = React.useState("");
  const [inputPass, setInputPass] = React.useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Input onChange event
  const handleChange = (event) => {
    const inputName = event.target.name;
    if (inputName === "username") {
      setInputUsername(event.target.value);
      // console.log(inputUsername);
    } else if (inputName === "password") {
      setInputPass(event.target.value);
      // console.log(inputPass);
    }
  };

  // form onSubmit event
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputUsername.trim().length === 0) {
      console.log("Username is empty");
      alert("Username is empty");
    } else if (inputPass.trim().length === 0) {
      console.log("Password is empty");
      alert("Password is empty");
    } else {
      let credentials = false;
      // console.log(inputUsername);
      // console.log(inputPass);
      // console.log("---");
      userCredentials.forEach((user) => {
        // console.log(user.username == inputUsername);
        // console.log(user.password == inputPass);
        if (user.username == inputUsername && user.password == inputPass) {
          setIsLoggedIn(true);
          credentials = true;
        }
      });
      if (!credentials) {
        alert("Incorrect password or username!");
      }
    }
  };
  useEffect(() => {
    {
      isLoggedIn && navigate("/");
    }
  }, [isLoggedIn]);

  return (
    <div className="login-form">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} method="POST">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          autoComplete="off"
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          autoComplete="off"
        />
        <br />
        {/* <span style={{ color: "white" }}>Input value {inputVal}</span> */}

        <button>submit</button>
      </form>
    </div>
  );
}
