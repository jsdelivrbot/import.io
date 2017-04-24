import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Button } from 'react-bootstrap';


class DeleteInvoice extends Component {

  constructor () {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleFormSubmit(e) {
    if (e.target.value === 'submit') {
      this.props.deleteInvoice(this.props.invoice.id, this.props.invoice.quantity, this.props.invoice.price);
      this.props.hide();
    } else if (e.target.value === 'close') {
      this.props.hide();
    }
  }


  render () {
    return (
      <div className='delete-confirmation-modal'>
        <h6>Are you sure?</h6>
        <div>
          <Button onClick={(e) => this.handleFormSubmit(e)} value='close' className='btn btn-info btn-sm delete-button'>Cancel</Button>
          <Button onClick={(e) => this.handleFormSubmit(e)} value='submit' className='btn btn-danger btn-sm delete-button'>Delete</Button>
        </div>
      </div>
    );
  }
}


export const Unwrapped = DeleteInvoice
export default connect(null, actions)(DeleteInvoice)
