import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Button } from 'react-bootstrap';


class UpdateInvoiceModalForm extends Component {

  constructor () {
    super();
    this.state = {
      item: '',
      quantity: '',
      price: '',
      formValItem: 'none',
      formValQuantity: 'none',
      formValPrice: 'none'
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChangeItem = this.handleChangeItem.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
  }


  handleFormValidation (item, quantity, price) {
    var numbers = /^[0-9.]+$/;

    // reset UI warnings to give people the chance to start fresh on each edit
    this.setState({
      formValItem: 'none',
      formValQuantity: 'none',
      formValPrice: 'none'
    })


    if (item === '') {
      this.setState({
        formValItem: 'inline-block'
      })
      return false;
    } else {
      this.setState({
        formValItem: 'none'
      })
    }

    if (quantity.match(numbers) && quantity !== '') {
      this.setState({
        formValQuantity: 'none'
      })
    } else {
      this.setState({
        formValQuantity: 'inline-block'
      })
      return false;
    }


    if ( price.match(/^[0-9.]+$/) && price !== '') {
      let decimalCount = 0;

      for (let i = 0; i < price.length; i++) {
        if (price[i] === '.') {
          decimalCount++;
        }

        if (decimalCount > 1 ) {
          this.setState({
            formValPrice: 'inline-block'
          })
          return false;
        } else {
          this.setState({
            formValPrice: 'none'
          })
        }
      }
    } else {
      this.setState({
        formValPrice: 'inline-block'
      })
      return false;
    }

    return true;
  }


  handleFormSubmit(id) {
    const item = this.state.item;
    const quantity = this.state.quantity;
    const price = this.state.price;


    if (this.handleFormValidation(item, quantity, price)) {
      this.props.updateInvoice(id, item, quantity, price);
      this.setState({
        item: '',
        quantity: '',
        price: ''
      });

      this.props.handleUpdating();
      this.props.hide();
    }
  }

  handleChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  handleChangeItem(e) {
    this.setState({
      item: e.target.value
    });
  }

  handleChangeQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }


  render () {
    return (
      <form >
        <fieldset className='form-group'>
          <label><strong>Item:</strong></label>
           <input value={this.state.item} onChange={this.handleChangeItem} className="form-control" placeholder={this.props.invoice.item}/>
           <p style={{display: this.state.formValItem, color: 'red'}}>Please enter an item</p>
        </fieldset>
        <fieldset >
          <label><strong>Quantity:</strong></label>
          <input type='text' id='quantity' value={this.state.quantity} onChange={this.handleChangeQuantity} className='form-control'  placeholder={this.props.invoice.quantity}/>
          <p style={{display: this.state.formValQuantity, color: 'red'}}>Please enter a quantity</p>
        </fieldset>
        <fieldset className='form-group'>
          <label><strong>Price:</strong></label>
          <input type='text' id='price' value={this.state.price} onChange={this.handleChangePrice} className='form-control'  placeholder={this.props.invoice.price}/>
          <p style={{display: this.state.formValPrice, color: 'red'}}>Please enter a price</p>
        </fieldset>
        <Button onClick={() => this.handleFormSubmit(this.props.invoice.id)} className='btn btn-primary btn-sm'>Submit</Button>
      </form>
    );
  }
}

export const Unwrapped = UpdateInvoiceModalForm
export default connect(null, actions)(UpdateInvoiceModalForm)
