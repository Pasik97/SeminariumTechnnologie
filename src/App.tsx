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

const App: React.FC = () => {
  const [chosenApp, setChosenApp] = useState<CreatedExamples | undefined>(undefined);

  return (
    <div className="App">
      
      <header className="App-header">
        <div
          className="App-header-tab"
          style={{ color: !chosenApp ? '#61dafb' : 'white'}}
          onClick={() => setChosenApp(undefined)}
        >
          Home
        </div>
        <div
          className="App-header-tab"
          style={{ color: chosenApp === CreatedExamples.BasicReactApp ? '#61dafb' : 'white'}}
          onClick={() => setChosenApp(CreatedExamples.BasicReactApp)}
        >
          Basic React App
        </div>
        <div
          className="App-header-tab"
          style={{ color: chosenApp === CreatedExamples.ReactHooksApp ? '#61dafb' : 'white'}}
          onClick={() => setChosenApp(CreatedExamples.ReactHooksApp)}
        >
          React Hooks
        </div>
        <div
          className="App-header-tab"
          style={{ color: chosenApp === CreatedExamples.ReduxApp ? '#61dafb' : 'white'}}
          onClick={() => setChosenApp(CreatedExamples.ReduxApp)}
        >
          Redux
        </div>
      </header>

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
