import botIcon from "../../assets/images/bot-icon.png";
import hide from "../../assets/images/hide-bot.png";
import link from "../../assets/images/bot-link.png";
import open from "../../assets/images/open.png";
import classes from "./BotIcon.module.scss";
import { useState } from "react";
const BotIcon = () => {
  const [opened, setOpened] = useState(true);
  const [onTop, setOnTop] = useState(true);
  window.addEventListener('scroll', function() {
    // Calculate the current scroll position
    var scrollPosition = window.scrollY || window.pageYOffset;
  
    // Calculate the 100vh value
    var viewportHeight = window.innerHeight -400;
  
    var scrollThreshold = viewportHeight; // Change this value to adjust the scroll threshold
  
    // Check if the scroll position has reached the scroll threshold
    if (scrollPosition >= scrollThreshold) {
      // The window has been scrolled by 100vh or more
      setOnTop(false)
    } else {
      // The window has not been scrolled by 100vh yet
      setOnTop(true)
    }
  });
  
  return (
    <div style={{
        transform: onTop?'translateX(500px)':''
    }} className={classes.BotIcon}>
      <img
        style={{
          right: `${opened ? "-500px" : "0px"}`,
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
