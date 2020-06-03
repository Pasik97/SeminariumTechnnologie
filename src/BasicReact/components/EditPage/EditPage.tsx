import React from 'react';
import './EditPage.css';

interface EditPageProps {
   firstName: string;
   onDataChange: (firstName: string, lastName: string) => void;
}

interface EditPageState {
   newFirstName: string;
   newLastName: string;
}

// Komponent EditPage jest komponentem klasowym ponieważ trzymamy aktualne 
// warotści pól w stanie komponentu. React musi wiedzieć co zostało wpisane
// do danego pola
class EditPage extends React.Component<EditPageProps, EditPageState> {
   state = {
      newFirstName: '',
      newLastName: '',
   }

   // funkcja pozwalająca na akutalizację stanu po wpisaniu danych w pole
   onInputChange = (event: any) => {
      this.setState({
         [event.target.name]: event.target.value,
      } as any)
   }

   render() {
      const { newFirstName, newLastName } = this.state;
      const { firstName, onDataChange } = this.props;

      return (
         <div className="EditPage-Container">
            <p className="EditPage-Text">Zmień swoje dane {firstName}</p>
            <div className="EditPage-InputsWrapper">
               <input
                  className="EditPage-Input"
                  type="text"
                  name="newFirstName"
                  placeholder="Imie"
                  value={newFirstName}
                  onChange={e => this.onInputChange(e)}
               />
               <input
                  className="EditPage-Input"
                  type="text"
                  name="newLastName"
                  placeholder="Nazwisko"
                  value={newLastName}
                  onChange={e => this.onInputChange(e)}
               />
            </div>
            <button
               className="EditPage-Button"
               // Przycisk Zmień Dane wywołuje funkcję, która komponent otrzymał z propów
               // ponieważ w rzeczywistości dane przyszły z komponentu wyżej i tylko
               // w tamtym miejscu może nastąpić akutalizacja stanu, dzięki wywołaniu onDataChange
               // jest to możliwe
               onClick={() => onDataChange(newFirstName, newLastName)}
            >
               Zmień dane
            </button>
         </div>
      )
   }
}


export default EditPage;
