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
    case 'TOGGLE_DONE':
      action.list.items = action.list.items.map(item => {
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

      state.lists.map(list => {
        if (list.id !== action.list.id) {
          return list
        }
        // if the list needed is found then change it to the new list
        return Object.assign({}, list, {
          list: action.list
        })
      })
      return {lists: state.lists}
    case 'ADD_ITEM_TO_LIST':
      const lists = state.lists.map(list => {
        if (list.id !== action.list.id) {
          return list
        }
        // if the list needed is found then change it to the new list
        return action.list
      })
      return {lists: lists}
    default:
      return state;
  }
};