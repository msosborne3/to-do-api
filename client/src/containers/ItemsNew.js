import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { addItem } from '../actions';
import { Button } from 'react-bootstrap';

class ItemsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      done: false,
    }
  }

  handleOnTextChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addItem(this.props.list, this.state);
    browserHistory.push(`/lists/${this.props.list.id}`);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="new-list">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Text: </label>
            <input type="text" className="form-control" onChange={(event) => this.handleOnTextChange(event)} value={this.state.text} />
          </div>
          <Button type="submit">Create Item</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const list = state.lists.lists.find( (list) => list.id == ownProps.routeParams.id )
  if (list) {
    return {
      list: list
    }
  } else {
    return {
      list: {}
    };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: bindActionCreators(addItem, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsNew);