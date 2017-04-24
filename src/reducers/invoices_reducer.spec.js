import reducers from './invoices_reducer'

test('INIT STATE', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({ allInvoices:[], subtotal:0, tax:0, total:0 })
})

test('CREATE_INVOICE', () => {
  let state
  state = reducers({ allInvoices:[], subtotal:0, tax:0, total:0 },
                   { type:'create_invoice', payload: { id:0, item:'Wine', quantity:'1', price:'10' }}
                  )

  expect(state).toEqual({ allInvoices:[{ id:0, item:'Wine', quantity:'1', price:'10' }],
                          subtotal:10, tax:0.5, total:10.5 })
})

test('UPDATE_INVOICE', () => {
  let state
  state = reducers({ allInvoices:[{ id:0, item:'Wine', quantity:'1', price:'10'}],
                     subtotal:10, tax:0.5, total:10.5},
                   { type:'update_invoice', payload:{ id:0, item:'Wine', quantity:'2', price:'10' }}
                   )

  expect(state).toEqual({ allInvoices:[{ id:0, item:'Wine', quantity:'2', price:'10' }],
                          subtotal:20, tax:1, total:21}
                       )
})

test('DELETE_INVOICE', () => {
  let state
  state = reducers({ allInvoices:[{ id:0, item:'Wine', quantity:'2', price:'10' }],
                     subtotal:20, tax:1, total:21},
                     {type:'delete_invoice', payload:{ id:0, quantity:'2', price:'10' }}
                  )

  expect(state).toEqual({allInvoices:[], subtotal:0,  tax:0,  total:0 })
})






