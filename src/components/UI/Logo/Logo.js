import logo from '../../../assets/images/logo.png';
import classes from './Logo.module.scss';

const Logo = ({ size = 200 }) => {
  return (<div className={classes.Logo}>
    <img width={size} src={logo} alt='logo' />
  </div>

    );
}

export default Logo;