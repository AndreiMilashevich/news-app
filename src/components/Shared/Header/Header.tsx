import './Header.scss';
import React, { ReactElement } from 'react';

const Header: React.FC = (): ReactElement => {
  return (
    <div className="wrapper__header">
      <div className="wrapper__logo"></div>
      <div>Whiskers News</div>
    </div>
  )
}

export default Header;