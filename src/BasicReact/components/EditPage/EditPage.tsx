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

class EditPage extends React.Component<EditPageProps, EditPageState> {
   state = {
      newFirstName: '',
      newLastName: '',
   }

   onInputChange = (event: any) => {
      this.setState({
         [event.target.name]: event.target.value,
      } as any)
   }

   render() {
      const { newFirstName, newLastName } = this.state;
      const { firstName, onDataChange } = this.props;
      console.log('EditPage');
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
               onClick={() => onDataChange(newFirstName, newLastName)}
            >
               Zmień dane
            </button>
         </div>
      )
   }
}


export default EditPage;
