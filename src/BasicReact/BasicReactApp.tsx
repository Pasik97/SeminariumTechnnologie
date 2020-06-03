import React from 'react';
import './BasicReactApp.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import EditPage from './components/EditPage/EditPage';
import Subjects from './components/Subjects/Subjects';

interface BasicReactAppState {
   firstName: string;
   lastName: string;
   isEditPage: boolean,
}

// BasicReactApp jest korzeniem pierwszego przykładu, zawiera w sobie stan trzymający 3 wartości:
// imię, nazwisko oraz informację czy wyświetlonym widokiem jest widok edycji danych 
// czy widok dodawania/usuwania przedmiotów
class BasicReactApp extends React.Component<{}, BasicReactAppState> {
   // stan w komponentach klasowych jest obiektem
   state = {
      firstName: 'Konrad',
      lastName: 'Pasik',
      isEditPage: false,
   }

   // funckja pozwalająca na zmianę imienia i nazwiska
   onSubmitChange = (
      firstName: string, lastName: string
   ) => {
      // zmiana stanu w komponentach klasowych odbywa się za pomocą metody setState
      // która komponent dziedziczy po klasie React.Component, nie ma innej możliwości
      // zmiany stanu niż poprzez tą funkcję
      this.setState({
         firstName, lastName
      })
   }

   // funkcja pozwalająca na zmianę widoku z edycji na przedmioty i na odwrót
   onButtonClick = () => {
      // funckja setState nie musi przyjmować obiektu, może przyjąć funkcję
      // której argumentem będzie aktualny stan komponentu i pozwala na 
      // skorzystanie z tego stanu, w tym wypadku po prostu zmieniamy 
      // aktualną wartość isEditPage na przeciwną niż jest aktualnie
      this.setState((prevState) => ({
         isEditPage: !prevState.isEditPage,
      }))
   }

   render() {
      // Ponieważ state jest obiektem to możemy wykonać destrukturyzację podobnie jak na tablicy
      const { firstName, lastName, isEditPage } = this.state;

      return (
         // Jeżeli chcemy nadać elementowi HTML klasę CSS używamy
         // propa className
         <div className="BasicReactApp-Container">
            <Header
               firstName={firstName}
               lastName={lastName}
            />
            <button
               className="BasicReactApp-Button"
               // Przycisk który zmienia widok z Przedmiotów na Zmiane danych i odwrotnie
               // dostaje funkcje onButtonClick która zmienia wartość isEditPage na przeciwny
               onClick={this.onButtonClick}
            >
               {/* W zależności od wartości isEditPage zostanie wyśiwetlony napis na przycisku
               Przedmioty (true) lub Zmiana danych (false) */}
               {isEditPage ? 'Przedmioty' : 'Zmiana danych'}
            </button>
            {/* W zależności od wartości isEditPage zostanie wyśiwetlony formularz zmiany dancyh(true)
            lub dodawanie/usuwanie przedmiotów(false) */}
            {isEditPage
               ? <EditPage firstName={firstName} onDataChange={this.onSubmitChange} />
               : <Subjects />
            }
            {/* Dodatkowe informacje: Możemy zauważyć, że po dodaniu przedmiotu i przejściu na 
            zmianę danych, a następnie po powrocie na Przemioty, dodany przedmiot nie istnieje.
            Dzieje się tak dlatego, że przedmioty zapisane są w komponencie Subjects, który podczas 
            zmiany wartości isEditPage (czyli przejściu na zmianę edycji danych) powoduje jego
            odmontowanie, a co za tym idzie wszystkie dodane dane są gubione. Problem ten
            rozwiązany został w przykładzie wykorzystującym bibliotekę Redux */}
            <Footer />
         </div>
      )
   }
}

export default BasicReactApp;
