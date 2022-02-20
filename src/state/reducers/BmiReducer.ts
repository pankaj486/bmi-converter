



export const taskList = (tasks = [], action:any) => {
   
    if (action.type === 'ADD_TODO') {
      return {...tasks, data: action.task};
    }
    return tasks;
  }