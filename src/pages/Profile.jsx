import React, { useState } from "react";
import cl from "./styles/Profile.module.scss";
import human from "../assets/images/human.png";

const Profile = () => {
  const [input, setInput] = useState(true);
  const [status, setStatus] = useState("rejeckted");

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
      <section className={cl.application}>
        <h2>Ваши Заявки</h2>
        <aside className={cl.applicationCont}>
          <div className={cl.title}>
            <h3>Учреждения</h3>
            <h3>Дата Заявки</h3>
            <h3>Статус Заявок</h3>
          </div>
          <div className={cl.content}>
            <span>
              <img src={human} alt="" />
              <h5>Первый уник</h5>
            </span>
            <span>
              <p>04 Dec 2019</p>
            </span>
            {status === "approved" ? (
              <button>Принято</button>
            ) : status === "rejeckted" ? (
              <button style={{ color: "red", borderColor: "red" }}>
                Отклонено
              </button>
            ) : status === "pending" ? (
              <button
                style={{
                  color: "#FFAB00",
                  border: "1px solid  ",
                  borderColor: "#FFAB00",
                }}
              >
                В ожидании
              </button>
            ) : (
              <button>Неизвестный статус</button>
            )}
          </div>
          <div className={cl.content}>
            <span>
              <img src={human} alt="" />
              <h5>Первый уник</h5>
            </span>
            <span>
              <p>04 Dec 2019</p>
            </span>
            {status === "approved" ? (
              <button>Принято</button>
            ) : status === "rejeckted" ? (
              <button style={{ color: "red", borderColor: "red" }}>
                Отклонено
              </button>
            ) : status === "pending" ? (
              <button
                style={{
                  color: "#FFAB00",
                  border: "1px solid  ",
                  borderColor: "#FFAB00",
                }}
              >
                В ожидании
              </button>
            ) : (
              <button>Неизвестный статус</button>
            )}
          </div>
          <div className={cl.content}>
            <span>
              <img src={human} alt="" />
              <h5>Первый уник</h5>
            </span>
            <span>
              <p>04 Dec 2019</p>
            </span>
            {status === "approved" ? (
              <button>Принято</button>
            ) : status === "rejeckted" ? (
              <button style={{ color: "red", borderColor: "red" }}>
                Отклонено
              </button>
            ) : status === "pending" ? (
              <button
                style={{
                  color: "#FFAB00",
                  border: "1px solid  ",
                  borderColor: "#FFAB00",
                }}
              >
                В ожидании
              </button>
            ) : (
              <button>Неизвестный статус</button>
            )}
          </div>
          <div className={cl.content}>
            <span>
              <img src={human} alt="" />
              <h5>Первый уник</h5>
            </span>
            <span>
              <p>04 Dec 2019</p>
            </span>
            {status === "approved" ? (
              <button>Принято</button>
            ) : status === "rejeckted" ? (
              <button style={{ color: "red", borderColor: "red" }}>
                Отклонено
              </button>
            ) : status === "pending" ? (
              <button
                style={{
                  color: "#FFAB00",
                  border: "1px solid  ",
                  borderColor: "#FFAB00",
                }}
              >
                В ожидании
              </button>
            ) : (
              <button>Неизвестный статус</button>
            )}
          </div>
        </aside>
      </section>

      <section className={cl.checkBigCont}>
        <div className={cl.checkCont}>
          <h3>Необходимые данные</h3>
          <article>
            <input type="radio" name="school" id="school1" />
            <label htmlFor="school1">Детский сад</label>
          </article>
          <br />
          <article>
            <input type="radio" name="school" id="school2" />
            <label htmlFor="school2">Школа</label>
          </article>
          <br />
          <article>
            <div>
              <input type="radio" name="school" id="school3" />
              <label htmlFor="school3">ОРТ</label>
            </div>
            <div></div>
          </article>
        </div>
        <div className={cl.list}>
          <button className={cl.btns} style={{ display: "flex" }}>
            <h3>ORT</h3>
            <input
              className={cl.inputs}
              type="file"
              accept="image/png"
              onInput={(e) => console.log(e.target.value)}
            />
          </button>
          <button className={cl.btns} style={{ display: "flex" }}>
            <h3>ORT</h3>
            <input
              className={cl.inputs}
              type="file"
              accept="image/png"
              onInput={(e) => console.log(e.target.value)}
            />
          </button>
          <button className={cl.btns} style={{ display: "flex" }}>
            <h3>ORT</h3>
            <input
              className={cl.inputs}
              type="file"
              accept="image/png"
              onInput={(e) => console.log(e.target.value)}
            />
          </button>
          <button className={cl.btns} style={{ display: "flex" }}>
            <h3>ORT</h3>
            <input
              className={cl.inputs}
              type="file"
              accept="image/png"
              onInput={(e) => console.log(e.target.value)}
            />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Profile;
