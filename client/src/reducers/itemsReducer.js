let id = 0;
export default function itemsReducer(state= {
  items: []
}, action) {
  switch(action.type) {
    case 'ADD_ITEM':
      id++;
      // Create a new to do item with an id
      let item = {id: id, text: action.item.text, done: action.item.done, parentID: action.item.parentID};
      // Return this list of items and adds it to the list already created.
      return {items: state.items.concat(item)};
    default:
      return state;
  }
};