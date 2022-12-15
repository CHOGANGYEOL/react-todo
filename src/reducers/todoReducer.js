import { REMOVE_FROM_TODO } from "../actions/index";
import { Data } from "../data/Data";

const todoReducer = (state = Data, action) => {

  switch (action.type) {
    case REMOVE_FROM_TODO:
      return state.filter(el => el.id !== action.payload.itemId)
    default:
      return state;
  }
}

export default todoReducer;