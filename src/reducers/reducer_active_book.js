// state argument is not application state, only the current reducer's state
// if state argument comes in undefined, make it empty object
export default function(state=null, action) {

  switch(action.type) {
    // payload is book object
    case 'BOOK_SELECTED':
      return action.payload

    default:
      return state
  }
}
