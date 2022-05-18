import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login({isAuthenticated,setUser,setIsAuthenticated, user}) {

  const navigate = useNavigate();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState([])
  function onSubmit(e){
    
      e.preventDefault()
      const currentUser = {
        username: username,
        password
      }   

      fetch(`http://localhost:3000/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(currentUser)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user=>{
            setUser(user)
            setIsAuthenticated(true)
            console.log("working?")
            navigate("/home")
          })
          
        } else {
          res.json()
          .then(json => setError(json.error))
        }
      })
  }
  return (
    <div className="columns is-multiline is-1">
        <div className="column is-half is-offset-one-quarter">
          <h2 className="">Sign in to your account</h2>
          <p className="">
            Or{' '}
            <a href="/auth" className="" title="">
              create an account here!
            </a>
          </p>
        </div>
        <div class="column is-half is-offset-one-quarter field">
          <p class="control">
            <input class="input" type="username" placeholder="Username" onChange={(event) =>setUsername(event.target.value)}></input>
          </p>
        </div>
        <div class="column is-half is-offset-one-quarter field">
          <p class="control has-icons-left"></p>
            <input class="input" type="password" placeholder="Password" onChange={(event) =>setPassword(event.target.value)}></input>
        </div>
        <div class="column is-half is-offset-one-quarter field">
          <p class="control"></p>
            <button class="button is-success">
              Login
            </button>
        </div>
          <div className="column is-half is-offset-one-quarter">
            <div >
              <a href="/auth" className="">
                Forgot your password?...create a new account!
              </a>
            </div>
          </div>
          <div className="column is-offset-one-quarter ">
            <button
              type="submit"
              className="button is-primary" onClick={onSubmit}>
              <span className="">
              </span>
              Sign in
            </button>
          </div>
        {error?<div>{error}</div>:null}
    </div>
  )
}

export default Login;

// <form className="">
//           <div className="">
//             <div>
//               <label htmlFor="user-name" className="">
//                 User name
//               </label>
//               <input
//                 id="user-name"
//                 name="username"
//                 type="username"
//                 required
//                 className=""
//                 placeholder="User Name"
//                 onChange={(event) =>setUsername(event.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className=""
//                 placeholder="Password"
//                 onChange={(event) =>setPassword(event.target.value)}
//               />
//             </div>
//           </div>