import './App.css'

function Login() {

  return (
    <>
      <div></div>
      <h1>Login</h1>
      <div>
        <form>
        <div style = {{width: 500, textAlign: 'right'}}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
            </div>
            <div style = {{width: 500, textAlign: 'right'}}>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
            </div>
            <div style = {{width: 500, textAlign: 'center'}}>
                <input type="submit" value="Submit" />
            </div>
        </form>
      </div>
    </>
  )
}

export default Login