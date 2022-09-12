import * as jose from 'jose'
import { useEffect, useRef } from 'react'

export default function SignUpGoogle(){
    
   const buttonDiv = useRef(null)

   async function handleCredentialResponse(response){
      let responsePayload = jose.decodeJwt(response.credential)
      console.log(responsePayload)
   }
   
//    let data = {
//     name:responsePayload.name,
//     photo: responsePayload.picture,
//     mail: responsePayload.email,
//     password: responsePayload.sub,
//     country,
//     from,
//      role
//    }
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