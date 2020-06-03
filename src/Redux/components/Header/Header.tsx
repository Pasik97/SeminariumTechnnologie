import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import { getUserIdentity } from '../../store/selector';

const Header: React.FC = () => {
   // useSelector jest hookiem który pozwala na pobranie danych ze storea
   // w tym wypadku otrzymuje funckje, która jako argument przyjmuje akutalny stan
   // i wyciąga z niego potrzebne dane. 
   const { firstName, lastName } = useSelector(getUserIdentity);

   return (
      <div>
         <h2 className="Header-title">Cześć {firstName} {lastName}</h2>
      </div>
   )
};

export default Header;
