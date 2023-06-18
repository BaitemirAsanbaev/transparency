import { useState } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";
import Button from "../UI/Button/Button";
import FormInput from "../UI/FormInput/FormInput";
import Modal from "../UI/Modal/Modal";
import axios from "axios";

const Report = ({ opened, setOpened }) => {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFormSubmit = async () => {
    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1]; // Extract the Base64 string

        try {
          await axios.post("http://192.168.52.64:8000/report/", {
            text,
            file: base64String,
          });
          console.log("File uploaded successfully");
        } catch (error) {
          console.error("Error uploading file:", error);
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };

  return (
    <>
      <Modal isOpened={opened}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" onInput={(e) => setText(e.target.value)} />
        <Button action={handleFormSubmit} color={"red"}>
          Report
        </Button>
      </Modal>
      <Backdrop isOpened={opened} close={() => setOpened(false)} />
    </>
  );
};

export default Report;
