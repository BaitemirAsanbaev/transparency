import classes from "./Register.module.scss";
import Button from "../../../../components/UI/Button/Button";
import FormInput from "../../../../components/UI/FormInput/FormInput";
import Modal from "../../../../components/UI/Modal/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../../store/AuthSlice";

const Register = ({ opened, close, change }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.status === "loading");
  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);
  const [redirect, setRedirect] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function register() {
    dispatch(signup({ username, password, email }));
  }
  if (token) {
    return null;
  }
  return (
    <>
      <Modal isOpened={opened}>
        <h1>Register</h1>
        <form className={classes.Register}>
          <FormInput type="text" title="Username" set={setUsername} />
          <FormInput type="email" title="Email" set={setEmail} />
          <FormInput type="password" title="Password" set={setPassword} />
          <Button action={(e) => {
            register()
            setRedirect(true)
          }}>Register</Button>
          <Button color="black" action={close}>
            Close
          </Button>
          <span className={classes.LoginLink} onClick={change}>
            have account? login
          </span>
        </form>
      </Modal>
    </>
  );
};

export default Register;
