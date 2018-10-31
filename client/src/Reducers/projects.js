export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [ ...state, action.project ];
    default: // need this for default case
      return state;
    }
}
