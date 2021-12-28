import { GrHomeRounded } from "react-icons/gr";
import { IoMdCheckboxOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { VscCalendar } from "react-icons/vsc";
import { FaRegFolderOpen } from "react-icons/fa";
import { HiOutlineStar } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import "./assets/css/Navbar.css";
import tribbo from "./assets/images/tribbo.png";
import { useState } from "react";

function Navbar() {
  const [borderHome, setBorderHome] = useState(false);
  const [borderCheck, setBorderCheck] = useState(false);
  const [borderMail, setBorderMail] = useState(false);
  const [borderPerson, setBorderPerson] = useState(false);
  const [borderCalendar, setBorderCalendar] = useState(false);
  const [borderFolder, setBorderFolder] = useState(false);
  const [borderStar, setBorderStar] = useState(false);
  const [borderSettings, setBorderSettings] = useState(false);

  const handleBorderHome = (e) => {
    if (borderHome === false) {
      setBorderHome(`border`);
      setBorderCheck(false);
      setBorderMail(false);
      setBorderPerson(false);
      setBorderFolder(false);
      setBorderStar(false);
      setBorderSettings(false);
    }
  };

  const handleBorderCheck = (e) => {
    if (borderCheck === false) {
      setBorderCheck(`border`);
      setBorderHome(false);
      setBorderMail(false);
      setBorderPerson(false);
      setBorderCalendar(false);
      setBorderFolder(false);
      setBorderStar(false);
      setBorderSettings(false);
    }
  };

  const handleBorderMail = (e) => {
    if (borderMail === false) {
      setBorderMail(`border`);
      setBorderHome(false);
      setBorderCheck(false);
      setBorderPerson(false);
      setBorderCalendar(false);
      setBorderFolder(false);
      setBorderStar(false);
      setBorderSettings(false);
    }
  };

  const handleBorderPerson = (e) => {
    if (borderPerson === false) {
      setBorderPerson(`border`);
      setBorderHome(false);
      setBorderCheck(false);
      setBorderMail(false);
      setBorderCalendar(false);
      setBorderFolder(false);
      setBorderStar(false);
    }
  };

  const handleBorderCalendar = (e) => {
    if (borderCalendar === false) {
      setBorderCalendar(`border`);
      setBorderHome(false);
      setBorderCheck(false);
      setBorderMail(false);
      setBorderPerson(false);
      setBorderFolder(false);
      setBorderStar(false);
      setBorderSettings(false);
    }
  };

  const handleBorderFolder = (e) => {
    if (borderFolder === false) {
      setBorderFolder(`border`);
      setBorderHome(false);
      setBorderCheck(false);
      setBorderMail(false);
      setBorderPerson(false);
      setBorderCalendar(false);
      setBorderStar(false);
      setBorderSettings(false);
    }
  };

  const handleBorderStar = (e) => {
    if (borderStar === false) {
      setBorderStar(`border`);
      setBorderHome(false);
      setBorderCheck(false);
      setBorderMail(false);
      setBorderPerson(false);
      setBorderCalendar(false);
      setBorderFolder(false);
      setBorderSettings(false);
    }
  };

  const handleBorderSettings = (e) => {
    if (borderSettings === false) {
      setBorderSettings(`border`);
      setBorderHome(false);
      setBorderCheck(false);
      setBorderMail(false);
      setBorderPerson(false);
      setBorderCalendar(false);
      setBorderFolder(false);
      setBorderStar(false);
    }
  };

  return (
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <img className='tribboo-logo' src={tribbo} alt='tribboo-logo'></img>
      </div>
      <div className='navbar-icons-middle'>
        <button className='navbar-button' onClick={handleBorderHome}>
          <GrHomeRounded size='25' className={borderHome} />
        </button>
        <button className='navbar-button' onClick={handleBorderCheck}>
          <IoMdCheckboxOutline size='25' className={borderCheck} />
        </button>
        <button className='navbar-button' onClick={handleBorderMail}>
          <HiOutlineMail size='25' className={borderMail} />
        </button>
        <button className='navbar-button' onClick={handleBorderPerson}>
          <BsPerson size='25' className={borderPerson} />
        </button>
        <button className='navbar-button' onClick={handleBorderCalendar}>
          <VscCalendar size='25' className={borderCalendar} />
        </button>
        <button className='navbar-button' onClick={handleBorderFolder}>
          <FaRegFolderOpen size='25' className={borderFolder} />
        </button>
      </div>
      <div className='navbar-icons-middle2'>
        <button className='navbar-button' onClick={handleBorderStar}>
          <HiOutlineStar size='25' className={borderStar} />
        </button>
      </div>
      <div className='navbar-icons-down'>
        <button className='navbar-button' onClick={handleBorderSettings}>
          <FiSettings size='25' className={borderSettings} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
