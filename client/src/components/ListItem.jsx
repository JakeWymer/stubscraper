import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return(
      <tr>
        <th scope="row">{ this.props.entry.name }</th>
        <td>{ this.props.entry.phoneNumber }</td>
        <td>{ this.props.entry.email }</td>
        <td>{ this.props.entry.url }</td>
        <td>{ this.props.entry.priceMax }</td>
      </tr>
    );
  }
}

export default ListItem;
