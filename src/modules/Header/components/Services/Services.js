import { NavLink } from "react-router-dom";
import classes from './Services.module.scss'
import service from '../../../../assets/images/passport.png'
const Services = () => {
    return ( <ul className={classes.Services}>
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>          
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>
            <li><NavLink to='/'><img src={service}/><span>Получение паспорта</span></NavLink></li>
    </ul> );
}
 
export default Services;