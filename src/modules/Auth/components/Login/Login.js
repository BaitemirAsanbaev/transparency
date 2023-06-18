import classes from "./Login.module.scss";
import Modal from "../../../../components/UI/Modal/Modal";
import Button from "../../../../components/UI/Button/Button";
import FormInput from "../../../../components/UI/FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { signin } from "../../../../store/AuthSlice";
import { useNavigate } from "react-router";

const Login = ({ opened, close, change }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  function login() {
    dispatch(signin({ password, username }));
    navigate('/', {replace:true})
    close()
  }
  return (
    <>
      <Modal isOpened={opened}>
        <h1>Войти</h1>
        <form className={classes.Login}> 
          <FormInput type={'text'} title={'Username'} set={setUsername}/>
          <FormInput type={'password'} title={"Password"} set={setPassword}/>
          <Button action={login}>Log In</Button>
          <Button color='black' action={close}>Close</Button>
          <span className={classes.RegisterLink} onClick={change}>No account? Register</span>
        </form>
      </Modal>
    </>
  );
};

export default Login;
