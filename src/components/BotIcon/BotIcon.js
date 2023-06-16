import React, { useState, useEffect } from "react";
import botIcon from "../../assets/images/bot-icon.png";
import hide from "../../assets/images/hide-bot.png";
import link from "../../assets/images/bot-link.png";
import open from "../../assets/images/open.png";
import classes from "./BotIcon.module.scss";

const BotIcon = () => {
  const [opened, setOpened] = useState(true);
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the current scroll position
      const scrollPosition = window.scrollY || window.pageYOffset;

      // Calculate the 100vh value
      const viewportHeight = window.innerHeight - 500;

      const scrollThreshold = viewportHeight;
      // Change this value to adjust the scroll threshold

      // Check if the scroll position has reached the scroll threshold
      if (scrollPosition >= scrollThreshold) {
        // The window has been scrolled by 100vh or more
        setOnTop(false);
      } else {
        // The window has not been scrolled by 100vh yet
        setOnTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: onTop ? "translateX(500px)" : "",
      }}
      className={classes.BotIcon}
    >
      <img
        style={{
          right: `${opened ? "-500px" : "0px"}`,
        }}
        className={classes.open}
        onClick={() => setOpened(true)}
        src={open}
        alt="Open"
      />
      <div
        className={classes.iconBody}
        style={{
          right: `${opened ? "0" : "-500"}px`,
        }}
      >
        <img className={classes.link} src={link} alt="Link" />
        <img
          onClick={() => setOpened(false)}
          className={classes.hide}
          src={hide}
          alt="Hide"
        />
        <img className={classes.icon} src={botIcon} alt="Bot Icon" />
      </div>
    </div>
  );
};

export default BotIcon;
