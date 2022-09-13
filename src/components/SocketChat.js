import React, { useEffect, useState } from "react";
import '../styles/Socket.css'
function Chat({socket,username,room}){

    const [currentMessage,setCurrentMessage] = useState("")


    const sendMessage = async ()=>{
        if(currentMessage !== ""){
            const messageData = {
                room : room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() 
            }
            await socket.emit("send_message",messageData)
        }
    }

    useEffect(()=>{
        socket.on("receive_message",(data)=>{
            console.log(data)
        })
    },[socket])


    return (
        <div className="chat-window">
            <div className="chat-container">
                <div className="chat-header">
                    <p>Live chat</p>
                </div>
                <div className="chat-body"></div>
                <div className="chat-footer">
                    <input className="chat-footer-text" type="text" onChange={e =>{setCurrentMessage(e.target.value)}} ></input>
                    <button onClick={sendMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Chat