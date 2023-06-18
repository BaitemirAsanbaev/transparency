
import Logo from '../../../../components/UI/Logo/Logo';
import NavLinks from '../NavLinks/NavLinks';
import classes from './Nav.module.scss'

const Nav = ({open, openModal, openReport}) => {
  return (<nav className={classes.Nav}>
      <Logo/>
      <NavLinks pages={true} openReport={openReport}/>
      <NavLinks pages={false} open={open}  openModal={openModal}/>
    </nav>
  )
}

export default Nav;