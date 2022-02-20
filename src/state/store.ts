

import { createStore } from 'redux';
import { addTask } from './action-creator/BmiAction';
import { taskList } from './reducers/BmiReducer';


 
// Creating store
export const store = createStore(taskList);
 