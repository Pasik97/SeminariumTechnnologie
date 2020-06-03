import { Subject, ActionsType } from "./constants"

// Akcje są w rzeczywistości funkcjami które przyjmują jakieś argumenty i zwracają
// obiekt z informacjami które będą potrzebne w reducerze. Jedną z informacji
// która ZAWSZE musi znaleźć się w takim obiekcie jest typ akcji (który jest stringiem)
// tylko wtedy reducer będzie mógł rozpoznać jaka akcja została wywołana i jak
// powinien zaktualizować stan aplikacji
export const changeUserIdentity = (newFirstName: string, newLastName: string) => ({
   newFirstName,
   newLastName,
   type: ActionsType.changeUserIdentity,
})

export const addNewSubject = (subjectName: string, subject: Subject) => ({
   subjectName,
   subject,
   type: ActionsType.addNewSubject,
})

export const deleteSubject = (subjectName: string) => ({
   subjectName,
   type: ActionsType.deleteSubject,
})