import React from 'react';
import Header from '../../header/Header';
import {
  InvoiceTable,
  InvoiceListHead,
  TableHeading,
} from '../../styledComponents/invoices/invoiceTables';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import InvoiceListItem from './InvoiceListItem';

function Invoices() {
  const invoices = useSelector((state) => state.firestore.ordered.invoices);
  let tableListItems;
  if (isLoaded(invoices)) {
    tableListItems = invoices.map((invoice) => (
      <InvoiceListItem invoice={invoice} key={invoice.id} />
    ));
  }
  if (isEmpty(invoices)) return <h1>No Invoices</h1>;
  return (
    <div>
      <Header title={'Invoices'} />
      <div style={{ padding: '1rem' }}>
        <InvoiceTable style={{ margin: '0 auto' }}>
          <TableHeading>
            <h2>Invoice History</h2>
          </TableHeading>
          <InvoiceListHead>
            <p className="listHead number">No.</p>
            <p className="listHead date">Date</p>
            <p className="listHead name">Name</p>
            <p className="listHead amount">Amount</p>
            <p className="listHead status">Status</p>
            <p className="listHead option"></p>
          </InvoiceListHead>
          {tableListItems}
        </InvoiceTable>
      </div>
    </div>
  );
}

export default Invoices;
