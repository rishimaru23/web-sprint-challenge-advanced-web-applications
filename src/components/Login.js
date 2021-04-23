import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [credentials, setCredentials ] = useState ({ username: '', password: ''});
  const [ failLogin, setFailLogin ] = useState(false)
  const history = useHistory();

  const handleSubmit = evt => {
    evt.preventDefault();
    axios
    .post('http://localhost:5000/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push('/bubbles')
      setFailLogin(false)
    })
    .catch(err => {console.log(err)
    });
  }
  if(setCredentials.username !== "Lambda" || setCredentials.password !== "i<3Lambd4" ){
    setFailLogin()
  };
    

  const handleChange = evt => {
    const { name, value } = evt.target;
    setCredentials({ ...credentials, [name]:value })
  }
  

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <h2>Login</h2>
        <label>
          Username: 
          <input type='text' name='username' value={credentials.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type='password' name='password' value={credentials.password} onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Login</button>
      </form>
      {failLogin && <p>Username or Password not valid.</p>}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.