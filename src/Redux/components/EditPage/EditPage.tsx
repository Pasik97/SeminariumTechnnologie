import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './EditPage.css';
import { getUserIdentity } from '../../store/selector';
import { changeUserIdentity } from '../../store/actions';

const EditPage: React.FC = () => {
   const [newFirstName, setNewFirstName] = useState<string>('');
   const [newLastName, setNewLastName] = useState<string>('');
   const { firstName } = useSelector(getUserIdentity);
   const dispatch = useDispatch();

   const onDataChange = () => dispatch(changeUserIdentity(newFirstName, newLastName));

   const onInputChange = (event: any) => {
      if (event.target.name === 'newFirstName') {
         setNewFirstName(event.target.value);
      }

      if (event.target.name === 'newLastName') {
         setNewLastName(event.target.value);
      }
   }

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
            onClick={() => onDataChange()}
         >
            Zmień dane
         </button>
      </div>
   )
}

export default EditPage;
