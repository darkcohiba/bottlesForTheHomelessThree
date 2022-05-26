import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './auth.css';


function Auth({setUser, setIsAuthenticated}) {
  const navigate = useNavigate();
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isNonProfit, setIsNonProfit] = useState(false)
   
    const [errors, setErrors] = useState([])

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            email,
            password,
            isNonProfit
        }
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
          if(res.ok){
            res.json()
            .then(user=>{
              setUser(user)
              setIsAuthenticated(true)
              navigate("/")
            })
          } else {
            res.json()
            .then(json => setErrors(json.errors))
          }
        })
    }
    return (
      <div className="mainWrapper">
        <div className="wrapper">
          <div >
            <h2 className="titleCreate">Create an Account!</h2>
            <p className="signInHere">
              Or{' '}
              <a href="/login" className="link">
                Sign in Here!
              </a>
            </p>
          </div>
          <form className="" >
            <div className="">
              <div className="inputBox">
                <label htmlFor="email-address" className="sr-only">
                  Email address{' '}
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="email"
                  placeholder="Email address"
                  onChange={(event) =>setEmail(event.target.value)}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="user-name" className="sr-only">
                  Username{' '}
                </label>
                <input
                  id="userName"
                  name="username"
                  type="username"
                  required
                  className="username"
                  placeholder="User Name"
                  onChange={(event) =>setUserName(event.target.value)}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="password" className="sr-only">
                  Password{' '}
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="password"
                  placeholder="Password"
                  onChange={(event) =>setPassword(event.target.value)}
                />
              </div>
              <div>
                <p id="question">Are you a NonProfit?(automatically set to no)</p>
                {!isNonProfit ? <button id="nonProfitButton" className="button is-warning" onClick={(e) => {e.preventDefault(); setIsNonProfit(!isNonProfit)}} >YES </button> : <button id="nonProfitButton" className="button is-warning" onClick={(e) => {e.preventDefault(); setIsNonProfit(!isNonProfit)}}  >NO </button> }              </div>
            </div>
            <div>
              <button
                type="submit"
                className="submitButton" onClick={onSubmit}>
                <span className="">
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Auth;