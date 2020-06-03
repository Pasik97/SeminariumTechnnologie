import React from 'react';
import { Subject } from './Subjects';
import './styles/AddNewSubject.css';

interface AddNewSubjectProps {
   addNewSubject: (subjectName: string, subject: Subject) => void;
}

interface AddNewSubjectState extends Subject {
   subjectName: string;
}

// Ponieważ w tym wypadku mamy bardzo duzo pól do obsłużenia to nie ma 
// sensu zmieniac komponentu klasowego na komponent funkcyjny 
class AddNewSubject extends React.Component<AddNewSubjectProps, AddNewSubjectState> {
   state = {
      subjectName: '',
      numberOfHours: '',
      building: '',
      classroom: '',
      group: '',
      teacher: '',
   }

   onInputChange = (event: any) => {
      this.setState({
         [event.target.name]: event.target.value,
      } as any)
   }

   render() {
      const {
         subjectName,
         numberOfHours,
         building,
         classroom,
         group,
         teacher,
      } = this.state;
      const { addNewSubject } = this.props;
      const newSubject = {
         numberOfHours,
         building,
         classroom,
         group,
         teacher,
      }

      return (
         <div className="AddNewSubject-Container">
            <p className="AddNewSubject-Text">Dodaj nowy przedmiot</p>
            <div className="AddNewSubject-InputWrapper">
               <label className="AddNewSubject-Label">
                  Nazwa przedmiotu:
               </label>
               <input
                  className="AddNewSubject-Input"
                  type="text"
                  name="subjectName"
                  value={subjectName}
                  onChange={e => this.onInputChange(e)}
               />
            </div>
            <div className="AddNewSubject-InputWrapper">
               <label className="AddNewSubject-Label">
                  Liczba godzin:
               </label>
               <input
                  className="AddNewSubject-Input"
                  type="text"
                  name="numberOfHours"
                  value={numberOfHours}
                  onChange={e => this.onInputChange(e)}
               />
            </div>
            <div className="AddNewSubject-InputWrapper">
               <label className="AddNewSubject-Label">
                  Budynek:
               </label>
               <input
                  className="AddNewSubject-Input"
                  type="text"
                  name="building"
                  value={building}
                  onChange={e => this.onInputChange(e)}
               />
            </div>
            <div className="AddNewSubject-InputWrapper">
               <label className="AddNewSubject-Label">
                  Sala:
               </label>
               <input
                  className="AddNewSubject-Input"
                  type="text"
                  name="classroom"
                  value={classroom}
                  onChange={e => this.onInputChange(e)}
               />
            </div>
            <div className="AddNewSubject-InputWrapper">
               <label className="AddNewSubject-Label">
                  Grupa:
               </label>
               <input
                  className="AddNewSubject-Input"
                  type="text"
                  name="group"
                  value={group}
                  onChange={e => this.onInputChange(e)}
               />
            </div>
            <div className="AddNewSubject-InputWrapper">
               <label className="AddNewSubject-Label">
                  Prowadzący:
               </label>
               <input
                  className="AddNewSubject-Input"
                  type="text"
                  name="teacher"
                  value={teacher}
                  onChange={e => this.onInputChange(e)}
               />
            </div>
            <button
               className="AddNewSubject-Button"
               onClick={() => addNewSubject(subjectName, newSubject)}
            >
               Dodaj
            </button>
         </div>
      )
   }
}


export default AddNewSubject;
