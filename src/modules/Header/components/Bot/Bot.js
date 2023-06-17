import { useState } from 'react';
import bot from '../../../../assets/images/bot.png';
import close from '../../../../assets/images/close.svg'
import classes from './Bot.module.scss'
const Bot = ({extended, setExtended}) => {
    return ( <div
    className={ extended? [classes.Bot, classes.extended].join(" ") :classes.Bot}>
        {extended? <img onClick={()=>setExtended(false)} className={classes.close} src={close}/>:null}
        <div>
        <img  src={bot}/>
        </div>
        <div>
            {!extended? <h1>Что вас интересует?</h1>:null}
            {extended?<div id='chat'></div>:null}
            <input onSelect={()=>setExtended(true)} placeholder='Введите запрос' type='text'/>
            {!extended? <div className={classes.prompts}>
                <div>Запись к врачу</div>
                <div>Загранпаспорт</div>
                <div>Справка 086</div>
            </div>:null}
        </div>
    </div> );
}
 
export default Bot;