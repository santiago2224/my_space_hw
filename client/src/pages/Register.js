import React, {useContext, useState} from 'react'
import { Form, Header } from 'semantic-ui-react'
import { AuthContext } from '../providers/AuthProvider'
import {useHistory} from 'react-router-dom'

const Register = (props)=> {
    const {handleRegister} = useContext(AuthContext)
    const [firstName, setFirstName] = useState('Santiago')
    const [lastName, setLastName] = useState('Ventura')
    const [email, setEmail] = useState('santiago@test.com')
    const [password, setPassword] = useState('12345678')
    const [passwordConfirmation, setPasswordConfirmation] = useState('12345678')
    const history = useHistory()

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log({email, password, passwordConfirmation})
        handleRegister({firstName,lastName,email, password, passwordConfirmation}, history)
    } 
    return (

        <>
        <Header>Register</Header>
        <Form onSubmit={handleSubmit}>
        <Form.Input 
            autoFocus
            required
            label='Name'
            value={firstName}
            onChange={(e)=> setFirstName(e.target.value)}
          />
           <Form.Input 
            autoFocus
            required
            label='Last'
            value={lastName}
            onChange={(e)=> setLastName(e.target.value)}
          />
          <Form.Input 
            autoFocus
            required
            label='email'
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
         <Form.Input 
            required
            label='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        <Form.Input 
            required
            label='confirm password'
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
          />
          <Form.Button>register</Form.Button>
        </Form>
        </>
    )
}

export default Register