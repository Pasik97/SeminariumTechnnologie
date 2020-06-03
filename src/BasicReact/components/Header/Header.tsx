import React from 'react';
import './Header.css';

interface HeaderProps {
   firstName: string;
   lastName: string;
}

// Komponent ten przyjmuje w propach informacje takie jak
// akutalne imie i nazwisko użytkownika. Następnie wyświetla te informacje
const Header: React.FC<HeaderProps> = ({ firstName, lastName }) => (
   <div>
      <h2 className="Header-title">Cześć {firstName} {lastName}</h2>
   </div>
);

export default Header;
