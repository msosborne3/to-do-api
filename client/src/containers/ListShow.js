import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDone } from '../actions/index'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class ListShow extends Component {

  render() {
    const list = this.props.list;
    const listItems = this.props.items;

    return (
      <div className="col-md-6">
        <h2>List: {list.name}</h2>

        <ul className="items-list">
          {listItems.map((item) => 
            <li key={item.id} onClick={() => {this.props.toggleDone(this.props.list, item)}}>{item.done ? <strike>{item.text}</strike> : item.text}</li>
          )}
        </ul>
        {this.props.children}
        <Link className="new-link" to={`/lists/${list.id}/items/new`}>New Item</Link>
      </div>
    );
  }
};


const mapStateToProps = (state, ownProps) => {
  const list = state.lists.lists.find( (list) => list.id == ownProps.routeParams.id )
  if (list) {
    return {
      list: list,
      items: list.items
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
