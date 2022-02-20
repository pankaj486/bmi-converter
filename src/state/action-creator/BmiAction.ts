



export const  addTask = (task:number) => {
   
    return {  
      type: 'ADD_TODO',
      task: task
    }
  }