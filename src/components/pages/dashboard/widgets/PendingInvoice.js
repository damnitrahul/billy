import React from 'react';
//Vendor
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
// Custom
import { Widget } from '../../../styledComponents/dashboard/Widget';
import SmallSummaryCard from '../../../loaders/dashboard/SmallSummaryCard';

// Component
function PendingInvoice() {
  const pendingInvoices = useSelector(
    (state) =>
      state.firestore.ordered.invoices &&
      state.firestore.ordered.invoices.filter((invoice) => !invoice.paidStatus)
        .length
  );

  if (!isLoaded(pendingInvoices)) {
    return <SmallSummaryCard />;
  }

  return (
    <Widget color="#F03738">
      <div className="icon">
        <i className="tio-time"></i>
      </div>
      <div className="widget-text">
        <h2>Pending</h2>
        <p>Invoices: {pendingInvoices}</p>
      </div>
    </Widget>
  );
}

export default PendingInvoice;
