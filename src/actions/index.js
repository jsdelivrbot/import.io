import { GET_INVOICES, DELETE_INVOICE, CREATE_INVOICE, UPDATE_INVOICE } from './types';


export function getInvoices( ) {
  return {
    type: GET_INVOICES
  };
}

export function createInvoice ( id, item, quantity, price) {
  return {
    type: CREATE_INVOICE,
    payload: { id, item, quantity, price }
  };
}

export function deleteInvoice(id, quantity, price) {
  return   {
    type: DELETE_INVOICE,
    payload: { id, quantity, price }
  };
}

export function updateInvoice(id, item, quantity, price) {
  return {
    type: UPDATE_INVOICE,
    payload: { id, item, quantity, price }
  }
}
