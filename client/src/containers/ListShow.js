import React from 'react';
import { connect } from 'react-redux';
import { toggleDone } from '../actions/index'
import { bindActionCreators } from 'redux';

const ListShow = (props) => {
  const list = props.list;
  let listItems = props.items.filter(item => item.parentID === list.id);

  return (
    <div>
      <h2>List: {list.name}</h2>

      <ul>
        {listItems.map((item) => 
          <li key={item.id} onClick={() => {this.props.toggleDone(item)}}>{item.done ? <strike>{item.text}</strike> : item.text}</li>
        )}
      </ul>
    </div>
  );
};


const mapStateToProps = (state, props) => {
  let lists = state.lists.lists;
  const list = lists.find( (list) => list.id === props.match.params.id )
  if (list) {
    return {
      list: list,
      items: state.items
    }
  } else {
    return {
      list: {},
      items: []
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDone: bindActionCreators(toggleDone, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListShow);
