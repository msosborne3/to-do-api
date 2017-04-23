export function addList(list) {
  return {
    type: 'ADD_LIST',
    list
  }
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export function toggleDone(item) {
  return {
    type: 'TOGGLE_DONE',
    item
  }
}