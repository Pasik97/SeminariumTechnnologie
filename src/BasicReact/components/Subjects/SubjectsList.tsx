import React from 'react';
import './styles/SubjectsList.css';
import { Subject } from './Subjects';
import Expandable from './Expandable';

interface SubjectsListProps {
   subjects: Record<string, Subject>;
   onSubjectDelete: (subjectName: string) => void;
}

const SubjectsList: React.FC<SubjectsListProps> = ({ subjects, onSubjectDelete }) => (
   <div className="SubjectList-Container">
      {console.log('SubjectsList')}
      {Object.entries(subjects).length ? <p className="SubjectList-Text">Lista przedmiotów:</p> : null}
      {Object.entries(subjects).map((item, idx) => (
         <Expandable key={idx} onSubjectDelete={onSubjectDelete} title={item[0]} subject={item[1]} />
      ))}
   </div>
);

export default SubjectsList;
