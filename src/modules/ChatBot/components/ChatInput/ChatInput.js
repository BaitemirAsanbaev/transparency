import SendButton from "../SendButton/SendButton";
import classes from './ChatInput.module.scss'
const ChatInput = ({sendMessage, setMessage, setExtended}) => {
    return ( <div className={classes.ChatInput}>
        <input
        onSelect={() => setExtended(true)}
        onInput={(e) => setMessage({
            value:e.target.value,
            author:'user'
        })}
        placeholder="Введите запрос"
        type="text"
      />
      <SendButton sendMessage={sendMessage}/>
    </div> );
}
 
export default ChatInput;