import classes from './Messages.module.scss'
const Message = ({item}) => {
    return ( <div className={ [classes.message, item.author ==='user'? classes.userMessage:classes.botMessage].join(' ')}>{item.value}</div> );
}
 
export default Message;