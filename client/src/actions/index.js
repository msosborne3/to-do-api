import fetch from 'isomorphic-fetch';

export function addList(list) {
    return (dispatch) => {
    return fetch(`/lists?name=${list.name}`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(list => dispatch({
        type: 'ADD_LIST',
        list
      }));
  };
}

export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item
  }
}

export function toggleDone(list, item) {
  return (dispatch) => {
    dispatch({
      type: 'TOGGLE_DONE',
      list,
      item
    })
    return fetch(`/lists/${list.id}/items/${item.id}?text=${item.text}&done=${!item.done}`, {
      method: 'PUT'
    })
  };
}

export function fetchLists() {
  return (dispatch) => {
    return fetch('/lists.json')
      .then(response => response.json())
      .then(lists => dispatch({
        type: 'ADD_LISTS',
        lists
      }));
  };
}