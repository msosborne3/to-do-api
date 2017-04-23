let id = 0;
export default function listReducer(state= {
  lists: [{id: 0, name: 'list1'}]
}, action) {
  switch(action.type) {
    case 'ADD_LIST':
      id++; // Increment id to keep track of the list
      // Create a new list item with an id and the list passed through
      let list = {id: id, name: action.list.name};
      // Return this list add to the lists already created.
      return {lists: state.lists.concat(list)};
    default:
      return state;
  }
};