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
    case 'TOGGLE_DONE':
      // create an array of items
      let items = state.items.map(item => {
        // keep the item if it is not the item to be completed
        if (item.id !== action.item.id) {
          return item
        }
        // if the item needed is found then done is changed from
        // false to true or true to false.
        return Object.assign({}, item, {
          done: !item.done
        })

      });

      return {items: items}
    default:
      return state;
  }
};