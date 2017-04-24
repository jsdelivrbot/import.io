
# import.io Invoice Dashboard

## Application Overview
This dashboard is an admin tool to create, view, update or delete Invoices.


### Installation
Clone or download the repo.

'npm install' the dependencies.

'npm start'.

Using your web browser go to to localhost:8080 to use the site.


## User Guide

### Viewing Invoices
You can view Invoices from the 'Invoices' tab in the Nav bar.

### Creating Invoices
On the 'Invoices' page there's an 'Add Invoice' button to add Invoices. You must include an Item, Quantity, and Price. The new Invoice will be added to the top of the list.

### Edit Invoices
To edit an invoice click the edit icon and fill in the appropriate info, you must include an Item, Quantity, and Price.

### Delete Invoices
To delete an invoice click the X icon and confirm deletion.

### Subtotal, Tax, Total
These items will be calculated/re-calculated upon each action taken i.e. create, update, delete.

### Tests
4 snapshot tests provide some coverage for the UI.

4 reducer tests provide 100% coverage for reducer functionality.

On the command line type 'jest' and the tests will run.

## Stack
  FrontEnd: React + Redux + React-Router + React-Bootstrap

  Testing: Jest and Enzyme


### Redux Actions
  - `getInvoices`
  - `createInvoice`
  - `deleteInvoice`
  - `updateInvoice`


### React Routes
  - `/` Landing Page
  - `/invoices`: invoice dashboard


