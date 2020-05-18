import { Subject, ActionsType } from "./constants"

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