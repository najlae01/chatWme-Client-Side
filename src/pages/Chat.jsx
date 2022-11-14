import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const Chat = () => {

    const [chats, seChats] = useState([])

    const fetchChats = async () => {
        const {data} = await axios.get("/api/chats")
        seChats(data);
    }

    useEffect(()=>{
        fetchChats();
    }, [])
  
  return (
    <div>
        {chats.map((chat)=>(
        <div key={chat._id}>{chat.chatName}</div>
    ))}
    </div>
  )
}

export default Chat