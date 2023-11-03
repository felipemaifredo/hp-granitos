import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './changeidiom.style.css';
//Assets
import BRIcon from '../../Assets/Icons/bra-icon.png';
import USIcon from '../../Assets/Icons/eua-icon.png';
import SPIcon from '../../Assets/Icons/spa-icon.png';

//Funcs Idioms
import { changeTextsHomeBR, changeTextsHomeUS, changeTextsHomeSP } from './TextsPages/TextsHome';

function ChangeIdiom() {
  const location = useLocation().pathname;
  const [isIdiom, setisIdiom] = useState( localStorage.getItem('isIdiom') );
  const [isBr, setIsBr] = useState(true);
  const [isUs, setIsUs] = useState(false);
  const [isSp, setIsSp] = useState(false);

  useEffect(() => {
    verifyIdiom(isIdiom);
  });

  const toggleIdiom = (idiomSelect) => {
    switchIdiom(idiomSelect)
  };

  const verifyIdiom = (isIdiom) => {
    if (isIdiom === 'isBr') {
      return
    }
    switchIdiom(isIdiom)
  };

  const switchIdiom = (IdiomToAnalize) => {
    switch (IdiomToAnalize) {
      case 'isBr':
          setIsBr(true);
          setIsUs(false);
          setIsSp(false);
          localStorage.setItem('isIdiom', isIdiom);
          setisIdiom(isIdiom);
          changeTextsBR();
        break;
      case 'isUs':
          setIsUs(true);
          setIsBr(false);
          setIsSp(false);
          localStorage.setItem('isIdiom', isIdiom);
          setisIdiom(isIdiom);
          changeTextsUS();
        break;
      case 'isSp':
          setIsSp(true);
          setIsBr(false);
          setIsUs(false);
          localStorage.setItem('isIdiom', isIdiom);
          setisIdiom(isIdiom);
          changeTextsSP();
        break;
    
      default:
        break;
    }
  }

  const changeTextsBR = () => {
    switch (location) {
      case '/':
          changeTextsHomeBR();
        break;
    
      default:
        break;
    }
  };

  const changeTextsUS = () => {
    switch (location) {
      case '/':
          changeTextsHomeUS();
        break;
    
      default:
        break;
    }
  };

  const changeTextsSP = () => {
    switch (location) {
      case '/':
          changeTextsHomeSP();
        break;
    
      default:
        break;
    }
  };

  return (
    <div className='box-languages'>
      <button id='btn-language-pt' className={isBr && 'language-active'} onClick={() => { toggleIdiom('isBr')}}>
        <img src={BRIcon} alt='Português' />
      </button>
      <button id='btn-language-us' className={isUs && 'language-active'} onClick={() => { toggleIdiom('isUs')}}>
        <img src={USIcon} alt='English' />
      </button>
      <button id='btn-language-sp' className={isSp && 'language-active'} onClick={() => { toggleIdiom('isSp')}}>
        <img src={SPIcon} alt='Spanhol' />
      </button>
    </div>
  );
}

export default ChangeIdiom;
