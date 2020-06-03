import React from 'react';
import './styles/SubjectsList.css';
import Expandable from './Expandable';
import { useSelector, useDispatch } from 'react-redux';
import { getUserSubjects } from '../../store/selector';
import { deleteSubject } from '../../store/actions';

const SubjectsList: React.FC = () => {
   // useSelector jest hookiem który pozwala na pobranie danych ze storea
   // w tym wypadku otrzymuje funckje, która jako argument przyjmuje akutalny stan
   // i wyciąga z niego potrzebne dane czyli przedmioty. 
   const subjects = useSelector(getUserSubjects);
   // useDispatch pozwala na wysłanie akcji do storea, która zostanie obsłużona 
   // w odpowiedni sposób przez reducer 
   const dispatch = useDispatch();

   // W tym miejscu dispatchowana jest akcja deleteSubject, która jest 
   // funckją przyjmującą 1 argument (nazwę przedmioty), a następnie
   // funckja ta zwraca obiekt
   const onSubjectDelete = (subjectName: string) => dispatch(deleteSubject(subjectName));
   
   return (
      <div className="SubjectList-Container">
         {Object.entries(subjects).length ? <p className="SubjectList-Text">Lista przedmiotów:</p> : null}
         {Object.entries(subjects).map((item, idx) => (
            <Expandable key={idx} onSubjectDelete={onSubjectDelete} title={item[0]} subject={item[1]} />
         ))}
      </div>
   )
};

export default SubjectsList;
