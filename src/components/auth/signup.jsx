import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../network";
import { saveToken, validateSchema } from "./utils";

export const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const [loginVal, setLoginVal] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e, field) =>
    setLoginVal((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    const isValid = await validateSchema("SIGNUP", loginVal);
    if (!isValid) {
      setError({ isError: true, message: "Input types not valid" });
      return;
    }
    setError({ isError: false, message: "" });

    const res = await signup(loginVal);

    if (res.status < 299 && res.status > 199) {
      saveToken(res.data.token);
      navigate("/");
    }
  };

  return (
    <div id="signup-box" className="signup-box">
      <div className="signup-area">
        <h1 className="title">Sign Up</h1>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              style={error.isError ? { borderColor: "#E14448" } : {}}
              id="signup-user"
              className="input is-success"
              type="text"
              placeholder="Username"
              onChange={(e) => handleChange(e, "username")}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              style={error.isError ? { borderColor: "#E14448" } : {}}
              id="signup-mail"
              className="input is-success"
              type="text"
              placeholder="Email"
              onChange={(e) => handleChange(e, "email")}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            {/* <span className="icon is-small is-right">
              <FontAwesomeIcon icon={faCheck} />
            </span> */}
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              style={error.isError ? { borderColor: "#E14448" } : {}}
              id="signup-pass"
              className="input"
              type="password"
              placeholder="Password"
              onChange={(e) => handleChange(e, "password")}
            />
            <span className="icon is-small is-left">
              <FontAwesomeIcon icon={faLock} />
            </span>
          </p>
        </div>
        {error.isError && (
          <div className="has-text-danger	mb-2">{error.message}</div>
        )}
        <button
          onClick={handleSubmit}
          id="signup-button"
          className="form-button button is-primary is-inverted is-outlined"
        >
          Sign Up
        </button>
        <br />
        <i>
          <div id="feedback" className="feedback"></div>
        </i>
      </div>
    </div>
  );
};
