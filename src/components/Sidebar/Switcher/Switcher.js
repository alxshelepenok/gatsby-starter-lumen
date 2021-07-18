import React, {useState} from 'react';
import styles from './Switcher.module.scss';

const Switcher = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(
    !!(window.localStorage.getItem('darkMode')
      || window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
  const bodyEl = document.getElementsByTagName('body')[0];

  function turnDarkMode() {
    setIsDarkModeOn(!isDarkModeOn);
    isDarkModeOn ? bodyEl.classList.add('dark') : bodyEl.classList.remove('dark');
    window.localStorage.setItem('darkMode', isDarkModeOn);
  }

  return (
    <div className={styles['switch__container']}>
      <span className={styles['switch__text']}>Night mode</span>
      <label className={styles['switch']}>
        <input id='DarkModeSwitcher' type='checkbox' defaultChecked={!isDarkModeOn} />
        <span className={`${styles['slider']}`} onClick={() => turnDarkMode()}/>
      </label>
    </div>
  );
};

export default Switcher;
