import React, { useState } from 'react';
import './EditPage.css';

interface EditPageProps {
   firstName: string;
   onDataChange: (firstName: string, lastName: string) => void;
}

const EditPage: React.FC<EditPageProps> = React.memo(({ firstName, onDataChange }) => {
   const [newFirstName, setNewFirstName] = useState<string>('');
   const [newLastName, setNewLastName] = useState<string>('');

   const onInputChange = (event: any) => {
      if (event.target.name === 'newFirstName') {
         setNewFirstName(event.target.value);
      }

      if (event.target.name === 'newLastName') {
         setNewLastName(event.target.value);
      }
   }
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
               onChange={e => onInputChange(e)}
            />
            <input
               className="EditPage-Input"
               type="text"
               name="newLastName"
               placeholder="Nazwisko"
               value={newLastName}
               onChange={e => onInputChange(e)}
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
})


export default EditPage;
