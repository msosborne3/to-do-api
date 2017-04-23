import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchLists } from '../actions/index'

class ListPage extends Component {
  componentDidMount() {
    this.props.fetchLists()
  }

  render() {
    const lists = this.props.lists.lists.map((list) => 
        <li key={list.id}>{list.name}</li>
      )

    return (
      <div>
        <h2>To do lists</h2>
        <ul>
          {lists}
        </ul>
        <p>PLACEHOLDER FOR ADD NEW LIST LINK</p>
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