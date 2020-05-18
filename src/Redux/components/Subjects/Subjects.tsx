import React from 'react';
import { useSelector } from 'react-redux';
import AddNewSubject from './AddNewSubject';
import SubjectsList from './SubjectsList';
import { getState } from '../../store/selector';

export interface Subject {
   numberOfHours: string;
   building: string;
   classroom: string;
   group: string;
   teacher: string;
}

const Subjects: React.FC = () => {
   const state = useSelector(getState);
   console.log(state);

   return (
      <div>
         <AddNewSubject />
         <SubjectsList />
      </div>
   )
}

export default Subjects;
