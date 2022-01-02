import React from 'react';
import { get } from 'lodash';

import { copyToClipboard } from 'utils';

import Header from './header';
import styles from './home.scss';

const user = {
  name: 'Jarvis',
};

const Home: React.FC = () => {
  copyToClipboard();

  return (
    <div className={styles.greenBg}>
      <Header name={get(user, 'name')} />
    </div>
  );
};

export default Home;
