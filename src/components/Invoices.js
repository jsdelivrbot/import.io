import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions' ;
import CreateInvoice from './CreateInvoice';
import UpdateInvoiceButton from './UpdateInvoiceButton';
import DeleteInvoiceButton from './DeleteInvoiceButton';



class Invoices extends Component {
  constructor() {
    super();

    this.state = {
      updated: false
    };

    this.handleUpdating = this.handleUpdating.bind(this);
  }


  componentDidMount() {
    this.props.getInvoices();
  }

  handleUpdating() {
    this.setState({
      updated: !this.state.updated
    });
  }

  componentWillReceiveProps(nextProps) {
    let invoices = this.props.allInvoices;

    // this will only trigger on an Edit
    if (this.state.updated) {
      this.setState({
        updated: !this.state.updated
      });

      this.renderTable(nextProps.allInvoices);
    }

    // this will only trigger on a Create/Delete
    if ( invoices !== undefined && nextProps.allInvoices !== undefined ) {
      if (invoices.length !== nextProps.allInvoices.length) {
        this.props.getInvoices();
      }
    }
  }

  renderTable () {
    if (this.props.allInvoices) {
      return this.props.allInvoices.map((invoice) =>
          <tr key={invoice.id} >
            <td >{invoice.item}</td>
            <td>{invoice.quantity}</td>
            <td >${invoice.price}</td>
            <td>${invoice.quantity * invoice.price}</td>
            <td>
              <UpdateInvoiceButton invoice={invoice} handleUpdating={this.handleUpdating}/>
            </td>
            <td>
              <DeleteInvoiceButton invoice={invoice}/>
            </td>
          </tr>
      );
    }
  }



  render () {
    return (
      <div >
        <h1 className='invoices-header'>Invoices</h1>

        <div className='table-container'>
          <table className="table table-hover col-xs-2 ">
            <thead className='table-header'>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody >
              {this.renderTable()}
            </tbody>
              <CreateInvoice />
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Subtotal</td>
                <td>${this.props.subtotal}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Tax(5%)</td>
                <td>${this.props.tax}</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>${this.props.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    allInvoices: state.invoices.allInvoices,
    subtotal: state.invoices.subtotal,
    tax: state.invoices.tax,
    total: state.invoices.total
  };
}

export const Unwrapped = Invoices
export default connect(mapStateToProps, actions)(Invoices);


