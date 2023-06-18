import { useState, useRef } from "react";
import Button from "../../../../components/UI/Button/Button";
import classes from "./Requirements.module.scss";

const Requirements = () => {
  const [which, setWhich] = useState("");
  const scrollRef = useRef();

  const handleButtonClick = () => {
    setWhich("");
    scrollRef.current.scrollTo(0, 0);
  };

  return (
    <div className={classes.Requirements} ref={scrollRef}>
      <div style={{ backgroundColor: "#F1F6F7", padding: "20px" }}>
        Requirements
      </div>
      <div style={{ padding: "20px" }}>
        <div>
          <div onClick={() => setWhich("ORT")}>
            {which === "ORT" ? <b>ORT</b> : <span>ORT</span>}
            <input type="file" />
          </div>
          <div onClick={() => setWhich("form")}>
            {which === "form" ? <b>Form 086</b> : <span>Form 086</span>}
            <input type="file" />
          </div>
          <div onClick={() => setWhich("propiska")}>
            {which === "propiska" ? <b>Propiska</b> : <span>Propiska</span>}
            <input type="file" />
          </div>
        </div>
        <div>
          {which === "ORT" ? (
            <>
              <h2>Zachem ORT</h2>
              <p>
                Общереспубликанское тестирование сдавать обязательно? ОРТ является
                обязательным для поступления в вузы как на грантовые места, так и на
                все формы обучения на контрактной основе (очной, заочной и вечерней).
                Так что если вы собираетесь получить высшее образование, то необходимо
                сдать ОРТ
              </p>
            </>
          ) : which === "form" ? (
            <>
              <h2>Form 086</h2>
              <p>
                Информация о состоянии здоровья (пишется заключение каждого
                пройденного врача узкого профиля). Результаты исследований на рентгене
                или флюорографии. Результаты анализов (общий анализ крови и мочи).
                Сделанные прививки (плановые прививки, сделанные по возрасту).
              </p>
            </>
          ) : (
            <>
              <h2>Propiska</h2>
              <p>
                Пропи́ска — отметка о месте проживания в паспорте человека и записи в
                учётных документах государственных органов. Регистрация по месту
                постоянного проживания применялась для контроля перемещения иностранцев
                и внутренней миграции населения, в Российской империи, и получила
                развитие и широкое применение в СССР.
              </p>
            </>
          )}
          <Button action={handleButtonClick}>отправить заявку</Button>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
