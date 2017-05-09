import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchLists, incrementCounter } from '../actions/index'
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class ListPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: []
    }
    this.state.lists.map((list) => {
      list.counter = 0
    })
  }

  componentDidMount() {
    this.props.fetchLists()
      .then(res => {
        this.setState({ lists: this.props.lists.lists })
        this.state.lists.map((list) => {
          list.counter = 0
        })
      })
  }

  handleButtonClick(ev, list) {
    var copy = Object.assign({}, this.state);
    let i = copy.lists.indexOf(list)
    copy.lists[i].counter += 1;
    this.setState(copy);
    //incrementCounter(this.state.lists)
  }

  render() {
    const lists = this.state.lists.map((list) => 
        <li key={list.id}>
          <p>Upvotes: {list.counter ? list.counter : "0"}</p>
          <Button onClick={(event) => this.handleButtonClick(event, list)}>Upvote</Button>
          <Link to={`/lists/${list.id}`}>{list.name}</Link>
        </li>
      )

    return (
      <div>
        <div className="col-md-6">
          <h2>To do lists</h2>
          <ul className="lists-display">
            {lists}
          </ul>
          <Link className="new-link" to="/lists/new">New List</Link>
        </div>
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
    fetchLists: bindActionCreators(fetchLists, dispatch),
    incrementCounter: bindActionCreators(incrementCounter, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);