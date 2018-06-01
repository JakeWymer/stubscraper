import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ListItem from './ListItem';

class ListView extends Component {
  componentDidMount() {    
    this.props.fetchEntries();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.postedEntry !== this.props.postedEntry) {
      this.props.fetchEntries();
    }
  }

  renderEntries() {
    switch(this.props.entries) {
      case null:
        return;
      case false:
        return <h2>No entries.</h2>;
      default:        
        return this.props.entries.map((entry, i) => {
          return <ListItem key={entry._id} entry={entry} />
        });
    }
  }

  render() {
    return(
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>URL</th>
              <th>Max</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { this.renderEntries() }
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateTorProps = ({ entries, postedEntry }) => {
  return { entries, postedEntry }
}

export default connect(mapStateTorProps, actions)(ListView);
