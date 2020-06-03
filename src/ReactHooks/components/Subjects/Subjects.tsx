import React, { useState, useCallback } from 'react';
import AddNewSubject from './AddNewSubject';
import SubjectsList from './SubjectsList';

export interface Subject {
   numberOfHours: string;
   building: string;
   classroom: string;
   group: string;
   teacher: string;
}

// Komponent klasowy został zastąpiony funkcyjnym z wykorzystaniem 
// hooka useState
const Subjects: React.FC = () => {
   const [subjects, setSubjects] = useState<Record<string, Subject>>({});

   const addNewSubject = useCallback((subjectName: string, subject: Subject) => {
      setSubjects(prevSubjects => ({
         ...prevSubjects,
         [subjectName]: subject,
      }))
   }, [setSubjects])

   const onSubjectDelete = useCallback((subjectName: string) => {
      const subjectsCopy: Record<string, Subject> = { ...subjects };
      delete subjectsCopy[subjectName];

      setSubjects({ ...subjectsCopy });
   }, [setSubjects, subjects]);

   return (
      <div>
         <AddNewSubject addNewSubject={addNewSubject} />
         <SubjectsList subjects={subjects} onSubjectDelete={onSubjectDelete} />
      </div>
   )
}

export default Subjects;
