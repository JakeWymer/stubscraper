import React, { Component } from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';

class ListItem extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      editing: false,
      delete: false,
      _id: this.props.entry._id,
      name: this.props.entry.name,
      phoneNumber: this.props.entry.phoneNumber,
      url: this.props.entry.url,
      priceMax: this.props.entry.priceMax
    }
  }

  delete() {
    this.setState({ delete: true });

    axios.delete(`/api/entries/${this.state._id}`);
  }

  handleClick() {
    if(this.state.editing) {
      this.setState({ editing: false });

      axios.put('/api/entries', {
        _id: this.state._id,
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        url: this.state.url,
        priceMax: this.state.priceMax
      });

    } else {
      this.setState({ editing: true });
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    if(this.state.delete) {
      return null;
    }
    if(this.state.editing) {
      return(
        <tr>
        <td><input type="text" name="name" value={this.state.name} onChange={ (e) => this.handleChange(e) }/></td>
        <td><input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={ (e) => this.handleChange(e) }/></td>
        <td><input type="text" name="url" value={this.state.url} onChange={ (e) => this.handleChange(e) }/></td>
        <td><input type="text" name="priceMax" value={this.state.priceMax} onChange={ (e) => this.handleChange(e) }/></td>
        <td><Button color="success" onClick={ () => this.handleClick() }><i className="fas fa-check-circle fa-2x"></i></Button></td>
        <td><Button color="danger" onClick={ () => this.delete() }><i className="fas fa-trash-alt fa-2x"></i></Button></td>
      </tr>
      );
    } else {
      return(
        <tr>
          <th scope="row">{ this.state.name }</th>
          <td>{ this.state.phoneNumber }</td>
          <td>{ this.state.url }</td>
          <td>{ this.state.priceMax }</td>
          <td><Button color="warning" onClick={ () => this.handleClick() }><i className="fas fa-edit fa-2x"></i></Button></td>
          <td><Button color="danger" onClick={ () => this.delete() }><i className="fas fa-trash-alt fa-2x"></i></Button></td>
        </tr>
      );
    }
  }
}

export default ListItem;
