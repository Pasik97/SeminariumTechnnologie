import React from 'react';
import './Header.css';

interface HeaderProps {
   firstName: string;
   lastName: string;
}

const Header: React.FC<HeaderProps> = ({ firstName, lastName }) => (
   <div>
      {console.log('Header')}
      <h2 className="Header-title">Cześć {firstName} {lastName}</h2>
   </div>
);

// const Header: React.FC<HeaderProps> = React.memo(({ firstName, lastName }) => (
//    <div>
//       {console.log('Header')}
//       <h2 className="Header-title">Cześć {firstName} {lastName}</h2>
//    </div>
// ));

export default Header;
