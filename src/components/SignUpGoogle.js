import axios from 'axios'
import * as jose from 'jose'
import { useEffect, useRef } from 'react'
import Toastify from "toastify-js"


export default function SignUpGoogle(){
    
   const buttonDiv = useRef(null)

   async function handleCredentialResponse(response){
      let responsePayload = jose.decodeJwt(response.credential)
      console.log(responsePayload)

      axios.post (`https://my-tinerary-dreamjuan-back.herokuapp.com/auth/signup`,{  
    name : responsePayload.name,
    mail : responsePayload.email,
    password : responsePayload.sub,
    photo : responsePayload.picture,
    country: "undefined",
    role: "user",
    from: "google"
})
.then(function(response){
    console.log(response)
    Toastify({
        text:"Registration succesfully completed! Press here to go to the home page",
        destination:"https://my-tinerary-dreamjuan-back.herokuapp.com/"
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
            context: 'signup'
          });
          google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "outline", size: "medium", text:"signup_with" }  // customization attributes
          );
    }, [])
    
    return(
        <div>
            <div ref={buttonDiv}></div>
        </div>
    )
}