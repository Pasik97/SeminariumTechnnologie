import { createStore } from 'redux';
import { reducer } from './reducers';

// Store tworzymy za pomocą wywołania funkcji createStore
// dostarczanym przez bibliotekę redux, argumentem 
// tej funckji jest stworzony przez nas reducer
export const store = createStore(reducer);
