export default function listReducer(state= {
  lists: []
}, action) {
  switch(action.type) {
    case 'ADD_LIST':
      // Create a new list item with an id and the list passed through
      // Return this list add to the lists already created.
      return {lists: state.lists.concat(action.list)};
    case 'ADD_LISTS':
      return {lists: action.lists}
    default:
      return state;
  }
};