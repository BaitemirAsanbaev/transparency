import React from "react";
import cl from './ProfileData.module.scss'


const ProfileData = () => {
  return (
    <>
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
    </>
  );
};

export default ProfileData;
