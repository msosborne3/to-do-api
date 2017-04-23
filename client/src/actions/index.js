import fetch from 'isomorphic-fetch';

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

export function fetchLists() {
  return (dispatch) => {
    return fetch('/lists.json')
      .then(response => response.json())
      .then(lists => dispatch({
        type: 'ADD_LISTS', lists
      }));
  };
}