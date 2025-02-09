import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in manage your store's inventory</p>
    <button
      className="twitter"
      onClick={() => props.authenticate("Google")}
    >Log In With Google</button>
    <button
      className="github"
      onClick={() => props.authenticate("Github")}
    >Log In With Github</button>

  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;