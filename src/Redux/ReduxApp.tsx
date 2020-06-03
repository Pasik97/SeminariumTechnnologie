import React, { useState } from 'react';
import { Provider } from 'react-redux';
import './ReduxApp.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditPage from './components/EditPage/EditPage';
import Subjects from './components/Subjects/Subjects';
import { store } from './store/store';

// ReduxApp jest korzeniem trzeciego przykładu. Ponieważ podstawy React
// oraz React hooks zostały wyjaśnione w komentarzach dotyczących pierwszyego
// oraz drugiego przykładu,skupiam się tutaj wyłącznie na samych bibliotekach
// Redux oraz React-Redux.
const ReduxApp: React.FC = () => {
   // Możemy zawuażyć, ze nie potrzebujemy już tutaj trzymać imienia i nazwiska
   // Dane te trzymamy w storze 
   const [isEditPage, setIsEditPage] = useState<boolean>(false);

   const onButtonClick = () => {
      setIsEditPage(prevIsEditPage => !prevIsEditPage);
   }

   return (
      // Provider jest komponentem dostarczanym przez React-Redux, dzięki niemu
      // możemy pobrać lub dispatchować akcję do storea z dowolnego komponentu niżej
      // Musi otrzymać utworzony store
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
