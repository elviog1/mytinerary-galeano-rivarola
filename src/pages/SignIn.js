import axios from 'axios'
import * as jose from 'jose'
import { useRef, useState } from 'react'
import { bindActionCreators } from 'redux'
import SignUpGoogle from '../components/SignUpGoogle'
import { useCreateuserMutation } from '../features/usersApi'
import '../styles/SignIn.css'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import SignInGoogle from '../components/SignInGoogle'

export default function SignIn(){
    let [datar, setDatar] = useState({})
    let nameR = useRef(null)//la R es para aclarar q es el mail de register (para registrarse)
    let mailR = useRef(null)
    let passwordR = useRef(null) 
    let photoR = useRef(null)
    let countryR = useRef(null)

    let mailS = useRef(null)
    let passS = useRef(null)

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
            Toastify({
                text:"Registration succesfully completed! Press here to go to the home page",
                destination:"http://localhost:3000/"
            }).showToast()
            
        })
        .catch(function(error){
            console.log(error)
            if (error.response.data.message === "name to short") {
                Toastify({
                    text:"Your name is too short, please try again(minimum 4 characters)"
                }).showToast()
            } else if (error.response.data.message === "name to long") {
                Toastify({
                    text:"Your name is too long, please try again(maximum 15 characters)"
                }).showToast()
            } else if (error.response.data.message === "invalid URL") {
                Toastify({
                    text:"Please insert a valid image URL"
                }).showToast()
            } else if (error.response.data.message === "mail to short") {
                Toastify({
                    text:"Please insert a valid Email"
                }).showToast()
            } else if (error.response.data.message === "password to short") {
                Toastify({
                    text:"Your password is too short, please try again(minimum 6 characters)"
                }).showToast()
            } else if (error.response.data.message === "invalid country") {
                Toastify({
                    text:"Please insert a country"
                }).showToast()
            } else{
                Toastify({
                    text:"Invalid request please try again"
                }).showToast()
            }
        })
    }

    const AccionS = (e) =>{
        e.preventDefault()
        axios.post (`http://localhost:4000/auth/signin`,{  
          mail : mailS.current.value,
          password : passS.current.value,})
          .then(function(response){
            console.log(response)
            Toastify({
                text:"Logged in succesfully! Press here to go to the home page",
                destination:"http://localhost:3000/"
            }).showToast()
        })
        .catch(function(error){
            console.log(error)
            if (error.response.data.message === "mail to short") {
                Toastify({
                    text:"Please insert a valid Email"
                }).showToast()
            } else if (error.response.data.message === "password to short") {
                Toastify({
                    text:"Your password is too short, please try again(minimum 6 characters)"
                }).showToast()
        } else if (error.response.data.message === "Invalid credentials"){
            Toastify({
                text:"Mail or password incorrect, please try again"
            }).showToast()
        } else {
            Toastify({
                text:"Invalid request, please try again"
            })
        }
    })}

    return(
        <div className='signin-container'>
        <form className="signin-form">
        <h1>Sign In</h1>
        <label for='mail' className="signin-field">mail
                <input ref={mailS} required type="text" className="signin-input" id="mail" placeholder="Enter your mail" ></input>
            </label>
            <label for='password' className="signin-field">password
                <input ref={passS} required type="text" className="signin-input" id="password" placeholder="Enter your password" ></input>
            </label>
            <button id="send" type="submit" className="nc-boton" onClick={AccionS}>Sign In</button>
            <SignInGoogle />
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