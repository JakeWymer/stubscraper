import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: '',
      phone: '',
      url: '',
      priceMax: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      phoneNumber: this.state.phone,
      url: this.state.url,
      priceMax: this.state.priceMax
    }

    this.props.postEntry(data);

    this.setState({ name: '', phone: '', url: '', priceMax: '' });
  }

  render() {
    return(
      <div>
        <Button color="primary" onClick={ this.toggle }><i className="fas fa-plus fa-2x"></i></Button>
        <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
            <ModalHeader toggle={ this.toggle }>Add New Entry</ModalHeader>
            <Form onSubmit={ this.handleSubmit }>
            <ModalBody>
                <FormGroup>
                  <Label for="name-input">Name</Label>
                  <Input type="text" name="name" id="name-input" 
                    value={ this.state.name }
                    onChange={ this.handleChange }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="phone-input">Phone</Label>
                  <Input type="text" name="phone" id="phone-input"
                    value={ this.state.phone }
                    onChange={ this.handleChange }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="url-input">URL</Label>
                  <Input type="text" name="url" id="url-input"
                    value={ this.state.url }
                    onChange={ this.handleChange }
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="price-max-input">Max Price</Label>
                  <Input type="text" name="priceMax" id="price-max-input"
                    value={ this.state.priceMax }
                    onChange={ this.handleChange }
                  />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="success" type="submit" onClick={this.toggle}>Submit</Button>{' '}
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default connect(null, actions)(EntryForm);
