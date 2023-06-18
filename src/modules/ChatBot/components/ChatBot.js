import Chat from "./Chat/Chat";
import ChatInput from "./ChatInput/ChatInput";
import Message from "./Message/Message";
import SendButton from "./SendButton/SendButton";
import { data } from "./data";
import { useEffect, useState } from "react";

export const ChatBot = ({ extended, setExtended }) => {
  const [prompts, setPrompts] = useState([]);
    const [message, setMessage] = useState({})
    const [messages, setMessages] = useState([]);
  useEffect(() => {
    setPrompts(data);
  });
  
  function sendMessage(){
    const newMessages = [...messages]
    newMessages.push(message)
    let response = ''
    prompts.forEach((item)=>{
        if( item.prompt.toLowerCase().includes(message.value.toLowerCase())){
            response = item.response
        }
    })
    const newResponse = {
        value: response,
        author:"bot"
    }
    newMessages.push(newResponse)
    setMessages(newMessages)

  }
  return (
    <div>
      {!extended ? <h1>Что вас интересует?</h1> : <Chat messages={messages}/>}
      
      <ChatInput sendMessage={sendMessage} setMessage={setMessage} setExtended={setExtended}/>
    </div>
  );
};
