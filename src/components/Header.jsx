import "./assets/css/Header.css";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { HiOutlineStar } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import photoProfile from "./assets/images/foto-perfil.png";

function Header() {
  const [buttonClick1, setButtonClick1] = useState(false);
  const [buttonClick2, setButtonClick2] = useState(false);
  const [buttonClick3, setButtonClick3] = useState(false);
  const [buttonClickRight1, setButtonClickRight1] = useState(false);
  const [buttonClickRight2, setButtonClickRight2] = useState(false);
  const [buttonClickRight3, setButtonClickRight3] = useState(false);
  const [search, setSearch] = useState(``);
  let buttonHeader = `button-header`;
  let buttonHeaderRight = `buttonHeaderRight`;

  const handleButtonClick = (e) => {
    if (buttonClick1 === false) {
      setButtonClick1(`button-background-color`);
      setButtonClick2(false);
      setButtonClick3(false);
    }
  };
  const handleButtonClick2 = (e) => {
    if (buttonClick2 === false) {
      setButtonClick2(`button-background-color`);
      setButtonClick1(false);
      setButtonClick3(false);
    }
  };

  const handleButtonClick3 = (e) => {
    if (buttonClick3 === false) {
      setButtonClick3(`button-background-color`);
      setButtonClick1(false);
      setButtonClick2(false);
    }
  };

  const handleButtonClickRight = (e) => {
    if (buttonClickRight1 === false) {
      setButtonClickRight1(`button-background-color`);
      setButtonClickRight2(false);
      setButtonClickRight3(false);
    }
  };
  const handleButtonClickRight2 = (e) => {
    if (buttonClickRight2 === false) {
      setButtonClickRight2(`button-background-color`);
      setButtonClickRight1(false);
      setButtonClickRight3(false);
    }
  };

  const handleButtonClickRight3 = (e) => {
    if (buttonClickRight3 === false) {
      setButtonClickRight3(`button-background-color`);
      setButtonClickRight1(false);
      setButtonClickRight2(false);
    }
  };

  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <header className='header-container'>
      <div className='header-left'>
        <div className='header-left-up'>
          <div className='header-name-project'>
            <h2>Planning/Nombre del Proyecto</h2>
          </div>
          <div className='header-name-arrow'>
            <AiOutlineDown size='30' />
          </div>
          <div className='header-name-arrow'>
            <HiOutlineStar size='30' />
          </div>
        </div>
        <div className='header-left-down'>
          <button className={`${buttonClick1} ${buttonHeader}`} onClick={handleButtonClick}>
            Presupuestos
          </button>
          <button className={`${buttonClick2} ${buttonHeader}`} onClick={handleButtonClick2}>
            Planning
          </button>
          <button className={`${buttonClick3} ${buttonHeader}`} onClick={handleButtonClick3}>
            Certificaciones
          </button>
        </div>
      </div>
      <div className='header-right'>
        <div className='header-right-up'>
          <div className='header-right-icons'>
            <AiOutlineQuestionCircle size='30' />
          </div>
          <div className='header-right-icons'>
            <IoShareSocialOutline size='30' />
          </div>
          <div className='header-right-search'>
            {/* <form onSubmit={handleSignupSubmit}> */}
            <AiOutlineSearch className='header-right-icon-search' />
            <input
              className='input-search'
              type='text'
              name='search'
              placeholder='Buscar'
              value={search}
              onChange={handleSearch}
            />
            {/*  </form> */}
          </div>
          <div className='header-photo-perfil'>
            <img src={photoProfile} className='photo-profile' alt='photo-profile'></img>
          </div>
        </div>
        <div className='header-right-down'>
          <button
            className={`${buttonClickRight1} ${buttonHeaderRight}`}
            onClick={handleButtonClickRight}
          >
            Gantt
          </button>
          <button
            className={`${buttonClickRight2} ${buttonHeaderRight}`}
            onClick={handleButtonClickRight2}
          >
            Kamban
          </button>
          <button
            className={`${buttonClickRight3} ${buttonHeaderRight}`}
            onClick={handleButtonClickRight3}
          >
            Calendario
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
