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

class BasicReactApp extends React.Component<{}, BasicReactAppState> {
   state = {
      firstName: 'Konrad',
      lastName: 'Pasik',
      isEditPage: false,
   }

   onSubmitChange = (
      firstName: string, lastName: string
   ) => {
      this.setState({
         firstName, lastName
      })
   }

   onButtonClick = () => {
      this.setState((prevState) => ({
         isEditPage: !prevState.isEditPage,
      }))
   }

   render() {
      const { firstName, lastName, isEditPage } = this.state;
      console.log('BasicReactApp');
      return (
         <div className="BasicReactApp-Container">
            <Header
               firstName={firstName}
               lastName={lastName}
            />
            <button
               className="BasicReactApp-Button"
               onClick={this.onButtonClick}
            >
               {isEditPage ? 'Przedmioty' : 'Zmiana danych'}
            </button>
            {isEditPage
               ? <EditPage firstName={firstName} onDataChange={this.onSubmitChange} />
               : <Subjects />
            }
            <Footer />
         </div>
      )
   }
}

export default BasicReactApp;
