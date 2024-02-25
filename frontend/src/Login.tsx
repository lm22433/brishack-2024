import "./App.css";
import Header from "./Header";

function Login() {
  return (
    <>
      <Header />
      <h1>Login</h1>
      <div>
        <form>
          <div style={{ width: 500, textAlign: "right" }}>
            <label>
              Username:
              <input type="text" name="username" />
            </label>
          </div>
          <div style={{ width: 500, textAlign: "right" }}>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
          </div>
          <div style={{ width: 500, textAlign: "center" }}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
