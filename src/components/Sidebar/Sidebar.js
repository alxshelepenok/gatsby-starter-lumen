// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';
import Switcher from './Switcher';

const siteConfig = require('../../../config');

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();
  const { darkFunctionalityIsOn } = siteConfig;

  return (
      <div className={styles['sidebar']}>
        <div className={styles['sidebar__inner']}>
          <Author author={author} isIndex={isIndex} />
          <Menu menu={menu} />
          <Contacts contacts={author.contacts} />
          {darkFunctionalityIsOn ? <Switcher /> : null}
          <Copyright copyright={copyright} />
        </div>
      </div>
  );
};

export default Sidebar;
