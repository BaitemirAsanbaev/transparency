
import icon from '../../../../assets/images/send.svg'
const SendButton = ({sendMessage}) => {
    return (
        <div onClick={sendMessage}><img src={icon}/></div>
);
}
 
export default SendButton;