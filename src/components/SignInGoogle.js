import axios from 'axios'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import Toastify from "toastify-js"


export default function SignInGoogle(){
    
    const buttonDiv = useRef(null)

    async function handleCredentialResponse(response){
        let responsePayload = jose.decodeJwt(response.credential)
        console.log(responsePayload)

        axios.post (`http://localhost:4000/auth/signin`,{  
        mail : responsePayload.email,
        password : responsePayload.sub,
    })
    .then(function(response){
    // console.log(response.data.response.user)
    localStorage.setItem('user',JSON.stringify(response.data.response.user))
    Toastify({
        text:"Logged in succesfully! Press here to go to the home page",
        destination:"http://localhost:3000/"
    }).showToast()
    })
    .catch(function(error){
        console.log(error)
    })
    }
   


    useEffect(() =>{
        /*global google*/
        google.accounts.id.initialize({
            client_id: "936417647033-4hkfqvak0fcldudgubnrif7bgj9p6e74.apps.googleusercontent.com",
            callback: handleCredentialResponse,
            context: 'signin'
          });
          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text:"signin_with" }  // customization attributes
          );
    }, [])
    
    return(
        <div>
            <div ref={buttonDiv}></div>
        </div>
    )
}