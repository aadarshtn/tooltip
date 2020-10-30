import { DISPLAY_TOOLTIP, SET_POSITION } from "../actions";

const initialState = {
    position : {
        value: '',
        showToolTip: false
    }
  
};

export default function hover(state = initialState.position, action) {
  switch (action.type) {
    case DISPLAY_TOOLTIP:
      return {
        ...state,
        showToolTip: action.val,
      };
    case SET_POSITION:
        return {
            ...state,
            value: action.val
        }
    default:
      return {
        ...state,
      };
  }
}

// export function select(state = initialState, action) {
//     switch (action.type){
//         case SET_POSITION:
//             return {
//                 ...state,
//                 value: action.val
//             }
//     }
// }
