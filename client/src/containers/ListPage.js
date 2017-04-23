import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListPage extends Component {
  render() {
    // for testing  
    //let lists = [{id: 1, name: 'school'}, {id: 2, name: 'work'}];

    return (
      <div>
        <h2>To do lists</h2>
        <ul>
          {this.props.lists.lists.map((list) => 
            <li key={list.id}>{list.name}</li>
          )}
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

export default connect(mapStateToProps)(ListPage);