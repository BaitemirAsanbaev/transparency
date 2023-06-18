import React, { useState } from "react";
import cl from "./styles/Profile.module.scss";
import human from "../assets/images/human.png";
import Application from "../modules/Header/components/ProfileComponents/Application/Application";
import ProfileData from "../modules/Header/components/ProfileComponents/ProfileData/ProfileData";

const Profile = () => {
  const [input, setInput] = useState(true);
  

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <main className={cl.Profile}>
      {input ? (
        <section className={cl.profileInfo}>
          <div className={cl.avatar}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvt4yWLvj5ofcvt-mRi1qgfVt7X8YHDa2KV1qnaGRqtA&s"
              alt=""
            />
            <button className={cl.btn} onClick={(e) => setInput(false)}>
              изменить
            </button>
          </div>
          <div className={cl.info}>
            <h2>Личные данные</h2>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={human} alt="human icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <h3>Курбанов Амит сексигерл</h3>
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={human} alt="human icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <h3>Курбанов Амит сексигерл</h3>
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={human} alt="human icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <h3>Курбанов Амит сексигерл</h3>
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={human} alt="human icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <h3>Курбанов Амит сексигерл</h3>
                </div>
              </div>
            </div>
            <div className={cl.cont}>
              <div className={cl.inputInfo}>
                <img src={human} alt="human icon" />
                <div className={cl.inner}>
                  <h6>Фамилия Имя</h6>
                  <h3>Курбанов Амит сексигерл</h3>
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
                <img src={human} alt="human icon" />
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
                <img src={human} alt="human icon" />
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
                <img src={human} alt="human icon" />
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
                <img src={human} alt="human icon" />
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
                <img src={human} alt="human icon" />
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
