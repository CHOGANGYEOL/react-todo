// action types
export const REMOVE_FROM_TODO = "REMOVE_FROM_TODO";

// actions creator functions

export const removeFromTodo = (itemId) => {
  return {
    type: REMOVE_FROM_TODO,
    payload: {
      itemId
    }
  }
}