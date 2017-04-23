import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleDone } from '../actions/index'
import { bindActionCreators } from 'redux';

class ItemsPage extends Component {

  render() {
    const items = this.props.items.items;
    return (
      <div>
        <h2>To-do Items</h2>
        <ul>
          {items.map((item) => 
            <li key={item.id} onClick={() => {this.props.toggleDone(item)}}>{item.done ? <strike>{item.text}</strike> : item.text}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDone: bindActionCreators(toggleDone, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);

