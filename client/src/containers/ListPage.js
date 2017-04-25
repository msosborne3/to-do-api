import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchLists } from '../actions/index'
import { Link } from 'react-router';

class ListPage extends Component {
  componentDidMount() {
    this.props.fetchLists()
  }

  render() {
    const lists = this.props.lists.lists.map((list) => 
        <li key={list.id}>
          <Link to={`/lists/${list.id}`}>{list.name}</Link>
        </li>
      )

    return (
      <div>
        <h2>To do lists</h2>
        <ul>
          {lists}
        </ul>
        <Link to="/lists/new">New List</Link>
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: bindActionCreators(fetchLists, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);