export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [ ...state, action.project ];
    case 'FETCH_PROJECTS':
      return {projets: action.payload};
    default: // need this for default case
      return state;
    }
}
