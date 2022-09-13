// import '../styles/Socket.css'
// import { useState } from "react"
// import io from "socket.io-client"
// import Chat from "./SocketChat"
// const socket = io.connect("http://localhost:3000")

// function SocketForm (){
//     const [username,setUsername] = useState("")
//     const [room,setRoom] = useState("")

//     const joinRoom = ()=>{
//         if(username !== "" && room !== ""){
//             socket.emit("join_room", room)
//         }
//     }
//     return (
//         <div className="socketForm-window">
//             <h3 className="socketForm-title">Join a chat</h3>
//             <div className='socketForm-inputs'>
//                 <input placeholder="Username"  type="text" onChange={e =>{setUsername(e.target.value)}}/>
//                 <input placeholder="Room ID..."  type="text" onChange={e =>{setRoom(e.target.value)}}/>
//             </div>
//             <button className="socketForm-button" onClick={joinRoom}>Join a Room</button>
//             <Chat socket={socket} username={username} room={room} />
//         </div>

//     )
// }

// export default SocketForm