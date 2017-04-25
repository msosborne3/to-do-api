import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { browserHistory } from 'react-router';
import { addItem } from '../actions';

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
    //browserHistory.push('/lists');
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div className="new-list">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Text: </label>
          <input type="text" onChange={(event) => this.handleOnTextChange(event)} value={this.state.text} />
          <br />
          <input type="submit" value="Create Item" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const list = state.lists.lists.find( (list) => list.id == ownProps.routeParams.list_id )
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