import React from 'react';
import AddNewSubject from './AddNewSubject';
import SubjectsList from './SubjectsList';

export interface Subject {
   numberOfHours: string;
   building: string;
   classroom: string;
   group: string;
   teacher: string;
}

interface SubjectsState {
   subjects: Record<string, Subject>;
}

class Subjects extends React.Component<{}, SubjectsState> {
   state = {
      subjects: {}
   }

   addNewSubject = (subjectName: string, subject: Subject) => {
      this.setState(prevState => ({
         subjects: {
            ...prevState.subjects,
            [subjectName]: subject,
         }
      }))
   }

   onSubjectDelete = (subjectName: string) => {
      const subjectsCopy: Record<string, Subject> = { ...this.state.subjects };
      delete subjectsCopy[subjectName];

      this.setState({
         subjects: { ...subjectsCopy },
      })
   }

   render() {
      const { subjects } = this.state;
      console.log('Subjects')
      return (
         <div>
            <AddNewSubject addNewSubject={this.addNewSubject} />
            <SubjectsList subjects={subjects} onSubjectDelete={this.onSubjectDelete} />
         </div>
      )
   }
}

export default Subjects;
