import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { browserHistory } from 'react-router';
import { addList } from '../actions';

class ListNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  handleOnNameChange(ev) {
    this.setState({
      name: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.addList(this.state);
    //browserHistory.push('/lists');
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="new-list">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>List Name: </label>
          <input type="text" onChange={(event) => this.handleOnNameChange(event)} value={this.state.name} />
          <br />
          <input type="submit" value="Create List" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList: bindActionCreators(addList, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ListNew);