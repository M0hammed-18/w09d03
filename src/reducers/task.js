const initiqlState = {
  task: [],
};

const Tasks = (state = initiqlState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "READ":
      return { task};

    case "CREATE":
      return { task };
      
    case "UPDATE":
      const { task} = payload;
        return { task };
        
      case "DELETE":
          return{task}

          default:
              return state;
  }
};

export default Tasks;

export const readTask=(data)=>{
    return{
        type:"READ",
        payload:data
    }
}

export const createTask =(data)=>{
    return{
        type:"CREATE",
        payload:data
    }
}

export const deleteTask =(data)=>{
    return{
        type:"DELETE",
        payload:data
    }
}
