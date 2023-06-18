import React, { useState } from "react";
import cls from "./styles/Home.module.scss";
import kinder from "../assets/img/Frame.png";
import school from "../assets/img/Biometrics_icon.png";
import uni from "../assets/img/graduation-cap.png";
import robot from "../assets/img/robot.png";
import robotIcon1 from "../assets/img/Vector.png";
import robotIcon2 from "../assets/img/second.png";
import robotIcon3 from "../assets/img/third.png";
import arrow from "../assets/img/arrow-right.png";
import send from "../assets/img/send.png";

const Home = () => {
  const [checkboxChecked, setCheckboxChecked] = useState({
    chas: false,
    gos: false,
  });
  const [option, setOption] = useState('');
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };
  const kinderOption = () => {
    setOption("garden");
  };
  const schoolOption = () => {
    setOption("school");
  };
  const universityOption = () => {
    setOption("univer");
  };
  return (
    <div className={cls.wrapper}>
      <div className={cls.botBox}>
        <img src={robot} alt="robot" className={cls.robot} />
        <div className={cls.robotNebenBox}>
          <div className={cls.roboBoxTop}>
            <a href="#" className={cls.boxOption}>
              <img src={robotIcon1} alt="robo" width="20px" height="35px" />
              <p>Стоимость записи</p>
              <img src={arrow} alt="robo" width="30px" height="30px" />
            </a>
            <a href="#" className={cls.boxOption}>
              <img src={robotIcon2} alt="robo" width="30px" height="25px" />
              <p>О системе</p>
              <img src={arrow} alt="robo" width="30px" height="30px" />
            </a>
            <a href="#" className={cls.boxOption}>
              <img src={robotIcon3} alt="robo" width="25px" height="30px" />
              <p>Документы для регистрации</p>
              <img src={arrow} alt="robo" width="30px" height="30px" />
            </a>
          </div>
          <form className={cls.roboForm}>
            <input
              type="text"
              name="robot"
              placeholder="Введите запрос..."
              className={cls.roboInp}
            />
            <button type="submit" className={cls.roboBtn}>
              <img src={send} alt="send" width="35px" height="35px" />
            </button>
          </form>
        </div>
      </div>
      <div className={cls.options}>
        <div
          className={
            option == "garden" ? cls.KindergartenActive : cls.Kindergarten
          }
          onClick={kinderOption}
        >
          <h1>Kindergarden</h1>
          <img src={kinder} alt="kinder" className={cls.kinderImg} />
        </div>
        <div
          className={option == "school" ? cls.SchoolActive : cls.School}
          onClick={schoolOption}
        >
          <h1>School</h1>
          <img src={school} alt="school" className={cls.schoolImg} />
        </div>
        <div
          className={option == "univer" ? cls.UniversityActive : cls.University}
          onClick={universityOption}
        >
          <h1>University</h1>
          <img src={uni} alt="univer" className={cls.uniImg} />
        </div>
      </div>
      <div className={cls.results}>
        <div className={cls.left}>
          <div className={cls.leftHead}>
            <p>Искать по категориям</p>
          </div>
          <div className={cls.leftContent}>
            <div>
              <input
                type="checkbox"
                id="chas"
                name="chas"
                checked={checkboxChecked.chas}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="chas">Частные</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="gos"
                name="gos"
                checked={checkboxChecked.gos}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="gos">Государственные</label>
            </div>
          </div>
        </div>
        <div className={cls.right}>
          <a href="#" className={cls.card}>
            <img
              src="https://images.adsttc.com/media/images/5e96/9a87/b357/6547/dd00/0617/large_jpg/00FI-_ECOKINDI_LAVA__HiroyukiOki_023.jpg?1586928246"
              alt="photo"
              className={cls.cardImg}
            />
            <div className={cls.cardBottom}>
              <h2>Kindergarten name</h2>
              <div className={cls.rate}>
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
          </a>
          <a href="#" className={cls.card}>
            <img
              src="https://www.designboom.com/twitterimages/uploads/2023/01/architektura-vetrnik-kindergarten-designboom-1800.jpg"
              alt="photo"
              className={cls.cardImg}
            />
            <div className={cls.cardBottom}>
              <h2>Kindergarten name</h2>
              <div className={cls.rate}>
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
          </a>
          <a href="#" className={cls.card}>
            <img
              src="https://images.adsttc.com/media/images/5e88/7aee/b357/6539/2100/00f4/large_jpg/01.jpg?1586002661"
              alt="photo"
              className={cls.cardImg}
            />
            <div className={cls.cardBottom}>
              <h2>Kindergarten name</h2>
              <div className={cls.rate}>
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
          </a>
          <a href="#" className={cls.card}>
            <img
              src="https://static.dezeen.com/uploads/2018/05/chuon-chuon-kim-kindergarten-kientruc-o-architecture-education-vietnam_dezeen_hero-2.jpg"
              alt="photo"
              className={cls.cardImg}
            />
            <div className={cls.cardBottom}>
              <h2>Kindergarten name</h2>
              <div className={cls.rate}>
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
