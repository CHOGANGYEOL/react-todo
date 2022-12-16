// action types
export const CREATE_FROM_TODO = "CREATE_FROM_TODO";
export const REMOVE_FROM_TODO = "REMOVE_FROM_TODO";

// actions creator functions

export const createFromTodo = (item) => {
  return {
    type: CREATE_FROM_TODO,
    payload: {
      item
    }
  }
}

export const removeFromTodo = (itemId) => {
  return {
    type: REMOVE_FROM_TODO,
    payload: {
      itemId
    }
  }
}