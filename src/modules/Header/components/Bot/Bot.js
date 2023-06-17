import { useState } from 'react';
import bot from '../../../../assets/images/bot.png';
import close from '../../../../assets/images/close.svg'
import classes from './Bot.module.scss'
import { ChatBot } from '../../../ChatBot';
const Bot = ({extended, setExtended}) => {
    return ( <div
    className={ extended? [classes.Bot, classes.extended].join(" ") :classes.Bot}>
        {/* {extended? <img onClick={()=>setExtended(false)} className={classes.close} src={close}/>:null}
        <div>
        <img  src={bot}/>
        </div> */}
        {/* <ChatBot extended={extended} setExtended={setExtended}/> */}
    </div> );
}
 
export default Bot;