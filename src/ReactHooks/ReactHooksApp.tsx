import React, { useState, useEffect, useCallback } from 'react';
import './ReactHooksApp.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditPage from './components/EditPage/EditPage';
import Subjects from './components/Subjects/Subjects';

// ReactHooksApp jest korzeniem drugiego przykładu. Ponieważ podstawy React
// zostały wyjaśnione w komentarzach dotyczących pierwszyego przykładu 
// skupiam się tutaj wyłącznie na samych hookach.
const ReactHooksApp: React.FC = () => {
   // useState - Jest to hook pozwalający na trzymanie stanu w komponentach funkcyjnych
   // pierwotnie w React stan przetrzymywany jest w komponentach klasowych jednak
   // dzięki hookom możemy przenieść logikę komponentów klasowych do komponentów funkcyjnych
   // [firstName, setFirstName] oznacza destrukturyzację tablicy, ponieważ w rzeczywistości
   // useState zwraca nam tablice z dwoma elementami: [wartośćStanu, funckjaDoZmianyWartości]
   // dzięki const [firstName, setFirstName] - możemy nazwać wartośćStanu jako firstName
   // natomiast funckjaDoZmianyWartości jako setFirstName
   const [firstName, setFirstName] = useState<string>('Konrad');
   const [lastName, setLastName] = useState<string>('Pasik');
   const [isEditPage, setIsEditPage] = useState<boolean>(false);

   // useEffect jest hookiem efektu i pozwala na wykonanie jakiejś czynności 
   // w określonym czasie życia aplikacji, otrzymuje tablicę dependencji, która
   // powoduje, że kod w nim zawarty zostanie wywołany kiedy wartość zmiennej
   // znajdującej się w tej tablicy ulegnie zmianie. Przykładowo poniższy 
   // hook wykona się wyłącznie podczas montowania komponentu ReactHooksApp
   // ponieważ jest tablica dependencji jest pusta (można sprawdzić w devtools)
   useEffect(() => {
      console.log('Tylko raz sie wywołuje');
   }, []);

   // Ten hook efektu wykona się zawsze PO zmianie lastName
   useEffect(() => {
      console.log('Wywołam się po każdej zmianie nazwiska');
   }, [lastName]);

   // Natomiast ten hook efektu, pomimo, że podobny do pierwszego w rzeczywistości 
   // zwraca funckję. Kod poniżej może zostać zapisany jako:
   // useEffect(() => {
   //    return () => console.log('Wywołam się zaraz przed odmontowaniem komponentu');
   // }, []);
   // Hook ten posiada pustą tablicę dependencji, oznacza to, że wykona się TYLKO
   // przy odmontowaniu komponentu
   // Gdyby posiadał jakąś wartość, przykłądowo lastName to wywołałby się zawsze PREZD
   // zmianą wartości lastName
   useEffect(() => () => {
      console.log('Wywołam się zaraz przed odmontowaniem komponentu');
   }, []);

   // useCallback jest hookiem który pozwala na zapamiętanie metody, ponieważ 
   // przerenderowanie komponentu funkcyjnego oznacza budowanie go od 0
   // więc bez useCallback po przerenderowaniu tworzona byłaby ponownie metoda 
   // onSubmitChange, natomiast dzięki temu, że w tablicy dependecji mamy 
   // setFirstName, setLastName to metoda onSubmitChange zostanie stworzona na nowo
   // wyłącznie jeżeli setFirstName, setLastName ulegną zmianie, jeżeli nie to
   // stara, zapamiętana metoda zostanie wykorzystana
   const onSubmitChange = useCallback((firstName: string, lastName: string) => {
      setFirstName(firstName);
      setLastName(lastName);
   }, [setFirstName, setLastName]);

   const onButtonClick = () => {
      setIsEditPage(prevIsEditPage => !prevIsEditPage);
   }

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
