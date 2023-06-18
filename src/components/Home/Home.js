import React, { useState } from 'react';
import cls from './Home.module.scss';
import kinder from '../../img/Frame.png';
import school from '../../img/Biometrics_icon.svg.png';
import uni from '../../img/graduation-cap.png';
import robot from '../../img/robot.png';
import robotIcon1 from '../../img/Vector.png';
import robotIcon2 from '../../img/second.png';
import robotIcon3 from '../../img/third.png';
import arrow from '../../img/arrow-right.png';
import send from '../../img/send.png';

function Home() {
  const [option, setOption] = useState('');

  const kinderOption = () => {
    setOption('garden');
  };
  const schoolOption = () => {
    setOption('school');
  };
  const universityOption = () => {
    setOption('univer');
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
          className={option == 'garden' ? cls.KindergartenActive : cls.Kindergarten}
          onClick={kinderOption}>
          <h1>Kindergarden</h1>
          <img src={kinder} alt="kinder" className={cls.kinderImg} />
        </div>
        <div className={option == 'school' ? cls.SchoolActive : cls.School} onClick={schoolOption}>
          <h1>School</h1>
          <img src={school} alt="school" className={cls.schoolImg} />
        </div>
        <div
          className={option == 'univer' ? cls.UniversityActive : cls.University}
          onClick={universityOption}>
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
              <input type="radio" id="chas" />
              <label htmlFor="chas">Частные</label>
            </div>
            <div>
              <input type="radio" id="gos" />
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
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">
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
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">
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
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">
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
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
          </a>
          <a href="#" className={cls.card}>
            <img
              src="https://uni-blog.s3.amazonaws.com/1/0cb73912-b5bf-405a-aaeb-4cbfb1221bf5/team212021-09-06T17-13-06-628103.jpg"
              alt="photo"
              className={cls.cardImg}
            />
            <div className={cls.cardBottom}>
              <h2>Kindergarten name</h2>
              <div className={cls.rate}>
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
