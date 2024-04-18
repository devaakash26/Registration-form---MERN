import React, { useState } from 'react';
import signup from "../asserts/img/sigup_img.png";
import signin from "../asserts/img/login.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
const SignUp = ({ signUpMode, onSignUpClick, onSignInClick }) => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  })

  const [Loginuser, setLoginUser] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  }
  const handleInputLoginChange = (e) => {
    const { name, value } = e.target;

    setLoginUser({
      ...Loginuser,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:4000/api/user/`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
      });
      console.log(response);

      if (response.ok) {
        setUser({
          name: "",
          email: "",
          mobile: "",
          password: ""
        });
        Swal.fire({
          title: "Register Successful!",
          text: "Now go to Login!",
          icon: "success"
        });
      } else if (response.status === 409) {
        // const responseData = await response.json();
        // if (responseData.error.includes("email")) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email Already Exists!",
          });
        // }
      }
      else if(response.status ===401)
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Phone Number Already Exists!",
        });
      }
    } catch (error) {
      console.log("register", error);
    }
};

  //Login 
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(Loginuser);
    const { name } = Loginuser;
    try {
      const response = await fetch(`http://localhost:4000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Loginuser),
      });

      console.log(response);
      if (response.ok) {
        setLoginUser({
          email: "",
          password: ""
        });
        Swal.fire({
          title: "Login Successfully!",
          text: "Moving to Welcome Page!",
          icon: "success"
        });
        navigate(`/main`);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Credentials!",
        });
      }
    } catch (error) {
      console.log("login", error);
      alert("An error occurred during login");
    }
  };



  return (
    <>
      <div className={`containerform ${signUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" id="signin" onSubmit={handleLoginSubmit}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Email"
                  name='email'
                  value={Loginuser.email}
                  onChange={handleInputLoginChange}
                  autoComplete="off"
                  id="emailname" required
                />
              </div>
              <div className="input-field passfield">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  id="passname"
                  name='password'
                  value={Loginuser.password}
                  onChange={handleInputLoginChange}
                  className="pass1" required
                />
                <span>
                  <i className="fa-regular fa-eye "></i>
                </span>
              </div>

              <input type="submit" value="Sign in" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>

            <form action="#" className="sign-up-form" id="signup" onClick={handleSubmit}>
              <h2 className="title">Sign up</h2>
              <div className="input-field namefield">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Full Name" autoComplete="off" maxLength="20" id="fname" name='name' value={user.name} onChange={handleInputChange} required />
              </div>
              <div className="input-field efield">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" autoComplete="off" id="ename" value={user.email} onChange={handleInputChange} name='email' required />
              </div>
              <div className="input-field passfield">
                <i className="fas fa-lock"></i>
                <input type="number" placeholder="Phone Number" name='mobile' value={user.mobile} onChange={handleInputChange} id="pass" className="pass1" required />
                <span>
                  <i className="fa-regular fa-eye "></i>
                </span>
              </div>
              <div className="input-field  passfield">
                <i className="fas fa-lock"></i>
                <input type="password" name='password' value={user.password} onChange={handleInputChange} placeholder="Password" id="confirmpass" className="pass1" required />
                <span>
                  <i className="fa-regular fa-eye "></i>
                </span>
              </div>
              <input type="submit" value="Sign up" className="btn signup-btn" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Create Account</h3>
              <p>Sign up if you still don't have an account ...</p>
              <button className="btn transparent" id="sign-up-btn" onClick={onSignUpClick}>
                Sign up
              </button>
            </div>
            <img src={signup} className="image" alt="Sign Up" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>Log in</h3>
              <p>Sign in here if you already have an account</p>
              <button className="btn transparent" id="sign-in-btn" onClick={onSignInClick}>
                Sign in
              </button>
            </div>
            <img src={signin} className="image" alt="Sign In" />
          </div>
        </div>
      </div>

    </>
  )
}

export default SignUp;
