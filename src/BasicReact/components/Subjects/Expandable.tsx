import React from 'react';
import './styles/Expandable.css';
import { Subject } from './Subjects';

interface ExpandableProps {
   subject: Subject;
   title: string;
   onSubjectDelete: (subjectName: string) => void;
}

interface ExpandableState {
   isExpanded: boolean;
}

// Komponent Expandable pozwala na wyświetlenie przedmiotu jako kafelek, 
// który można rozwijać i zwijać, ponieważ musimy mieć informację,
// czy kafelek jest rozwinięty czy nie, komponent ten posiada stan.
class Expandable extends React.Component<ExpandableProps, ExpandableState> {
   state = {
      isExpanded: false,
   }

   // funckja pozwalająca na zmianę stanu komponentu, czyli na
   // rozwinięcie i zwinięcie kafelka
   onExpandedClick = () => {
      this.setState(prevState => ({
         isExpanded: !prevState.isExpanded,
      }))
   }

   render() {
      const { isExpanded } = this.state;
      const { title, onSubjectDelete, subject } = this.props;

      return subject ? (
         <div className="Expandable-Container">
            <div
               className="Expandable-Header"
               onClick={() => this.onExpandedClick()}
            >
               <div className="Expandable-TextAndButton">
                  <p className="Expandable-Text">{title}</p>
                  <button
                     className="Expandable-DeleteButton"
                     // Przycisk ten wywołuje funckję otrzymana z propów pozwalającą 
                     // na usnięcie przedmiotu ze stanu w komponencie który jest wyżej
                     onClick={() => onSubjectDelete(title)}
                  >
                     X
                  </button>
               </div>
               <div className="Expandable-Arrow">
                  {isExpanded ? '⬆️' : '⬇️'}
               </div>
            </div>
            <div
               style={{ display: isExpanded ? 'flex' : 'none' }}
               className="Expandable-Body"
            >
               <div className="Expandable-BodyText"><p >Budynek:</p><p className="Expandable-BodyData">{subject.building}</p></div>
               <div className="Expandable-BodyText"><p>Sala:</p><p className="Expandable-BodyData">{subject.classroom}</p></div>
               <div className="Expandable-BodyText"><p>Grupa:</p><p className="Expandable-BodyData">{subject.group}</p></div>
               <div className="Expandable-BodyText"><p>Prowadzący:</p><p className="Expandable-BodyData">{subject.teacher}</p></div>
               <div className="Expandable-BodyText"><p>Liczba godzin:</p><p className="Expandable-BodyData">{subject.numberOfHours}</p></div>
            </div>
         </div>
      ) : null
   }
}


export default Expandable;
