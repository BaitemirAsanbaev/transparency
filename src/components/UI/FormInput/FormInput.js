import classes from './FormInput.module.scss'

const FormInput = ({type, title}) => {
    return ( <div className={classes.FormInput}>
    <input className={classes.input} type={type} id={title}/>
    <label className={classes.label} htmlFor={title}>{title}</label>

    </div> );
}
 
export default FormInput;