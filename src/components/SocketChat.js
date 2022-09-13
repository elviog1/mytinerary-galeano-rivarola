import React, { useEffect, useState } from "react";
import '../styles/Socket.css'
function Chat({socket,username,room}){

    const [currentMessage,setCurrentMessage] = useState("")
    const [messageList,setMessageList] = useState([])
    

    const sendMessage = async ()=>{
        if(currentMessage !== ""){
            const messageData = {
                room : room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() 
            }
            await socket.emit("send_message",messageData)
            setMessageList((list) =>[...list,messageData])
            setCurrentMessage("")
        }
    }

    useEffect(()=>{
        socket.on("receive_message",(data)=>{
           setMessageList((list) =>[...list,data])
        })
    },[socket])


    return (
        <div className="chat-window">
            <div className="chat-container">
                <div className="chat-header">
                    <p>Live chat</p>
                </div>
                <div className="chat-body">
                    {messageList.map((messageContent) => {
                        return (
                            <div className="message" id={username === messageContent.author ? "you" : "other"}>
                                <div>
                                    <div className="message-text">
                                        <p>{messageContent.message}</p>
                                    </div>
                                    <div className="message-info">
                                        <p className="message-time">{messageContent.time}</p>
                                        <p className="message-author">{messageContent.author}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="chat-footer">
                    <input className="chat-footer-text" type="text" onChange={e =>{setCurrentMessage(e.target.value)}} onKeyPress={e =>{ e.key === "Enter" && sendMessage()}} value={currentMessage}></input>
                    <button onClick={sendMessage}>SEND</button>
                </div>
            </div>
        </div>
    )
}

export default Chat