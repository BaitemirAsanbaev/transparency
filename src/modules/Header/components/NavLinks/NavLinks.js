import { NavLink } from 'react-router-dom'
import burger from '../../../../assets/images/burger.svg'
import classes from './NavLinks.module.scss'

const NavLinks = ({ pages, drawer=false, open, close }) => {
  return (<ul className={classes.NavLinks}>
    {pages ?
      <>
        <li className={`${classes.pagesLink} ${drawer ? classes.drawerLink : null}`}><NavLink onClick={close} to='/'>Главная</NavLink></li>
        <li className={`${classes.pagesLink} ${drawer ? classes.drawerLink : null}`}><NavLink onClick={close} to='/about'>О нас</NavLink></li>
        <li className={`${classes.pagesLink} ${drawer ? classes.drawerLink : null}`}><NavLink onClick={close} to='/resourses'>Ресурсы</NavLink></li>
        <li className={`${classes.pagesLink} ${drawer ? classes.drawerLink : null}`}><NavLink onClick={close} to='/help'>Помощь</NavLink></li>
      </> :
      <>
        <li className={classes.login}><NavLink to='/login'>Войти</NavLink></li>
        <li className={classes.register}><NavLink to='/register'>Регистрация</NavLink></li>
        <li className={classes.burger} onClick={open}><img src={burger} alt='burger' /></li>
        </>
    }
  </ul>);
}

export default NavLinks;