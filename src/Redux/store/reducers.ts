import { Action, ApplicationState, ActionsType, Subject, initialState } from "./constants";

export const reducer = (state: ApplicationState = initialState, action: Action) => {
   switch(action.type) {
      case ActionsType.changeUserIdentity:
         return {
            ...state,
            identity: {
               firstName: action.newFirstName,
               lastName: action.newLastName,
            }
         }
      case ActionsType.addNewSubject:
         return {
            ...state,
            subjects: {
               ...state.subjects,
               [action.subjectName]: action.subject,
            }
         }
      case ActionsType.deleteSubject:
         const subjectsCopy: Record<string, Subject> = { ...state.subjects };
         delete subjectsCopy[action.subjectName];
   
         return {
            ...state,
            subjects: subjectsCopy,
         }
      default:
         return state;
   }
}