import React, { useState } from 'react';
// import React, { useState, useCallback } from 'react';
import { Provider } from 'react-redux';
import './ReduxApp.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditPage from './components/EditPage/EditPage';
import Subjects from './components/Subjects/Subjects';
import { store } from './store/store';

const ReduxApp: React.FC = () => {
   const [isEditPage, setIsEditPage] = useState<boolean>(false);

   const onButtonClick = () => {
      setIsEditPage(prevIsEditPage => !prevIsEditPage);
   }

   return (
      <Provider store={store}>
         <div className="ReduxApp-Container">
            <Header />
            <button
               className="ReduxApp-Button"
               onClick={onButtonClick}
            >
               {isEditPage ? 'Przedmioty' : 'Zmiana danych'}
            </button>
            {isEditPage
               ? <EditPage />
               : <Subjects />
            }
            <Footer />
         </div>
      </Provider>
   )
}

export default ReduxApp;
