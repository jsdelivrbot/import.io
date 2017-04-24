import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { Unwrapped as UnwrappedInvoices } from './Invoices'
import { Unwrapped as UnwrappedDeleteInvoice } from './DeleteInvoice'
import { Unwrapped as UnwrappedCreateInvoice } from './CreateInvoice'
import { Unwrapped as UnwrappedUpdateInvoiceModalForm } from './CreateInvoice'


test('Invoices snapshot test', () => {
  const component = shallow(<UnwrappedInvoices />)
  const tree = shallowToJson(component)

  expect(tree).toMatchSnapshot()
})

test('CreateInvoice snapshot test', () => {
  const component = shallow(<UnwrappedCreateInvoice />)
  const tree = shallowToJson(component)

  expect(tree).toMatchSnapshot()
})

test('DeleteInvoice snapshot test', () => {
  const component = shallow(<UnwrappedDeleteInvoice />)
  const tree = shallowToJson(component)

  expect(tree).toMatchSnapshot()
})


test('UpdateInvoiceModalForm snapshot test', () => {
  const component = shallow(<UnwrappedUpdateInvoiceModalForm />)
  const tree = shallowToJson(component)

  expect(tree).toMatchSnapshot()
})