import '../styles/Socket.css'
import { useState } from "react"
import io from "socket.io-client"
import Chat from "./SocketChat"
// const socket = io.connect("https://my-tynerary-front-dreamjuan.herokuapp.com")
const socket = io.connect()


export default function SocketForm (){
    const [username,setUsername] = useState("")
    const [room,setRoom] = useState("")
    const [showChat,setShowChat] = useState(false)

    const joinRoom = ()=>{
        if(username !== "" && room !== ""){
            socket.emit("join_room", room)
            setShowChat(true)
        }
    }
    return (
        <div >
            {!showChat ? (
        <div className="socketForm-window">
            <h3 className="socketForm-title">Join a chat</h3>
            <div className='socketForm-inputs'>
                <input placeholder="Username"  type="text" onChange={e =>{setUsername(e.target.value)}}/>
                <input placeholder="Room ID..."  type="text" onChange={e =>{setRoom(e.target.value)}}/>
            </div>
            <button className="socketForm-button nc-boton" onClick={joinRoom}>Join</button>
        </div>
            ):(
            <Chat socket={socket} username={username} room={room} />
            )}
        </div>
    )
}


// export default SocketForm