import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './auth.css';
import {Form, Button, Container, Grid, Header, Segment, Message} from 'semantic-ui-react'


function Auth({setUser, setIsAuthenticated}) {
  const navigate = useNavigate();
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isNonProfit, setIsNonProfit] = useState(false)
    const [errors, setErrors] = useState("")
    console.log(isNonProfit)

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
            .then(json => setErrors(json.error))
          }
        })
    }
    console.log(errors)
    return (
      <div>
<Container className="mainWrapper">
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      Create an Account!
      </Header>
        <Form size='large'>
          <Segment stacked>
    <Form.Field>
      <label>E-Mail Address</label>
      <input   id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="email"
                  placeholder="john@doe.com"  
                  onChange={(event) =>setEmail(event.target.value)}  />
    </Form.Field>



    <Form.Field>
      <label>Username</label>
      <input   id="username"
                  name="username"
                  required
                  className="username"
                  placeholder="username"  
                  onChange={(event) =>setUserName(event.target.value)}/>
    </Form.Field>

    
     <Form.Field>
      <label>Password</label>
      <input id="password"
                  name="password"
                  type="password"
                  required
                  className="password"
                  placeholder="Password"
                  onChange={(event) =>setPassword(event.target.value)} />
    </Form.Field>

              <p style={{marginTop: "1em"}}> Are You A NonProfit? </p>
              <div>
                {!isNonProfit ? <button id="nonProfitButton" className="button is-warning" onClick={(e) => {e.preventDefault(); setIsNonProfit(!isNonProfit)}} >Yes, Non Profit </button> : 
                <Button id="nonProfitButton" color='orange' className="button is-warning" onClick={(e) => {e.preventDefault(); setIsNonProfit(!isNonProfit)}}  >  NO </Button> }
              </div>
              <Button
                type="submit" color="primary"
                className="submitButton" onClick={onSubmit}>
                Sign Up
              </Button>
              {errors?<div>{errors}</div>:null}
    </Segment>
    </Form>
            {/* <div>
                {!isNonProfit ? <button id="nonProfitButton" className="button is-warning" onClick={(e) => {e.preventDefault(); setIsNonProfit(!isNonProfit)}} >Yes, Non Profit </button> : 
                <Button id="nonProfitButton" color='orange' className="button is-warning" onClick={(e) => {e.preventDefault(); setIsNonProfit(!isNonProfit)}}  >  NO </Button> }
            </div> */}
                {/* <Button.Group>
                  <Button  id="nonProfitButton" color="light yellow" onClick={(e) => {e.preventDefault(); setIsNonProfit(!isNonProfit)}}  > Yes </Button>
                  <Button.Or />
                  <Button  id="nonProfitButton" color="primary" onClick={(e) => {e.preventDefault(); setIsNonProfit(!isNonProfit)}}  >No </Button>
                </Button.Group> */}
            </Grid.Column>
  </Grid>
  </Container>
    
      </div>
  )
}

export default Auth;