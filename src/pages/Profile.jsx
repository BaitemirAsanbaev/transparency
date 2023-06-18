import React, { useEffect, useState } from "react";
import cl from "./styles/Profile.module.scss";
import icon1 from "../assets/images/i1.svg";
import icon2 from "../assets/images/i2.svg";
import icon3 from "../assets/images/i3.svg";
import icon4 from "../assets/images/i4.svg";
import icon5 from "../assets/images/i5.svg";


import Application from "../modules/Header/components/ProfileComponents/Application/Application";
import ProfileData from "../modules/Header/components/ProfileComponents/ProfileData/ProfileData";
import axios from "axios";

const Profile = () => {
  const [input, setInput] = useState(true);
  

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [avatar, setAvatar] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  const fetchProfile = async () => {
    const token = localStorage.getItem("jwtToken");
    try {
      const response = await axios.get("http://192.168.134.64:8000/profile/", {
        headers: {
          Authorization: `Token ` + token,
        },
      });
      setAvatar(response.data.avatar);
    } catch (error) {
      console.error(error);
    }
  };useEffect(()=>{
    fetchProfile()
  }, [newAvatar, avatar])

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Data = reader.result.split(",")[1];
      const token = localStorage.getItem("jwtToken");
      try {
        const response = await axios.post(
          "http://192.168.134.64:8000/profile/update/",
          {
            avatar: base64Data,
            phone_number: "09998899",
          },
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          },
        );
        setAvatar(response.data.avatar);
      } catch (error) {
        console.error(error);
      }
    };
  };

  return (
    <main className={cl.Profile}>
      {input ? (
        <section className={cl.profileInfo}>
          <div className={cl.avatar}>
            <img src={`data:image/jpeg;base64,${avatar}`} alt="" />
            <input type="file" onChange={(e) => handleImageChange(e)} />
            <button
              className={cl.btn}
              onClick={(e) => {
                setInput(false);
              }}
            >
              изменить
            </button>
          </div>
          <div className={cl.info}>
            <h2>Личные данные</h2>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon1} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <h3>Курбанов Амит </h3>
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon2} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Дата рождения</h6>
                  <h3>14.11.01 </h3>
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon3} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>язык</h6>
                  <h3>русский </h3>
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon4} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Почта</h6>
                  <h3>amit@gmail.com </h3>
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon5} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Phone number</h6>
                  <h3>+996500023120 </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className={cl.profileInfo}>
          <div className={cl.avatar}>
            <input
              className={cl.inputs}
              type="file"
              accept="image/png"
              onInput={(e) => console.log(e.target.value)}
            />
            <button
              type="submit"
              className={cl.btn}
              onClick={(e) => setInput(false)}
            >
              готова
            </button>
          </div>
          <div className={cl.info}>
            <h2>Личные данные</h2>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon1} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <input
                    className={cl.inputs}
                    type="text"
                    placeholder="tester tester"
                    value={name}
                    onInput={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon1} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <input
                    className={cl.inputs}
                    type="text"
                    placeholder="tester tester"
                    value={age}
                    onInput={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon1} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <input
                    className={cl.inputs}
                    type="text"
                    placeholder="tester tester"
                    value={language}
                    onInput={(e) => setLanguage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon1} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <input
                    className={cl.inputs}
                    type="text"
                    placeholder="tester tester"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={icon1} alt="icon1 icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <input
                    className={cl.inputs}
                    type="text"
                    placeholder="tester tester"
                    value={phone}
                    onInput={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Application/>

      <ProfileData/>
    </main>
  );
};

export default Profile;
