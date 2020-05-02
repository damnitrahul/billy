import React, { useState } from 'react';
//Vendor
import moment from 'moment';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Custom
import { InvoiceListItem as InvoiceList } from '../../styledComponents/invoices/invoiceTables';
import {
  deleteInovice,
  updatePaymentStatus
} from '../../../redux/actions/invoiceActions';
import {
  confirmDeleteAction,
  confirmPaymentChangeAction
} from '../../../redux/actions/alertDialogActions';

// Component
function InvoiceListItem(props) {
  const { invoice } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const currencySign = invoice.currency === 'usd' ? '$' : '₹';

  const handleOptionOpen = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleOptionClose = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const handleDeleteInvoice = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(confirmDeleteAction(deleteInovice(invoice.id)));
    setAnchorEl(null);
  };

  const togglePaymentStatus = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(
      confirmPaymentChangeAction(
        updatePaymentStatus(invoice.id, !invoice.paidStatus)
      )
    );

    setAnchorEl(null);
  };
  return (
    <Link to={`/invoice/${invoice.id}`}>
      <InvoiceList>
        <p className="number">{invoice.invoiceNumber}</p>
        <p className="date">
          {moment(invoice.invoiceDate.toDate()).format('DD-MM-YYYY')}
        </p>
        <p className="name">{invoice.customerName}</p>

        <p className="amount">
          {invoice.taxType === 'inc' &&
            invoice.taxEnable === 'true' &&
            currencySign +
              invoice.totalAmount.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
          {invoice.taxType === 'exc' &&
            invoice.taxEnable === 'true' &&
            currencySign +
              invoice.totalWithExclusiveTax.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
          {invoice.taxEnable === 'false' &&
            currencySign +
              invoice.totalAmount.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
        </p>
        <p className="status">
          {invoice.paidStatus ? (
            <span style={{ color: '#219735' }}>Fulfilled</span>
          ) : (
            <span style={{ color: '#FD5665' }}>Pending</span>
          )}
        </p>
        <p className="option">
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleOptionOpen}
            tabIndex={1}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}
            keepMounted
            open={open}
            onClose={handleOptionClose}
          >
            <MenuItem onClick={handleDeleteInvoice}>
              <p>Delete Invoice</p>
            </MenuItem>
            <MenuItem onClick={togglePaymentStatus}>
              {invoice.paidStatus ? (
                <p>Mark as Pending</p>
              ) : (
                <p>Mark as Paid</p>
              )}
            </MenuItem>
          </Menu>
        </p>
      </InvoiceList>
    </Link>
  );
}

export default InvoiceListItem;
