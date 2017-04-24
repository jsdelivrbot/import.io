import { combineReducers } from 'redux';
import invoices_reducer from './invoices_reducer';


const rootReducer = combineReducers({
  invoices: invoices_reducer
});

export default rootReducer;

