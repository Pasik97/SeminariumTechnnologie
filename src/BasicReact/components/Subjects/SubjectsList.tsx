import React from 'react';
import './styles/SubjectsList.css';
import { Subject } from './Subjects';
import Expandable from './Expandable';

interface SubjectsListProps {
   subjects: Record<string, Subject>;
   onSubjectDelete: (subjectName: string) => void;
}

// SubjectsList jest komponentem funkcyjnym który w rzeczywistości dostaje obiekt, zawiera
// dodane przedmioty oraz dostaje funkcję do usuwania przedmiotu. Następnie za pomocą metody 
// entries klasy Object wyciągane są informacje o przedmiotach. Metoda ta zwraca nam tablicę
// w której element jest obiektem zaiwerającym informację o jednym przedmiocie. Następnie następuje
// iteracja po tej tablicy. W tym wypadku w podczas iteracji item posiada
// informację o jednym przedmiocie, następnie dane te przekazywane są do komponentu Expandable.
// W rzeczywistości komponent SubjectsList zwróci diva, a w nim tablice komponentów Expandable,
// które każdy z nich otrzymał inny przedmiot.
const SubjectsList: React.FC<SubjectsListProps> = ({ subjects, onSubjectDelete }) => (
   <div className="SubjectList-Container">
      {Object.entries(subjects).length ? <p className="SubjectList-Text">Lista przedmiotów:</p> : null}
      {Object.entries(subjects).map((item, idx) => (
         <Expandable key={idx} onSubjectDelete={onSubjectDelete} title={item[0]} subject={item[1]} />
      ))}
   </div>
);

export default SubjectsList;
