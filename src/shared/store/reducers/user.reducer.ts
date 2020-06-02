import { USER_LOGIN } from '../actions';

const initialState = {};

export default function(state: any = initialState, action: any) {
  switch (action.type) {
    case USER_LOGIN: {
      const userData = action.payload;
      return {
        ...state,
        userData
      };
    }
    default:
      return state;
  }
}
