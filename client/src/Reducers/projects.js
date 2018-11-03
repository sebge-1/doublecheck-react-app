export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [ ...state, action.project ];
    case 'FETCH_PROJECTS':
      return state.concat(action.payload);
    default: // need this or default case
      return state;
    }
}
