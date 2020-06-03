import { Action, ApplicationState, ActionsType, Subject, initialState } from "./constants";

// Reducer jest funkcją która przyjmuje aktualny stan aplikacji, oraz akcje
export const reducer = (state: ApplicationState = initialState, action: Action) => {
   switch(action.type) {
      // W tym miejscu sprawdzany jest typ akcji
      // Jeżeli typ to changeUserIdentity zmianiamy stan 
      // akutalizując imię i nazwisko 
      case ActionsType.changeUserIdentity:
         return {
            // ...state oznacza, że robimy kopię aktualnego stanu,
            // a następnie nadpisujemy identity
            ...state,
            identity: {
               firstName: action.newFirstName,
               lastName: action.newLastName,
            }
         }
      // Jeżeli typ to addNewSubject zmianiamy stan 
      // akutalizując listę przedmiotów
      case ActionsType.addNewSubject:
         return {
            // ...state oznacza, że robimy kopię aktualnego stanu,
            // a następnie nadpisujemy subjects
            ...state,
            subjects: {
               // ...state.subjects oznacza, że robimy kopię obiektu znajdującego się pod nazwą subjects,
               // a następnie dopisujemy nowy przedmiot
               ...state.subjects,
               [action.subjectName]: action.subject,
            }
         }
      // Jeżeli typ to deleteSubject zmianiamy stan 
      // usuwając przedmiot z listy
      case ActionsType.deleteSubject:
         const subjectsCopy: Record<string, Subject> = { ...state.subjects };
         delete subjectsCopy[action.subjectName];
   
         return {
            // ...state oznacza, że robimy kopię aktualnego stanu,
            // a następnie nadpisujemy subjects
            ...state,
            subjects: subjectsCopy,
         }
      default:
         return state;
   }
}