import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import twitterimg from "../../image/twitter-img.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleButton from "react-google-button";
import "./login.css";

const Signup = () => {
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      const user = {
        username,
        name,
        email,
        password, // Add this if it's part of the form submission
      };
      console.log("User Created: ", user);
      // Add your signup logic here
      navigate("/"); // Redirect to home after signup
    } catch (error) {
      seterror(error.message);
      window.alert(error.message);
    }
  };

  const handlegooglesignin = async (e) => {
    e.preventDefault();
    try {
      console.log("Google Sign-In");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img className="image" src={twitterimg} alt="Twitter" />
      </div>
      <div className="form-container">
        <div>
          <TwitterIcon className="Twittericon" style={{ color: "skyblue" }} />
          <h2 className="heading">Happening now</h2>
          <div className="d-flex align-items-sm-center">
            <h3 className="heading1">Join Twitter today</h3>
          </div>
          {error && <p className="errorMessage">{error}</p>}
          <form onSubmit={handlesubmit}>
            <input
              className="display-name"
              type="text"
              placeholder="@username"
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              className="display-name"
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              className="email"
              type="email"
              placeholder="Enter the email"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              className="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <div className="btn-login">
              <button type="submit" className="btn">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <hr />
        <div className="google-button">
          <GoogleButton
            className="g-btn"
            type="light"
            onClick={handlegooglesignin}
          />
        </div>
        <div>
          Already have an account?
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "var(--twitter-color)",
              fontWeight: "500",
              marginLeft: "5px",
            }}>
            Login In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
