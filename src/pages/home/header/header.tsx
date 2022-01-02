import React, { FC } from 'react';

import { IHeaderProps } from './header.types';

const Header: FC<IHeaderProps> = (props) => {
  const { name, children } = props;

  return (
    <div>
      Hi, {name}
      {children}
    </div>
  );
};

export default Header;
