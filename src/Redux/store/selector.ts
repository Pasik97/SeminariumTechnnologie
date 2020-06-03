import { ApplicationState, Identity, Subject } from "./constants";

// Selektory są funckjami które przyjmują stan i zwracają nam częśc stanu, która nas interesuje
// bardzo przydatne podczas używania useSelector
export const getUserName = (state: ApplicationState): string => state?.identity?.firstName;

export const getUserIdentity = (state: ApplicationState): Identity => state?.identity;

export const getUserSubjects = (state: ApplicationState): Record<string, Subject> => state?.subjects;

export const getState = (state: ApplicationState): ApplicationState => state;
