import classes from './Button.module.scss'

const Button = ({ children, action,  color }) => {
  return <button style={{backgroundColor: color}} className={classes.Button} onClick={action}>{children}</button>;
};

export default Button;
