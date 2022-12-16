import { CREATE_FROM_TODO, REMOVE_FROM_TODO } from "../actions/index";
import { Data } from "../data/Data";

const todoReducer = (state = Data, action) => {

  switch (action.type) {
    case CREATE_FROM_TODO:
      return [...state, action.payload.item]
    case REMOVE_FROM_TODO:
      return state.filter(el => el.id !== action.payload.itemId)
    default:
      return state;
  }
}

export default todoReducer;