import React from 'react';
import { InvoiceListItem } from '../../styledComponents/invoices/invoiceTables';
import styled from 'styled-components';

const Loader = styled(InvoiceListItem)`
  p {
    padding: 0.8rem;
    background: #f6f7f8;
    background-image: -webkit-gradient(
      linear,
      left center,
      right center,
      from(#f6f7f8),
      color-stop(0.2, #edeef1),
      color-stop(0.4, #f6f7f8),
      to(#f6f7f8)
    );
    background-image: -webkit-linear-gradient(
      left,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 300%;
    border-radius: 5px;
    animation: placeHolderShimmer 10s linear infinite forwards;
    @keyframes placeHolderShimmer {
      0% {
        background-position: -490px 0;
      }
      100% {
        background-position: 490px 0;
      }
    }
  }
  padding: 1rem;
`;
function InvoiceListLoader() {
  return (
    <Loader>
      <p className="number"></p>
      <p className="date"></p>
      <p className="amount"></p>
      <p className="name"></p>
      <p className="status"></p>
      <p className="option"></p>
    </Loader>
  );
}

export default InvoiceListLoader;
