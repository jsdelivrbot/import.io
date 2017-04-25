import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import { Button } from 'react-bootstrap';



class CreateInvoice extends Component {

  constructor () {
    super();

    this.state = {
      item: '',
      quantity: '',
      price: '',
      formValItem: 'none',
      formValQuantity: 'none',
      formValPrice: 'none',
      invoiceId: 0
    };

    this.handleFormValidation = this.handleFormValidation.bind(this);

  }

  handleChangeItem (e) {
    this.setState({
      item: e.target.value
    });
  }

  handleChangeQuantity (e) {
    this.setState({
      quantity: e.target.value
    });
  }

  handleChangePrice (e) {
    this.setState({
      price: e.target.value
    });
  }


  handleFormValidation (item, quantity, price) {


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


    if (quantity.match(/^[0-9]+$/) && quantity !== '') {
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

  handleSubmit(item, quantity, price) {
    let id = this.state.invoiceId++

    if (this.handleFormValidation(item, quantity, price)) {

      this.props.createInvoice( id, item, quantity, price);

      this.setState({
        item: '',
        quantity: '',
        price: '',
      });
    }
  }


  render () {
    return (
      <thead className='table-header'>
        <tr>
          <th>
            <p style={{display: this.state.formValItem, color: 'red'}}>Please enter an item</p>
            <input style={{width: '200px'}} onChange={(e) => this.handleChangeItem(e)} type='text' placeholder='item' value={this.state.item} className='form-control'/>
          </th>
          <th>
            <p style={{display: this.state.formValQuantity, color: 'red'}}>Please enter a quantity</p>
            <input style={{width: '200px'}} onChange={(e) => this.handleChangeQuantity(e)} type='text' placeholder='quantity' value={this.state.quantity} className='form-control'/>
          </th>
          <th>
            <p style={{display: this.state.formValPrice, color: 'red'}}>Please enter a price</p>
            <input style={{width: '200px'}} onChange={(e) => this.handleChangePrice(e)} type='text' placeholder='price' value={this.state.price} className='form-control'/>
          </th>
          <th></th>
          <th></th>
          <th>
            <Button bsSize='small' bsStyle='primary' onClick={() => {this.handleSubmit( this.state.item, this.state.quantity, this.state.price)}}>Add Invoice</Button>
          </th>
        </tr>
      </thead>
    );
  }
}


export const Unwrapped = CreateInvoice
export default connect(null, actions)(CreateInvoice)
