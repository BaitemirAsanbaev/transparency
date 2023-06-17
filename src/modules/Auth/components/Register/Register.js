import classes from './Register.module.scss'
import Button from "../../../../components/UI/Button/Button";
import FormInput from "../../../../components/UI/FormInput/FormInput";
import Modal from "../../../../components/UI/Modal/Modal";

const Register = ({opened, close, change}) => {
    return (<>
    <Modal isOpened={opened}>
        <h1>Register</h1>
        <form className=
        {classes.Register}>
            <FormInput type="text" title="First Name"/>
            <FormInput type="text" title="Last Name"/>
            <FormInput type="email" title="Email"/>
            <FormInput type="tel" title="Phone"/>
            <FormInput type="password" title="Password"/>
            <Button action={()=>console.log("login")}>Login</Button>
            <Button color='black' action={close}>Close</Button>
            <span className={classes.LoginLink} onClick={change}>have account? login</span>
        </form>
    </Modal>
    </>);
}
 
export default Register;