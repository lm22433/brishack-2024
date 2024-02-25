import { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!username || !password) {
      setErrorMessage("Please enter both username and password.");
      setShowError(true);
      return;
    }

    axios
      .post("http://localhost:3000/api/users/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("userId", response.data.userId);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("name", response.data.name);
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        setErrorMessage(err.response.data.error);
        setShowError(true);
      });
  };

  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <h1>Login</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div style={{ width: 500, textAlign: "right" }}>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </label>
            </div>
            <div style={{ width: 500, textAlign: "right" }}>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
            </div>
            <div style={{ width: 500, textAlign: "center" }}>
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
        {showError && (
          <div className="error-popup">
            <p>{errorMessage}</p>
            <button onClick={() => setShowError(false)}>Close</button>
          </div>
        )}
      </body>
    </>
  );
}

export default Login;
