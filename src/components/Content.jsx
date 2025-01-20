import { React, useState } from "react";
import "./Content.css";
import { AiOutlineHome,AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import {BsPersonWorkspace} from "react-icons/bs"

const Content = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
      <div className="nav">        
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#test"
          onClick={() => setActiveNav("#test")}
          className={activeNav === "#test" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#work"
          onClick={() => setActiveNav("#work")}
          className={activeNav === "#work" ? "active" : ""}
        >
          <AiOutlineFundProjectionScreen />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BsPersonWorkspace />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <MdMessage />
        </a>
      </div>
    );
  };

export default Content