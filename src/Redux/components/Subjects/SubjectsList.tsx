import React from 'react';
import './styles/SubjectsList.css';
import Expandable from './Expandable';
import { useSelector, useDispatch } from 'react-redux';
import { getUserSubjects } from '../../store/selector';
import { deleteSubject } from '../../store/actions';

const SubjectsList: React.FC = () => {
   const subjects = useSelector(getUserSubjects);
   const dispatch = useDispatch();

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
