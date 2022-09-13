import axios from 'axios'
import * as jose from 'jose'
import { useRef, useState } from 'react'
import { bindActionCreators } from 'redux'
import SignUpGoogle from '../components/SignUpGoogle'
import { useCreateuserMutation } from '../features/usersApi'
import '../styles/SignIn.css'



export default function SignIn(){
    let [datar, setDatar] = useState({})

    let nameR = useRef(null)//la R es para aclarar q es el mail de register (para registrarse)
    let mailR = useRef(null)
    let passwordR = useRef(null) 
    let photoR = useRef(null)
    let countryR = useRef(null)


    const AccionR =  async (e)=>{
        e.preventDefault()
        setDatar({
            name : nameR.current.value,
            mail : mailR.current.value,
            password : passwordR.current.value,
            photo : photoR.current.value,
            country: countryR.current.value,
            role: "user",
            from: "form"})
            console.log(datar)

        axios.post (`http://localhost:4000/auth/signup`,{  
          name : nameR.current.value,
        mail : mailR.current.value,
        password : passwordR.current.value,
        photo : photoR.current.value,
        country: countryR.current.value,
        role: "user",
        from: "form"})
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    return(
        <div className='signin-container'>
        <form className="signin-form">
        <h1>Sign Up</h1>
        <label for='mail' className="signin-field">mail
                <input required type="text" className="signin-input" id="mail" placeholder="Enter your mail" ></input>
            </label>
            <label for='password' className="signin-field">password
                <input required type="text" className="signin-input" id="password" placeholder="Enter your password" ></input>
            </label>
            <button id="send" type="submit" className="nc-boton">Sign Up</button>
        </form>
        <form className="signin-form">
        <h1>Register</h1>
            <label for='name' className="signin-field">name
                <input ref={nameR} required type="text" className="signin-input" id="name" placeholder="Enter your username" ></input>
            </label>
            <label for='mail' className="signin-field">mail
                <input ref={mailR} required type="text" className="signin-input" id="mail" placeholder="Enter your mail" ></input>
            </label>
            <label for='password' className="signin-field">password
                <input ref={passwordR} required type="text" className="signin-input" id="password" placeholder="Enter your password" ></input>
            </label>
            <label for='photo' className="signin-field">photo
                <input ref={photoR} required type="text" className="signin-input" id="photo" placeholder="Enter the url of your photo" ></input>
            </label>
            <label for='country' className="signin-field">country
                <input ref={countryR} required type="text" className="signin-input" id="country" placeholder="Enter your country" ></input>
            </label>
            <button id="send" type="submit" className="nc-boton" onClick={AccionR}>Register</button>
            <SignUpGoogle/> 
        </form>
        </div>
    )
}