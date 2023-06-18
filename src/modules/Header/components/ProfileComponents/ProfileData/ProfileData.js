import React, { useState } from "react";
import cl from "./ProfileData.module.scss";

const ProfileData = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedItemInfo, setSelectedItemInfo] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedItemInfo("");
  };

  const handleItemClick = (itemInfo) => {
    setSelectedItemInfo(itemInfo);
  };

  return (
    <>
      <section className={cl.checkBigCont}>
        <div className={cl.checkCont}>
          <h3>Необходимые данные</h3>
          <article>
            <input
              type="radio"
              name="school"
              id="school1"
              onChange={handleOptionChange}
              value="Детский сад"
            />
            <label htmlFor="school1">Детский сад</label>
          </article>
          <br />
          <article>
            <input
              type="radio"
              name="school"
              id="school2"
              onChange={handleOptionChange}
              value="Школа"
            />
            <label htmlFor="school2">Школа</label>
          </article>
          <br />
          <article>
            <input
              type="radio"
              name="school"
              id="school3"
              onChange={handleOptionChange}
              value="ВУЗ"
            />
            <label htmlFor="school3">ОРТ</label>
          </article>
        </div>
        <div className={cl.kq}>
          <div className={cl.list}>
            {selectedOption === "Детский сад" && (
              <button className={cl.btns} style={{ display: "flex" }}>
                <h3
                  onClick={() => handleItemClick("Информация о детском саде")}
                >
                  ORT
                </h3>
                <div className={cl.download}>
                  <input
                    className={cl.inputs}
                    type="file"
                    accept="image/png"
                    onInput={(e) => console.log(e.target.value)}
                  />
                  <button>Загрузка</button>
                </div>
              </button>
            )}
            {selectedOption === "Школа" && (
              <button className={cl.btns} style={{ display: "flex" }}>
                <h3 onClick={() => handleItemClick("Информация о школе")}>
                  ORT
                </h3>
                <div className={cl.download}>
                  <input
                    className={cl.inputs}
                    type="file"
                    accept="image/png"
                    onInput={(e) => console.log(e.target.value)}
                  />
                  <button>Загрузка</button>
                </div>
              </button>
            )}
            {selectedOption === "ВУЗ" && (
              <button className={cl.btns} style={{ display: "flex" }}>
                <h3 onClick={() => handleItemClick("Информация об ОРТ")}>
                  ОРТ
                </h3>
                <div className={cl.download}>
                  <input
                    className={cl.inputs}
                    type="file"
                    accept="image/png"
                    onInput={(e) => console.log(e.target.value)}
                  />
                  <button>Загрузка</button>
                </div>
              </button>
            )}
          </div>
          <div className={cl.itemInfo}>{selectedItemInfo}</div>
        </div>
      </section>
    </>
  );
};

export default ProfileData;
