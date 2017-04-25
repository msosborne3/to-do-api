import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { addList } from '../actions';
import { Button } from 'react-bootstrap';

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
    browserHistory.push('/lists');
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div className="new-list col-md-6">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">
            <label>List Name: </label>
            <input type="text" className="form-control" onChange={(event) => this.handleOnNameChange(event)} value={this.state.name} />
          </div>
          <Button type="submit">Create List</Button>
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