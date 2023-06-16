import bot from '../../../../assets/images/bot.png';
import classes from './Bot.module.scss'
const Bot = () => {
    return ( <div className={classes.Bot}>
        <div>
        <img src={bot}/>
        </div>
        <div>
            <h1>Что вас интересует?</h1>
            <input placeholder='Введите запрос' type='text'/>
            <div className={classes.prompts}>
                <div>Запись к врачу</div>
                <div>Загранпаспорт</div>
                <div>Справка 086</div>
            </div>
        </div>
    </div> );
}
 
export default Bot;