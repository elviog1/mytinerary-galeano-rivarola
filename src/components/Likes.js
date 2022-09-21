import { useState } from "react"



function Likes (){

    const [like,setLike] = useState(false)

    const click=async ()=>{
        setLike(!like)
        console.log(like)

    }

    return (
        <div>
            <button onClick={click}>CORA</button>
        </div>
    )
}

export default Likes