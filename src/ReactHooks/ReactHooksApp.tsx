import React, { useState, useEffect } from 'react';
// import React, { useState, useCallback } from 'react';
import './ReactHooksApp.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditPage from './components/EditPage/EditPage';
import Subjects from './components/Subjects/Subjects';

const ReactHooksApp: React.FC = () => {
   const [firstName, setFirstName] = useState<string>('Konrad');
   const [lastName, setLastName] = useState<string>('Pasik');
   const [isEditPage, setIsEditPage] = useState<boolean>(false);

   useEffect(() => {
      console.log('Tylko raz sie wywołuje');
   }, []);

   useEffect(() => {
      console.log('Wywołam się po każdej zmianie nazwiska');
   }, [lastName]);

   useEffect(() => () => {
      console.log('Wywołam się zaraz przed odmontowaniem komponentu');
   }, []);

   const onSubmitChange = (
      firstName: string, lastName: string
   ) => {
      setFirstName(firstName);
      setLastName(lastName);
   }

   // const onSubmitChange = useCallback((firstName: string, lastName: string) => {
   //    setFirstName(firstName);
   //    setLastName(lastName);
   // }, [setFirstName, setLastName]);

   const onButtonClick = () => {
      setIsEditPage(prevIsEditPage => !prevIsEditPage);
   }
   console.log('ReactHooksApp');
   return (
      <div className="ReactHooksApp-Container">
         <Header
            firstName={firstName}
            lastName={lastName}
         />
         <button
            className="ReactHooksApp-Button"
            onClick={onButtonClick}
         >
            {isEditPage ? 'Przedmioty' : 'Zmiana danych'}
         </button>
         {isEditPage
            ? <EditPage firstName={firstName} onDataChange={onSubmitChange} />
            : <Subjects />
         }
         <Footer />
      </div>
   )
}

export default ReactHooksApp;
