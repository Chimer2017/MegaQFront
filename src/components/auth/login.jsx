import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../network";
import { buildFormData, saveToken, validateSchema } from "./utils";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({
    isError: false,
    message: "",
  });
  const [loginVal, setLoginVal] = useState({ username: "", password: "" });

  const handleChange = (e, field) =>
    setLoginVal((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    const isValid = await validateSchema("LOGIN", loginVal);

    if (!isValid) {
      setError({ isError: true, message: "Input types not valid" });
      return;
    }

    setError({ isError: false, message: "" });

    const res = await login(buildFormData(loginVal));

    if (res.status < 299 && res.status > 199) {
      saveToken(res.data.access_token);
      navigate("/");
    }
  };

  return (
    <>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field">
            <p className="control has-icons-left">
              <input
                style={error.isError ? { borderColor: "#E14448" } : {}}
                className="login-input input is-small is-success"
                type="text"
                id="login-user"
                placeholder="Username"
                onChange={(e) => handleChange(e, "username")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </p>
          </div>
        </div>
        <div className="navbar-item">
          <div className="field ">
            <p className="control has-icons-left">
              <input
                style={error.isError ? { borderColor: "#E14448" } : {}}
                className="login-input input is-small is-success"
                type="password"
                id="login-pass"
                placeholder="Password"
                onChange={(e) => handleChange(e, "password")}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </p>
          </div>
        </div>
        <span className="navbar-item">
          <button
            onClick={handleSubmit}
            id="login-button"
            className="button is-primary is-inverted"
          >
            <span className="icon">
              <i className="fa fa-check"></i>
            </span>
            <span>Login</span>
          </button>
        </span>
      </div>
    </>
  );
};
