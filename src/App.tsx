import React, { useState } from 'react';
import './styles/App.css';
import BasicReactApp from './BasicReact/BasicReactApp';
import ReactHooksApp from './ReactHooks/ReactHooksApp';
import ReduxApp from './Redux/ReduxApp';

enum CreatedExamples {
  BasicReactApp = 'BasicReactApp',
  ReactHooksApp = 'ReactHooksApp',
  ReduxApp = 'ReduxApp',
}

// App jest komponentem korzeniem aplikacji zawiera w sobie nawigację pozwalającą na wybór przykładu
const App: React.FC = () => {
  // useState - Jest to hook pozwalający na trzymanie stanu w komponentach funkcyjnych
  // pierwotnie w React stan przetrzymywany jest w komponentach klasowych jednak
  // dzięki hookom możemy przenieść logikę komponentów klasowych do komponentów funkcyjnych
  // [chosenApp, setChosenApp] oznacza destrukturyzację tablicy, ponieważ w rzeczywistości
  // useState zwraca nam tablice z dwoma elementami: [wartośćStanu, funckjaDoZmianyWartości]
  // dzięki const [chosenApp, setChosenApp] - możemy nazwać wartośćStanu jako chosenApp
  // natomiast funckjaDoZmianyWartości jako setChosenApp
  const [chosenApp, setChosenApp] = useState<CreatedExamples | undefined>(undefined);

  return (
    // Jeżeli chcemy nadać elementowi HTML klasę CSS używamy
    // propa className
    <div className="App">
      
      <header className="App-header">
        <div
          className="App-header-tab"
          style={{ color: !chosenApp ? '#61dafb' : 'white'}}
          // W tym wypadku mamy zmianę stanu, kiedy użytkownik naciście na tab w nawigacji
          // wywoła funkcję setChosenApp która ustawi wartosc stanu na undefined 
          // i pozwoli na wyświetlenie strony głównej
          onClick={() => setChosenApp(undefined)}
        >
          Home
        </div>
        <div
          className="App-header-tab"
          style={{ color: chosenApp === CreatedExamples.BasicReactApp ? '#61dafb' : 'white'}}
          // W tym wypadku mamy zmianę stanu, kiedy użytkownik naciście na tab w nawigacji
          // wywoła funkcję setChosenApp która ustawi wartosc stanu na CreatedExamples.BasicReactApp 
          // i pozwoli na wyświetlenie strony głównej
          onClick={() => setChosenApp(CreatedExamples.BasicReactApp)}
        >
          Basic React App
        </div>
        <div
          className="App-header-tab"
          style={{ color: chosenApp === CreatedExamples.ReactHooksApp ? '#61dafb' : 'white'}}
          // W tym wypadku mamy zmianę stanu, kiedy użytkownik naciście na tab w nawigacji
          // wywoła funkcję setChosenApp która ustawi wartosc stanu na CreatedExamples.ReactHooksApp 
          // i pozwoli na wyświetlenie strony głównej
          onClick={() => setChosenApp(CreatedExamples.ReactHooksApp)}
        >
          React Hooks
        </div>
        <div
          className="App-header-tab"
          style={{ color: chosenApp === CreatedExamples.ReduxApp ? '#61dafb' : 'white'}}
          // W tym wypadku mamy zmianę stanu, kiedy użytkownik naciście na tab w nawigacji
          // wywoła funkcję setChosenApp która ustawi wartosc stanu na CreatedExamples.ReduxApp 
          // i pozwoli na wyświetlenie strony głównej
          onClick={() => setChosenApp(CreatedExamples.ReduxApp)}
        >
          Redux
        </div>
      </header>

      {/* W tym miejscu mamy renderowanie warunkowe, które możemy przetłumaczyć następująco:
      Jeżeli chosenApp nie istnieje (jest undefined) -> wyświetl stornę główną 
      Jeżeli chosenApp to CreatedExamples.BasicReactApp -> wyświetl przykład BasicReactApp
      Jeżeli chosenApp to CreatedExamples.ReactHooksApp -> wyświetl przykład ReactHooksApp
      Jeżeli chosenApp to CreatedExamples.ReduxApp -> wyświetl przykład ReduxApp */}
      <article className="App-article">
        {!chosenApp && <div className="App-WelcomePage">Wybierz przykład z nawigacji powyżej</div>}
        {chosenApp === CreatedExamples.BasicReactApp && <BasicReactApp />}
        {chosenApp === CreatedExamples.ReactHooksApp && <ReactHooksApp />}
        {chosenApp === CreatedExamples.ReduxApp && <ReduxApp />}
      </article>

    </div>
  );
}

export default App;
