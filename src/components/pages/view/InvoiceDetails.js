import React from 'react';

// Styled Component
import { Button } from '../../styledComponents/shared/Button';
import { ButtonDiv } from '../../styledComponents/incvoiceDetails/InvoiceDetailButtons';

// Components Import
import Header from '../../header/Header';
import InvoicePD from './InvoicePD';
import InvoicePDF from './InvoicePDF';

// Vendor
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { isLoaded } from 'react-redux-firebase';
import { PDFDownloadLink, BlobProvider } from '@react-pdf/renderer';
import {
  confirmDeleteAction,
  confirmEmailReminder
} from '../../../redux/actions/alertDialogActions';
import {
  deleteInovice,
  sendInvoiceMail
} from '../../../redux/actions/invoiceActions';
import { useState } from 'react';

function InvoiceDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [pdfUrl, setPdfUrl] = useState();
  const invoice = useSelector(
    (state) =>
      state.firestore.data.invoices && state.firestore.data.invoices[id]
  );

  const loadingState = useSelector((state) => state.loadingState.emailSendBtn);

  if (!isLoaded(invoice)) return <h1>Loading...</h1>;

  const handleDeleteInvoice = () => {
    dispatch(confirmDeleteAction(deleteInovice(id)));
  };

  const handleEmailInvoice = () => {
    dispatch(confirmEmailReminder(sendInvoiceMail(id)));
  };
  const diff = new Date() - invoice.invoiceDate.toDate();
  console.log(Math.floor(diff / 1000 / 60 / 60 / 24));
  return (
    <div>
      <Header title={'Invoice Details'} />
      <InvoicePD invoice={invoice} />
      <ButtonDiv>
        <Button onClick={handleEmailInvoice} disabled={loadingState}>
          <i className="tio-send"></i> Send Email{' '}
          {loadingState && <i className="tio-sync spin-load"></i>}
        </Button>
        <Button
          as={PDFDownloadLink}
          secondary
          document={<InvoicePDF invoice={invoice} />}
          fileName={invoice.invoiceNumber}
        >
          {({ blob, url, loading, error }) => (
            <>
              {!loading && setPdfUrl(url)}
              <i className="tio-download_to"></i>{' '}
              {loading ? 'Loading...' : 'Download'}
            </>
          )}
        </Button>

        <Button as="a" href={pdfUrl} target="_blank" secondary>
          <i className="tio-print"></i> Print
        </Button>
        <Button color="#FD5665" onClick={handleDeleteInvoice}>
          <i className="tio-delete"></i> Delete
        </Button>
      </ButtonDiv>
    </div>
  );
}

export default InvoiceDetails;
