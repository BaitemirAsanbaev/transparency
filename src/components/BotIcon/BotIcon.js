import botIcon from "../../assets/images/bot-icon.png";
import hide from "../../assets/images/hide-bot.png";
import link from "../../assets/images/bot-link.png";
import open from "../../assets/images/open.png";
import classes from "./BotIcon.module.scss";
import { useState } from "react";
const BotIcon = () => {
  const [opened, setOpened] = useState(true);
  return (
    <div className={classes.BotIcon}>
      <img
        style={{
          right: `${opened ? "-500px" : "500px"}`,
        }}
        className={classes.open}
        onClick={() => setOpened(true)}
        src={open}
      />
      <div
      className={classes.iconBody}
        style={{
          right: `${opened ? "0" : "-500"}px`,
        }}
      >
        <img className={classes.link} src={link} />
        <img
          onClick={() => setOpened(false)}
          className={classes.hide}
          src={hide}
        />
        <img className={classes.icon} src={botIcon} />
      </div>
    </div>
  );
};

export default BotIcon;
