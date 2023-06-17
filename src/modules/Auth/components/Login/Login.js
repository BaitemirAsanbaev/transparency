import classes from "./Login.module.scss";
import Modal from "../../../../components/UI/Modal/Modal";
import Button from "../../../../components/UI/Button/Button";
import FormInput from "../../../../components/UI/FormInput/FormInput";

const Login = ({ opened, close, change }) => {
   
  return (
    <>
      <Modal isOpened={opened}>
        <h1>Войти</h1>
        <form className={classes.Login}>
          <FormInput type={'email'} title={'Email'}/>
          <FormInput type={'password'} title={"Password"}/>
          <Button>Log In</Button>
          <Button color='black' action={close}>Close</Button>

          <span className={classes.RegisterLink} onClick={change}>No account? Register</span>
        </form>
      </Modal>
    </>
  );
};

export default Login;
