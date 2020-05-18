import { ApplicationState, Identity, Subject } from "./constants";

export const getUserName = (state: ApplicationState): string => state?.identity?.firstName;

export const getUserIdentity = (state: ApplicationState): Identity => state?.identity;

export const getUserSubjects = (state: ApplicationState): Record<string, Subject> => state?.subjects;

export const getState = (state: ApplicationState): ApplicationState => state;
