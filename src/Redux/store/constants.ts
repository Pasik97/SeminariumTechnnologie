export interface Identity {
   firstName: string;
   lastName: string;
}

export interface Subject {
   numberOfHours: string;
   building: string;
   classroom: string;
   group: string;
   teacher: string;
}

export interface ApplicationState {
   identity: Identity;
   subjects: Record<string, Subject>;
};

export const initialState = {
   identity: {
      firstName: 'Konrad',
      lastName: 'Pasik',
   },
   subjects: {},
}

// W tym miejscu jest definicja wszystkich typów akcji jakie mogą
// wystąpić w aplikacji
export enum ActionsType {
   changeUserIdentity = 'action_type/CHANGE_USER_IDENTITY',
   addNewSubject = 'action_type/ADD_NEW_SUBJECT',
   deleteSubject = 'action_type/DELETE_SUBJECT',
}

// W tym miejscu jest definicja jak może wyglądać obiekt który
// przyjmie reducer
export type Action = {
   newFirstName: string,
   newLastName: string
   type: ActionsType.changeUserIdentity
} | {
   subjectName: string,
   subject: Subject,
   type: ActionsType.addNewSubject
} | {
   subjectName: string,
   type: ActionsType.deleteSubject
};
