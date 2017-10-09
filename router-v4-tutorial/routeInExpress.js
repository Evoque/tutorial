
/**
 *  configure routes in express:
 */


app.get('/', handleIndex);
app.get('/invoices', handleInvoices);
app.get('/invoices/:id', handleInvoice);
app.get('/invoices/:id/edit', handleInvoiceEdit);

app.listen();