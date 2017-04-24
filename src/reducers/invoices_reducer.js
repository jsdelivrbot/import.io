import { UPDATE_INVOICE, GET_INVOICES, CREATE_INVOICE, DELETE_INVOICE } from '../actions/types';


let subtotal = 0;
let tax = 0;
let total = 0;


export default function(state = { allInvoices: [], subtotal, tax, total }, action = {}) {
  switch (action.type) {

    case GET_INVOICES:
      return {
        ...state,
        subtotal,
        tax: Number(tax.toFixed(2)),
        total: Number(total.toFixed(2)),
      };

    case CREATE_INVOICE:
      subtotal += action.payload.quantity * action.payload.price
      tax = subtotal * .05
      total = subtotal + tax

      return {
        ...state,
        allInvoices: [
        action.payload,
          ...state.allInvoices
        ],
        subtotal,
        tax: Number(tax.toFixed(2)),
        total: Number(total.toFixed(2))
      }

    case DELETE_INVOICE:
      let prevSubtotal = action.payload.quantity * action.payload.price
      let prevTax = prevSubtotal * .05

      subtotal -= prevSubtotal
      tax -= prevTax
      total -= (prevTax + prevSubtotal)

      return {
        ...state,
        allInvoices: [
        ...state.allInvoices.filter(invoice => invoice.id !== action.payload.id)
        ],
        subtotal,
        tax: Number(tax.toFixed(2)),
        total: Number(total.toFixed(2))
      }

    case UPDATE_INVOICE:
      let updatedInvoice;
        for(var i = 0; i < state.allInvoices.length; i++){
          if (state.allInvoices[i].id === action.payload.id) {
            updatedInvoice = state.allInvoices[i];

            let prevQuantity = updatedInvoice.quantity
            let prevPrice = updatedInvoice.price
            let prevTax = (prevQuantity * prevPrice) * .05
            let prevSubtotal = prevQuantity * prevPrice

            subtotal -= prevSubtotal
            tax -= prevTax
            total -= (prevTax + prevSubtotal)

            let currQuantity = action.payload.quantity
            let currPrice = action.payload.price
            let currTax = (currQuantity * currPrice) * .05
            let currSubtotal = currQuantity * currPrice

            subtotal += currQuantity * currPrice
            tax += currTax
            total += currTax + currSubtotal

            updatedInvoice.item = action.payload.item;
            updatedInvoice.quantity = action.payload.quantity;
            updatedInvoice.price = action.payload.price;
          }
        }

    return {
      ...state,
      subtotal,
      tax: Number(tax.toFixed(2)),
      total: Number(total.toFixed(2)),
    }
  }

  return state;
}