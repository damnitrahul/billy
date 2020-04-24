import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Widget } from '../../../styledComponents/dashboard/Widget';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import SmallSummaryCard from '../../../loaders/dashboard/SmallSummaryCard';

function CreateInvoice() {
  const totalInvoices = useSelector(
    (state) =>
      state.firestore.ordered.invoices &&
      state.firestore.ordered.invoices.length
  );

  if (!isLoaded(totalInvoices)) {
    return <SmallSummaryCard />;
  }
  return (
    <Widget as={Link} to={'/create'} color="#00C1D4">
      <div className="icon">
        <i className="tio-add_circle_outlined"></i>
      </div>
      <div className="widget-text">
        <h2>Create New</h2>
        <p>Total Invoices: {totalInvoices}</p>
      </div>
    </Widget>
  );
}

export default CreateInvoice;
