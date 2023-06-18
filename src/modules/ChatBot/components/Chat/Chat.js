import Message from "../Message/Message";
import classes from './Chat.module.scss'
const Chat = ({messages}) => {
    return ( <div className={classes.Chat}>
        {messages.map((item, id)=>{
            return <Message item={item} key={id}/>
        })}
    </div> );
}
 
export default Chat;