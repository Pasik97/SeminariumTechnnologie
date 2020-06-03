import React from 'react';
import './Header.css';

interface HeaderProps {
   firstName: string;
   lastName: string;
}

// React.memo pozwala na zapamiętanie komponentu. Czyli jeżeli jego dane
// wejściowe nie uległy zmianie to nie ma potrzeby renderowania go na nowo
// tak więc w tym przypadku Header przerenderuje się wyłącznie kiedy zmieni się
// firstName lub lastName
const Header: React.FC<HeaderProps> = React.memo(({ firstName, lastName }) => (
   <div>
      <h2 className="Header-title">Cześć {firstName} {lastName}</h2>
   </div>
));

export default Header;
