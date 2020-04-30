import React from 'react';
//Vendor
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
// Custom
import {
  InvoiceListHead,
  InvoiceTable,
  TableHeading
} from '../../../styledComponents/invoices/invoiceTables';
import InvoiceListItem from '../../invoices/InvoiceListItem';
import { FlatButton } from '../../../styledComponents/shared/Button';
import InvoiceListLoader from '../../../loaders/dashboard/InvoiceListLoader';

// Component
function RecentInvoices() {
  const invoices = useSelector(
    (state) =>
      state.firestore.ordered.invoices &&
      state.firestore.ordered.invoices.slice(0, 5)
  );
  let tableListItems;

  if (isLoaded(invoices)) {
    tableListItems = invoices.map((invoice) => (
      <InvoiceListItem invoice={invoice} key={invoice.id} />
    ));
  }
  if (!isLoaded(invoices)) {
    tableListItems = Array.from({ length: 5 }).map((invoice, i) => (
      <InvoiceListLoader key={i} />
    ));
  }
  return (
    <InvoiceTable>
      <TableHeading>
        <h2 className="invoice-heading">Recent Invoices</h2>
        <div className="heading-cta">
          <FlatButton as={Link} to="/invoices">
            View All
          </FlatButton>
        </div>
      </TableHeading>
      <InvoiceListHead>
        <p className="number">No.</p>
        <p className="date">Date</p>
        <p className="name">Name</p>
        <p className="amount">Amount</p>
        <p className="status">Status</p>
        <p className="option"></p>
      </InvoiceListHead>
      {tableListItems}
    </InvoiceTable>
  );
}

export default RecentInvoices;
