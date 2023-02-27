import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { usercontext } from "../../App";
import M from "materialize-css";
const Login = () => {
  const {state,dispatch}=useContext(usercontext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const PostData = () => {
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      M.toast({ html: "invalid email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        }
         else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({type:"USER",payload:data.user})
          M.toast({
            html: "successfully logged in ",
            classes: "#76ff03 light-green accent-3",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2 className="tag">Instaclone</h2>
        <input
          type="text"
          placeholder="@email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

<button className="btn waves-effect waves-light"   onClick={() => PostData()}>LOGIN
    <i className="material-icons right">send</i>
   
  </button>
        
        <h5>
          <Link to="/signup" className="line">Do not have an account ?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
